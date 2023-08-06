# bookstore-go

This project has been generated thanks to [```sylk.build```](https://www.sylk.build) !

This project is using gRPC as main code generator and utilize HTTP2 + protobuf protocols for communication.

# Index
Usage:
- [Go](#go)

Resources:
- [BookStoreService](#bookstoreservice)
- [bookstore](#bookstore)

# Services

## BookStoreService

__`ListBooks`__ [Server stream]
- Input: [google.protobuf.Empty](#empty)
- Output: [public.bookstore.book.v1.Book](#book)

__`GetBook`__ [Unary]
- Input: [public.bookstore.book.v1.GetBookRequest](#getbookrequest)
- Output: [public.bookstore.book.v1.Book](#book)

# Packages

## `public.bookstore.book.v1`


<details id="#GetBookRequest">
<summary><b>GetBookRequest</b></summary>

### __GetBookRequest__
: 
* __Name__ [TYPE_STRING]

</details>


<details id="#Book">
<summary><b>Book</b></summary>

### __Book__
: The bookstore main entity "Book".

* __name__ [TYPE_STRING]

</details>


# Usage

This project supports clients communication in the following languages:

### Go

```go
package main
import (
	"fmt"

	client "github.com/sylk-build/sylk-examples/bookstore-go/clients/go/<path-to-service>"
)

func main() {
	//Init the client
	c := client.Default()

	// Construct a message
	msg :=  <SomePackage>.<SomeMessage>{}

	// Send unary
	res, _, _ := c.<SomeRpc>(&msg)
	fmt.Printf("Got server unary response: %v",res)

	// Client Stream
	ListMessages := []*<Package>.<Message>{
		{},
	}
	clientStream := c.<ClientStreamingRPC>(ListMessages)
	fmt.Printf("Got response for client stream: %v", clientStream)

	// Server stream
	response_stream := c.<SomeServerStreamRPC>(&msg)
	fmt.Printf("Got server stream response: %v", response_stream)

}
```


* * *
__This project and README file has been created thanks to [sylk.build](https://www.sylk.build)__