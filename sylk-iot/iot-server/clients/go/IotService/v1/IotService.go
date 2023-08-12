package IotServicev1

import (
	"context"
	"fmt"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/metadata"

	sylkChannel "github.com/sylk-build/sylk-examples/sylk-iot/clients/go/utils"
	// Importing services
	// Importing packages
	iotv1 "github.com/sylk-build/sylk-examples/sylk-iot/services/protos/sylklabs/iot/v1"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// 'IotService' represents the project services facing client side
type IotService struct {
	host       string            // Host name should be a valid ip or domain
	port       int               // Port that been served by the host
	dialOpts   []grpc.DialOption // Connection dial options
	callOpts   []grpc.CallOption // Connection call options
	md         metadata.MD       // Global metadata
	ctx        context.Context   // Global context
	conn       *grpc.ClientConn  // A client connection object
	iotservice iotv1.IotServiceClient
}

// Initalize default constants

var (
	DefaultMsgSize  = 1024 * 1024 * 50 // Max Recv / Send message 50MB as default
	DefaultHost     = "localhost"
	DefaultPort     = 44880
	DefaultDialOpts = []grpc.DialOption{
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithDefaultCallOptions(
			grpc.MaxCallRecvMsgSize(DefaultMsgSize),
			grpc.MaxCallSendMsgSize(DefaultMsgSize)),
	}
	DefaultCallOpts = []grpc.CallOption{}
	DefaultMetadata = metadata.Pairs("sylk-version", "0.3.4")
	DefaultCtx      = context.Background()
	std             = New(DefaultHost, DefaultPort, DefaultDialOpts, DefaultCallOpts, DefaultMetadata, DefaultCtx)
)

// Default returns the standard client used by the project-level services RPC's.
func Defualt() *IotService { return std }

// Create new client stub
func New(host string, port int, dialOpts []grpc.DialOption, callOpts []grpc.CallOption, md metadata.MD, ctx context.Context) *IotService {

	if len(dialOpts) == 0 {
		dialOpts = DefaultDialOpts
	}

	if host == "" {
		host = DefaultHost
	}

	if port == 0 {
		port = DefaultPort
	}

	if md == nil {
		md = DefaultMetadata
	} else {
		md = metadata.Join(md, DefaultMetadata)
	}

	if ctx == nil {
		ctx = DefaultCtx
	}
	ctx = metadata.NewOutgoingContext(ctx, md)

	log.SetFlags(log.Lshortfile + log.Ltime)

	connBuilder := sylkChannel.GrpcConnBuilder{}

	connBuilder.WithContext(ctx)
	connBuilder.WithOptions(dialOpts...)
	// Dailing to client target
	conn, err := connBuilder.GetConn(fmt.Sprintf("%s:%d", host, port))
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	iotserviceClient := iotv1.NewIotServiceClient(conn)
	c := &IotService{host, port, dialOpts, callOpts, md, ctx, conn, iotserviceClient}
	return c
}

// sylk.build - sylklabs.iot.v1.IotService.Subscribe
// Description: None
// Read: https://www.sylk.build/docs/go/server-stream
func (c *IotService) Subscribe(message *iotv1.Topic, serverStream chan<- *iotv1.SensorData, done chan struct{}) {
	log.Printf("Calling Subscribe %v", message)

	ctx, cancel := context.WithTimeout(c.ctx, 10*time.Second)

	defer cancel()

	stream, err := c.iotservice.Subscribe(ctx, message)

	if err != nil {
		log.Printf("Client call Subscribe failed: %v", err)
	}

	defer stream.CloseSend()
	for {
		select {
		case <-done:
			return
		default:
			payload, err := stream.Recv()
			if err != nil {
				log.Fatalf("Failed to recieve data: %v", err)
			}

			// Send the recieved paylod to the main goroutine via the serverStream channel
			serverStream <- payload
		}
	}
}

// [sylk.build] - sylklabs.iot.v1.IotService.Publish
// Description: None
// Read: https://www.sylk.build/docs/go/unary-call
func (c *IotService) Publish(message *iotv1.PublishRequest) (*emptypb.Empty, metadata.MD, metadata.MD) {
	log.Printf("Calling Publish %v", message)

	ctx, cancel := context.WithTimeout(c.ctx, 10*time.Second)

	defer cancel()

	var header, trailer metadata.MD

	response, err := c.iotservice.Publish(ctx, message, grpc.Header(&header), grpc.Trailer(&trailer))

	if err != nil {
		log.Printf("Client call Publish failed: %v", err)
	}

	return response, header, trailer
}
