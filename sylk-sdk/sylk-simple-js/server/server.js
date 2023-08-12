"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sylk.build Generated Server Code
const grpc_js_1 = require("@grpc/grpc-js");
const HelloWorldService_1 = require("./services/HelloWorldService/v1/HelloWorldService");
let _PORT = 44880;
let _HOST = '0.0.0.0';
let _ADDR = `${_HOST}:${_PORT}`;
const server = new grpc_js_1.Server({
    "grpc.max_receive_message_length": -1,
    "grpc.max_send_message_length": -1,
});
async function startServer() {
    const promises = [];
    const results = await Promise.all(promises);
    console.log(results);
    const HelloWorldServicev1Impl = new HelloWorldService_1.HelloWorldService();
    server.addService(HelloWorldService_1.HelloWorldServiceService, HelloWorldServicev1Impl);
    server.bindAsync(_ADDR, grpc_js_1.ServerCredentials.createInsecure(), (err, bindPort) => {
        if (err) {
            throw err;
        }
        console.log(`[sylk.build] Starting gRPC:server:${bindPort}`, `at -> ${new Date().toLocaleString()})`);
        server.start();
    });
}
startServer().then(res => console.log("Service Start Up...")).catch(err => console.log(err));
//# sourceMappingURL=server.js.map