import {
    GRPCServerBuilder
} from 'sylk-js';
import { Empty } from './services/protos/google/protobuf/empty';

import {
    WebhookServiceService
} from './services/protos/sylklabs/webhooks/v1/webhooks'

const server = new GRPCServerBuilder(undefined,{
    "sylk.enable_webhooks_server": 1 // Must pass the webhook flag: 1, to enable the HTTP/1 server setup
});

// Add custom gRPC service which wil handle the webhooks logic
server.add(WebhookServiceService, {
    async webhook(call, ctx) {
        console.log('Recieved webhook:',call)
        return Empty.create();
    }
})

// Registering webhooks MUST be placed after all relevant gRPC services are added to the Server builder
// The default handler for the webhook is the respective gRPC service if exist on the server
server.registerWebhook({
    // eventType is a string represnting the gRPC endpoint e.g: <service>.<method>
    eventType: 'WebhookService.webhook',
    url: '/webhooks/post-webhook',
    transformationFn: (payload) => ({data: payload})
})

// Handling webhook with custom logic without propagating the gRPC server side logic
server.registerWebhook({
    eventType: 'WebhookService.webhook',
    url: '/webhooks/log-webhook',
}, (payload) => {
    console.log('Webhook custom handler:',payload)
})

server.listen('0.0.0.0:48881').then(port => {
    // log app information after server start
    console.log(server.info().webhooks.port)
}).catch(err => {
    console.log(err)
})