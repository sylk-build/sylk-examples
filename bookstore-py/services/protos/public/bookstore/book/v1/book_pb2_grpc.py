# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from public.bookstore.book.v1 import book_pb2 as public_dot_bookstore_dot_book_dot_v1_dot_book__pb2


class BookStoreServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListBooks = channel.unary_stream(
                '/public.bookstore.book.v1.BookStoreService/ListBooks',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=public_dot_bookstore_dot_book_dot_v1_dot_book__pb2.Book.FromString,
                )
        self.GetBook = channel.unary_unary(
                '/public.bookstore.book.v1.BookStoreService/GetBook',
                request_serializer=public_dot_bookstore_dot_book_dot_v1_dot_book__pb2.GetBookRequest.SerializeToString,
                response_deserializer=public_dot_bookstore_dot_book_dot_v1_dot_book__pb2.Book.FromString,
                )


class BookStoreServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListBooks(self, request, context):
        """[public.bookstore.book.v1.BookStoreService.ListBooks] - 
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetBook(self, request, context):
        """[public.bookstore.book.v1.BookStoreService.GetBook] - 
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_BookStoreServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListBooks': grpc.unary_stream_rpc_method_handler(
                    servicer.ListBooks,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=public_dot_bookstore_dot_book_dot_v1_dot_book__pb2.Book.SerializeToString,
            ),
            'GetBook': grpc.unary_unary_rpc_method_handler(
                    servicer.GetBook,
                    request_deserializer=public_dot_bookstore_dot_book_dot_v1_dot_book__pb2.GetBookRequest.FromString,
                    response_serializer=public_dot_bookstore_dot_book_dot_v1_dot_book__pb2.Book.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'public.bookstore.book.v1.BookStoreService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class BookStoreService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListBooks(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/public.bookstore.book.v1.BookStoreService/ListBooks',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            public_dot_bookstore_dot_book_dot_v1_dot_book__pb2.Book.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetBook(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/public.bookstore.book.v1.BookStoreService/GetBook',
            public_dot_bookstore_dot_book_dot_v1_dot_book__pb2.GetBookRequest.SerializeToString,
            public_dot_bookstore_dot_book_dot_v1_dot_book__pb2.Book.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
