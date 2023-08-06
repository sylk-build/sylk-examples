// sylk.build Generated Server Code
package main

import (
	"flag"
	"fmt"
	"log"
	"net"

	BookStoreServicev1 "github.com/sylk-build/sylk-examples/bookstore-go/services/BookStoreService/v1"
	BookStoreServicev1Servicer "github.com/sylk-build/sylk-examples/bookstore-go/services/protos/public/bookstore/book/v1"
	"google.golang.org/grpc"
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
	BookStoreServicev1Servicer.RegisterBookStoreServiceServer(grpcServer, new(BookStoreServicev1.BookStoreService))
	log.Printf("[sylk.build] Starting server (Go) at -> %d", *port)
	grpcServer.Serve(lis)
}
