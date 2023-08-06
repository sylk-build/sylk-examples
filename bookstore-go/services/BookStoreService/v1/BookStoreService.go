package BookStoreService

import (
	"context"

	bookv1 "github.com/sylk-build/sylk-examples/bookstore-go/services/protos/public/bookstore/book/v1"
	"github.com/sylk-build/sylk-examples/bookstore-go/services/utils"
	"google.golang.org/grpc/metadata"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

type BookStoreService struct {
	bookv1.UnimplementedBookStoreServiceServer
}

// [sylk.build] - BookStoreService.ListBooks - None
func (BookStoreServiceServicer *BookStoreService) ListBooks(Empty *emptypb.Empty, stream bookv1.BookStoreService_ListBooksServer) (err error) {
	printLog("ListBooks", stream.Context(), nil)
	books := []bookv1.Book{
		{
			Name: "Clean Code: A Handbook of Agile Software Craftsmanship",
		},
		{
			Name: "The Pragmatic Programmer: Your Journey to Mastery",
		},
		{
			Name: "Design Patterns: Elements of Reusable Object-Oriented Software",
		},
	}
	// Iterate over the list of books and send each book as a Book message through the stream
	for _, book := range books {
		if err := stream.Send(&book); err != nil {
			return err
		}
	}

	return nil
}

// [sylk.build] - BookStoreService.GetBook - None
func (BookStoreServiceServicer *BookStoreService) GetBook(ctx context.Context, GetBookRequest *bookv1.GetBookRequest) (response *bookv1.Book, err error) {
	printLog("GetBook", ctx, GetBookRequest)
	return &bookv1.Book{}, nil
}

func printLog(name string, ctx context.Context, message interface{}) {
	contextMetadata, _ := metadata.FromIncomingContext(ctx)
	utils.InfoLogger.Printf("[%s] Got RPC request: %v", name, message)
	utils.DebugLogger.Printf("[%s] Metadata: %v", name, contextMetadata)
}
