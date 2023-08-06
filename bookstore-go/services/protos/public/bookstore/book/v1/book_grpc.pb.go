// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: public/bookstore/book/v1/book.proto

package bookv1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// BookStoreServiceClient is the client API for BookStoreService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BookStoreServiceClient interface {
	// [public.bookstore.book.v1.BookStoreService.ListBooks] -
	ListBooks(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (BookStoreService_ListBooksClient, error)
	// [public.bookstore.book.v1.BookStoreService.GetBook] -
	GetBook(ctx context.Context, in *GetBookRequest, opts ...grpc.CallOption) (*Book, error)
}

type bookStoreServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBookStoreServiceClient(cc grpc.ClientConnInterface) BookStoreServiceClient {
	return &bookStoreServiceClient{cc}
}

func (c *bookStoreServiceClient) ListBooks(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (BookStoreService_ListBooksClient, error) {
	stream, err := c.cc.NewStream(ctx, &BookStoreService_ServiceDesc.Streams[0], "/public.bookstore.book.v1.BookStoreService/ListBooks", opts...)
	if err != nil {
		return nil, err
	}
	x := &bookStoreServiceListBooksClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type BookStoreService_ListBooksClient interface {
	Recv() (*Book, error)
	grpc.ClientStream
}

type bookStoreServiceListBooksClient struct {
	grpc.ClientStream
}

func (x *bookStoreServiceListBooksClient) Recv() (*Book, error) {
	m := new(Book)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *bookStoreServiceClient) GetBook(ctx context.Context, in *GetBookRequest, opts ...grpc.CallOption) (*Book, error) {
	out := new(Book)
	err := c.cc.Invoke(ctx, "/public.bookstore.book.v1.BookStoreService/GetBook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BookStoreServiceServer is the server API for BookStoreService service.
// All implementations must embed UnimplementedBookStoreServiceServer
// for forward compatibility
type BookStoreServiceServer interface {
	// [public.bookstore.book.v1.BookStoreService.ListBooks] -
	ListBooks(*emptypb.Empty, BookStoreService_ListBooksServer) error
	// [public.bookstore.book.v1.BookStoreService.GetBook] -
	GetBook(context.Context, *GetBookRequest) (*Book, error)
	mustEmbedUnimplementedBookStoreServiceServer()
}

// UnimplementedBookStoreServiceServer must be embedded to have forward compatible implementations.
type UnimplementedBookStoreServiceServer struct {
}

func (UnimplementedBookStoreServiceServer) ListBooks(*emptypb.Empty, BookStoreService_ListBooksServer) error {
	return status.Errorf(codes.Unimplemented, "method ListBooks not implemented")
}
func (UnimplementedBookStoreServiceServer) GetBook(context.Context, *GetBookRequest) (*Book, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBook not implemented")
}
func (UnimplementedBookStoreServiceServer) mustEmbedUnimplementedBookStoreServiceServer() {}

// UnsafeBookStoreServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BookStoreServiceServer will
// result in compilation errors.
type UnsafeBookStoreServiceServer interface {
	mustEmbedUnimplementedBookStoreServiceServer()
}

func RegisterBookStoreServiceServer(s grpc.ServiceRegistrar, srv BookStoreServiceServer) {
	s.RegisterService(&BookStoreService_ServiceDesc, srv)
}

func _BookStoreService_ListBooks_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(emptypb.Empty)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(BookStoreServiceServer).ListBooks(m, &bookStoreServiceListBooksServer{stream})
}

type BookStoreService_ListBooksServer interface {
	Send(*Book) error
	grpc.ServerStream
}

type bookStoreServiceListBooksServer struct {
	grpc.ServerStream
}

func (x *bookStoreServiceListBooksServer) Send(m *Book) error {
	return x.ServerStream.SendMsg(m)
}

func _BookStoreService_GetBook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBookRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BookStoreServiceServer).GetBook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/public.bookstore.book.v1.BookStoreService/GetBook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BookStoreServiceServer).GetBook(ctx, req.(*GetBookRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BookStoreService_ServiceDesc is the grpc.ServiceDesc for BookStoreService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BookStoreService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "public.bookstore.book.v1.BookStoreService",
	HandlerType: (*BookStoreServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetBook",
			Handler:    _BookStoreService_GetBook_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ListBooks",
			Handler:       _BookStoreService_ListBooks_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "public/bookstore/book/v1/book.proto",
}
