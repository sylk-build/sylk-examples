# pubsub-go

This project has been generated thanks to [```sylk.build```](https://www.sylk.build) !

This project is using gRPC as main code generator and utilize HTTP2 + protobuf protocols for communication.

# Index
Usage:
- [Python](#python)

Resources:
- [Pubsub](#pubsub)
- [API](#api)

# Services

## Pubsub

__`Publish`__ [Unary]
- Input: [public.API.v1.Event](#event)
- Output: [google.protobuf.Empty](#empty)

__`Subscribe`__ [Server stream]
- Input: [public.API.v1.Channel](#channel)
- Output: [public.API.v1.Event](#event)

# Packages

## `public.API.v1`


<details id="#Channel">
<summary><b>Channel</b></summary>

### __Channel__
: 
* __Name__ [TYPE_STRING]

</details>


<details id="#Event">
<summary><b>Event</b></summary>

### __Event__
: 
* __Channel__ [[Channel](#Channel)]


* __Data__ [[Struct](#Struct)]

</details>


# Usage

This project supports clients communication in the following languages:

### Python

```py
from clients.python import pubsubgo

client = pubsubgo()

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