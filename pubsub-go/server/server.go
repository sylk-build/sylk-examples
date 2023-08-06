// sylk.build Generated Server Code
package main

import (
	"log"
	"fmt"
	"flag"
	"net"
	"google.golang.org/grpc"
	PubsubServicer "github.com/pubsubgo/services/protos/Pubsub"
	Pubsub "github.com/pubsubgo/services/Pubsub"
)
var (
	port = flag.Int("port", 44880, "The server port")
)

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", *port))
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	PubsubServicer.RegisterPubsubServer(grpcServer, new(Pubsub.Pubsub));
	log.Printf("[sylk.build] Starting server (Go) at -> %d",*port)
	grpcServer.Serve(lis)
}