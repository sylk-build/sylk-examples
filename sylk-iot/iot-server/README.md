# iot-server

This project has been generated thanks to [```sylk.build```](https://www.sylk.build) !

This project is using gRPC as main code generator and utilize HTTP2 + protobuf protocols for communication.

# Index
Usage:
- [Python](#python)
- [Typescript](#typescript)
- [Go](#go)
- [Webpack](#webpack)

Resources:
- [IotService](#iotservice)
- [iot](#iot)

# Services

## IotService

__`Subscribe`__ [Server stream]
- Input: [sylklabs.iot.v1.Topic](#topic)
- Output: [sylklabs.iot.v1.SensorData](#sensordata)

__`Publish`__ [Unary]
- Input: [sylklabs.iot.v1.PublishRequest](#publishrequest)
- Output: [google.protobuf.Empty](#empty)

# Packages

## `sylklabs.iot.v1`


<details id="#PublishRequest">
<summary><b>PublishRequest</b></summary>

### __PublishRequest__
: 
* __topic__ [TYPE_STRING]


* __data__ [[SensorData](#SensorData)]

</details>


<details id="#Topic">
<summary><b>Topic</b></summary>

### __Topic__
: The Topic message represents the topic to which the IoT server and Grafana plugin will subscribe and publish. It will have a single field called name, which is a string representing the name of the topic.

* __name__ [TYPE_STRING]

</details>


<details id="#SensorData">
<summary><b>SensorData</b></summary>

### __SensorData__
: 
* __sensor_id__ [TYPE_STRING]


* __value__ [TYPE_DOUBLE]


* __timestamp__ [[Timestamp](#Timestamp)]

</details>


# Usage

This project supports clients communication in the following languages:

### Python

```py
from clients.python import iotserver

client = iotserver()

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

### Typescript

```ts
import { iotserver } from './clients/typescript/';

let client = new iotserver();

// Unary call
client.<Unary>(<InMessage>)
	.then((res:<OutMessage>) => {
		console.log(res);
	}).catch((err: any) => console.log(err));

// Server Stream
client.<ServerStream>(<InMessage>)
	.subscribe((res: <OutMessage>) => {
		console.log(res);
	})

// Client Stream

// Bidi Stream
responses = client.<BidiStream>()
	.subscribe((res: <OutMessage>) => {
		console.log(res)
	})

responses.write(<InMessage>)
```

### Go

```go
package main
import (
	"fmt"

	client "github.com/sylk-build/sylk-examples/sylk-iot/clients/go/<path-to-service>"
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