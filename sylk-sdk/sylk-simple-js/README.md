# sylk-simple-js

This project has been generated thanks to [```sylk.build```](https://www.sylk.build) !

This project is using gRPC as main code generator and utilize HTTP2 + protobuf protocols for communication.

# Index
Usage:
- [Typescript](#typescript)

Resources:
- [HelloWorldService](#helloworldservice)
- [hello](#hello)

# Services

## HelloWorldService

__`GetHello`__ [Unary]
- Input: [sylklabs.hello.world.v1.Hello](#hello)
- Output: [sylklabs.hello.world.v1.Hello](#hello)

# Packages

## `sylklabs.hello.world.v1`


<details id="#Hello">
<summary><b>Hello</b></summary>

### __Hello__
: 
* __text__ [TYPE_STRING]

</details>


# Usage

This project supports clients communication in the following languages:

### Typescript

```ts
import { sylksimplejs } from './clients/typescript/';

let client = new sylksimplejs();

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


* * *
__This project and README file has been created thanks to [sylk.build](https://www.sylk.build)__