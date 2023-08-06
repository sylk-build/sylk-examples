"""sylk.build service implemantation for -> BookStoreService"""
import grpc
from google.protobuf.timestamp_pb2 import Timestamp
from typing import Iterator
from google.protobuf import empty_pb2
from services.protos.public.bookstore.book.v1 import book_pb2_grpc, book_pb2

class BookStoreService(book_pb2_grpc.BookStoreServiceServicer):

	# @rpc @@sylk - DO NOT REMOVE
	def ListBooks(self, request: empty_pb2.Empty, context: grpc.ServicerContext) -> Iterator[book_pb2.Book]:
		# responses = [book_pb2.Book(name=None)]
		# for res in responses:
		#    yield res

		super().ListBooks(request, context)

	# @rpc @@sylk - DO NOT REMOVE
	def GetBook(self, request: book_pb2.GetBookRequest, context: grpc.ServicerContext) -> book_pb2.Book:
		# response = book_pb2.Book(name=None)
		# return response

		super().GetBook(request, context)

