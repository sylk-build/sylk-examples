"""sylk.build Generated Server Code"""
_ONE_DAY_IN_SECONDS = 60 * 60 * 24
from concurrent import futures
import time
import grpc
from services.protos.public.bookstore.book.v1 import book_pb2_grpc as book_v1_pb2_grpc
from services.BookStoreService.v1.BookStoreService import BookStoreService as BookStoreService_v1

def serve(host="0.0.0.0:44880"):
	server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
	book_v1_pb2_grpc.add_BookStoreServiceServicer_to_server(BookStoreService_v1(),server)
	server.add_insecure_port(host)
	server.start()
	print("[*] Started sylk.build server at -> %s" % (host))
	try:
		while True:
			time.sleep(_ONE_DAY_IN_SECONDS)
	except KeyboardInterrupt:
		server.stop(0)

if __name__ == "__main__":
	serve()