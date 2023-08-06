package BookStoreServicev1

import (
	"context"
	"fmt"
	"io"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/metadata"

	sylkChannel "github.com/sylk-build/sylk-examples/bookstore-go/clients/go/utils"
	// Importing services
	// Importing packages
	bookv1 "github.com/sylk-build/sylk-examples/bookstore-go/services/protos/public/bookstore/book/v1"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// 'BookStoreService' represents the project services facing client side
type BookStoreService struct {
	host             string            // Host name should be a valid ip or domain
	port             int               // Port that been served by the host
	dialOpts         []grpc.DialOption // Connection dial options
	callOpts         []grpc.CallOption // Connection call options
	md               metadata.MD       // Global metadata
	ctx              context.Context   // Global context
	conn             *grpc.ClientConn  // A client connection object
	bookstoreservice bookv1.BookStoreServiceClient
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
	DefaultMetadata = metadata.Pairs("sylk-version", "0.3.3")
	DefaultCtx      = context.Background()
	std             = New(DefaultHost, DefaultPort, DefaultDialOpts, DefaultCallOpts, DefaultMetadata, DefaultCtx)
)

// Default returns the standard client used by the project-level services RPC's.
func Defualt() *BookStoreService { return std }

// Create new client stub
func New(host string, port int, dialOpts []grpc.DialOption, callOpts []grpc.CallOption, md metadata.MD, ctx context.Context) *BookStoreService {

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
	bookstoreserviceClient := bookv1.NewBookStoreServiceClient(conn)
	c := &BookStoreService{host, port, dialOpts, callOpts, md, ctx, conn, bookstoreserviceClient}
	return c
}

// sylk.build - public.bookstore.book.v1.BookStoreService.ListBooks
// Description: None
// Read: https://www.sylk.build/docs/go/server-stream
func (c *BookStoreService) ListBooks(message *emptypb.Empty) []*bookv1.Book {
	log.Printf("Calling ListBooks %v", message)

	ctx, cancel := context.WithTimeout(c.ctx, 10*time.Second)

	defer cancel()

	stream, err := c.bookstoreservice.ListBooks(ctx, message)

	if err != nil {
		log.Printf("Client call ListBooks failed: %v", err)
	}

	var listResponses []*bookv1.Book

	waitc := make(chan struct{})

	go func() {
		for {
			Book, err := stream.Recv()
			if err == io.EOF {
				close(waitc)
				break
			}
			if err != nil {
				log.Printf("Client call ListBooks stream message failed: %v", err)
			}
			listResponses = append(listResponses, Book)
		}
	}()
	<-waitc
	return listResponses
}

// [sylk.build] - public.bookstore.book.v1.BookStoreService.GetBook
// Description: None
// Read: https://www.sylk.build/docs/go/unary-call
func (c *BookStoreService) GetBook(message *bookv1.GetBookRequest) (*bookv1.Book, metadata.MD, metadata.MD) {
	log.Printf("Calling GetBook %v", message)

	ctx, cancel := context.WithTimeout(c.ctx, 10*time.Second)

	defer cancel()

	var header, trailer metadata.MD

	response, err := c.bookstoreservice.GetBook(ctx, message, grpc.Header(&header), grpc.Trailer(&trailer))

	if err != nil {
		log.Printf("Client call GetBook failed: %v", err)
	}

	return response, header, trailer
}
