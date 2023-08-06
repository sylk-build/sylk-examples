# bookstore-py

This project has been generated thanks to [```sylk.build```](https://www.sylk.build) !

This project is using gRPC as main code generator and utilize HTTP2 + protobuf protocols for communication.

# Index
Usage:
- [Python](#python)

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

### Python

```py
from clients.python import bookstorepy

client = bookstorepy()

# Unary call
response = stub.<Unary>(<InMessage>())
print(response)

# Server stream
responses = stub.<ServerStream>(<InMessage>())
for res in responses:
	print(res)

# Client Stream
requests = iter([<InMessage>(),<InMessage>()])
response = client.<ClientStream>(requests)
print(response)

# Bidi Stream
responses = client.<BidiStream>(requests)
for res in responses:
	print(res)
```


* * *
__This project and README file has been created thanks to [sylk.build](https://www.sylk.build)__