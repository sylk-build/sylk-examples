"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sylk_js_1 = require("sylk-js");
// import { Hello, HelloWorldServiceClient, HelloWorldServiceServer } from './protos/sylklabs/hello/world/v1/world';
const HelloWorldService_1 = require("./services/HelloWorldService/v1/HelloWorldService");
const asynciterable_1 = require("ix/asynciterable");
const operators_1 = require("ix/asynciterable/operators");
const world_1 = require("./protos/sylklabs/hello/world/v1/world");
const helloWorldImpl = {
    async *streamHello(request, context) {
        yield* (0, asynciterable_1.from)([
            world_1.Hello.create({
                text: 'hello-1'
            }),
            world_1.Hello.create({
                text: 'hello-2'
            }),
            world_1.Hello.create({
                text: 'hello-3'
            }),
            world_1.Hello.create({
                text: 'hello-4'
            })
        ]).pipe((0, operators_1.withAbort)(context.signal));
    },
    async *bidiStream(request, context) {
        let i = 0;
        for await (const hello of request) {
            // await delay(context.signal, 1000);
            console.log(hello);
            let res = { ...hello };
            res.text = 'server stream: ' + i;
            i++;
            yield res;
        }
    }
};
const server = new sylk_js_1.ServerBuilder({
    appMetadata: {
        name: 'sylk-native-grpc',
        environment: 'dev',
        version: '0.0.1'
    },
    sylkOpts: {
        "sylk.enable_admin_logz": 1,
        "sylk.enable_health_service": 1
    }
});
server.add(HelloWorldService_1.HelloWorldServiceService, 
// <any>helloWorldImpl
new HelloWorldService_1.HelloWorldService());
server.listen('0.0.0.0:48880').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=index.js.map