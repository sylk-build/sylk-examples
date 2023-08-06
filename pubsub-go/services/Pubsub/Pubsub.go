package Pubsub

import (
	"context"

	API "github.com/pubsubgo/services/protos/API"
	PubsubServicer "github.com/pubsubgo/services/protos/Pubsub"
	"github.com/pubsubgo/services/utils"
	"google.golang.org/grpc/metadata"
	"google.golang.org/protobuf/types/known/emptypb"
)

type Pubsub struct {
	PubsubServicer.UnimplementedPubsubServer
}

// [sylk.build] - Pubsub.Publish - None
func (PubsubServicer *Pubsub) Publish(ctx context.Context, Event *API.Event) (response *emptypb.Empty, err error) {
	printLog("Publish", ctx, Event)
	return &emptypb.Empty{}, nil
}

// [sylk.build] - Pubsub.Subscribe - None
func (PubsubServicer *Pubsub) Subscribe(Channel *API.Channel, stream PubsubServicer.Pubsub_SubscribeServer) (err error) {
	printLog("Subscribe", stream.Context(), nil)
	// Do loop for responses
	return nil
}

func printLog(name string, ctx context.Context, message interface{}) {
	contextMetadata, _ := metadata.FromIncomingContext(ctx)
	utils.InfoLogger.Printf("[%s] Got RPC request: %v", name, message)
	utils.DebugLogger.Printf("[%s] Metadata: %v", name, contextMetadata)
}
