# sylk-health-js

This project has been generated thanks to [```sylk.build```](https://www.sylk.build) !

This project is using gRPC as main code generator and utilize HTTP2 + protobuf protocols for communication.

# Index
Usage:
- [Typescript](#typescript)

Resources:
- [UnstabelService](#unstabelservice)
- [unstable](#unstable)

# Services

## UnstabelService

__`Shaky`__ [Unary]
- Input: [google.protobuf.Struct](#struct)
- Output: [google.protobuf.Empty](#empty)

# Packages

## `sylklabs.unstable.v1`




# Usage

This project supports clients communication in the following languages:

### Typescript

```ts
import { sylkhealthjs } from './clients/typescript/';

let client = new sylkhealthjs();

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