package IotService

import (
	"context"
	"sync"

	iotv1 "github.com/sylk-build/sylk-examples/sylk-iot/services/protos/sylklabs/iot/v1"
	"github.com/sylk-build/sylk-examples/sylk-iot/services/utils"
	"google.golang.org/grpc/metadata"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

type IotService struct {
	iotv1.UnimplementedIotServiceServer
	Subscribers map[string][]chan<- *iotv1.SensorData
	mu          sync.Mutex
}

// [sylk.build] - IotService.Subscribe - None
func (IotServiceServicer *IotService) Subscribe(Topic *iotv1.Topic, stream iotv1.IotService_SubscribeServer) (err error) {
	// printLog("Subscribe", ctx, Topic)

	topicName := Topic.Name

	// Create a channel for this client's stream
	subscriberChannel := make(chan *iotv1.SensorData)
	defer func() {
		// Close the channel when the stream is closed
		close(subscriberChannel)
	}()

	// Register the channel for this topic
	IotServiceServicer.mu.Lock()
	IotServiceServicer.Subscribers[topicName] = append(IotServiceServicer.Subscribers[topicName], subscriberChannel)
	IotServiceServicer.mu.Unlock()

	// Send data to the client's stream
	for payload := range subscriberChannel {
		err := stream.Send(payload)
		if err != nil {
			// Client disconnected, remove the subscriber channel
			IotServiceServicer.mu.Lock()
			channels := IotServiceServicer.Subscribers[topicName]
			for i, ch := range channels {
				if ch == subscriberChannel {
					// Remove the subscriber channel from the slice
					IotServiceServicer.Subscribers[topicName] = append(channels[:i], channels[i+1:]...)
					break
				}
			}
			IotServiceServicer.mu.Unlock()
			break
		}
	}

	return nil
}

// [sylk.build] - IotService.Publish - None
func (IotServiceServicer *IotService) Publish(ctx context.Context, PublishRequest *iotv1.PublishRequest) (response *emptypb.Empty, err error) {
	printLog("Publish", ctx, PublishRequest)
	topicName := PublishRequest.Topic // You can add logic to specify the topic
	IotServiceServicer.mu.Lock()
	Subscribers := IotServiceServicer.Subscribers[topicName]
	IotServiceServicer.mu.Unlock()

	for _, ch := range Subscribers {
		// Send the data to all Subscribers listening to the topic
		ch <- PublishRequest.Data
	}

	return &emptypb.Empty{}, nil
}

func printLog(name string, ctx context.Context, message interface{}) {
	contextMetadata, _ := metadata.FromIncomingContext(ctx)
	utils.InfoLogger.Printf("[%s] Got RPC request: %v", name, message)
	utils.DebugLogger.Printf("[%s] Metadata: %v", name, contextMetadata)
}
