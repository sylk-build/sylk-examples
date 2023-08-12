// sylk.build Generated Server Code
package main

import (
	"flag"
	"fmt"
	"log"
	"net"

	IotServicev1 "github.com/sylk-build/sylk-examples/sylk-iot/services/IotService/v1"
	IotServicev1Servicer "github.com/sylk-build/sylk-examples/sylk-iot/services/protos/sylklabs/iot/v1"
	iotv1 "github.com/sylk-build/sylk-examples/sylk-iot/services/protos/sylklabs/iot/v1"
	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 44880, "The server port")
)

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%d", *port))
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	IotServicev1Servicer.RegisterIotServiceServer(grpcServer, &IotServicev1.IotService{
		Subscribers: make(map[string][]chan<- *iotv1.SensorData),
	})
	log.Printf("[sylk.build] Starting server (Go) at -> %d", *port)
	grpcServer.Serve(lis)
}
