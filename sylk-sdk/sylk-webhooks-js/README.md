# sylk-webhooks-js

This project has been generated thanks to [```sylk.build```](https://www.sylk.build) !

This project is using gRPC as main code generator and utilize HTTP2 + protobuf protocols for communication.

# Index

## Usage:
- [Typescript](#typescript)

Post a HTTP/1 Webhook by "POST" request, this will pass the data to your gRPC service that is mapped to this webhook.
```sh
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"key":"value", "anotherKey":"anotherValue"}' \
     http://localhost:48883/webhooks/post-webhook
```

Post a HTTP/1 Webhook by "POST" request, this will only log out with the handler and will not proprogate to any service.
```sh
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"key":"value", "anotherKey":"anotherValue"}' \
     http://localhost:48883/webhooks/log-webhook
```

Resources:
- [WebhookService](#webhookservice)
- [webhooks](#webhooks)

# Services

## WebhookService

__`Webhook`__ [Unary]
- Input: [sylklabs.webhooks.v1.Payload](#payload)
- Output: [google.protobuf.Empty](#empty)

# Packages

## `sylklabs.webhooks.v1`


<details id="#Payload">
<summary><b>Payload</b></summary>

### __Payload__
: 
* __data__ [[Struct](#Struct)]

</details>


# Usage

This project supports clients communication in the following languages:

### Typescript

```ts
import { sylkwebhooksjs } from './clients/typescript/';

let client = new sylkwebhooksjs();

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