"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sylk_js_1 = require("sylk-js");
const world_1 = require("./services/protos/sylklabs/hello/world/v1/world");
const server = new sylk_js_1.GRPCServerBuilder();
server
    .add(world_1.HelloWorldServiceService, {
    async getHello(call, context) {
        console.log(JSON.stringify(context.metadata.getAll('sylk-version')));
        return world_1.Hello.fromPartial({
            text: call.text
        });
    }
});
server
    .listen('0.0.0.0:44888')
    .then(res => {
    console.log(server.info());
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=index.js.map