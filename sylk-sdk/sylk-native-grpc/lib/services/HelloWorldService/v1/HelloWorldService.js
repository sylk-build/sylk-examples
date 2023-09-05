"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldServiceService = exports.HelloWorldService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const error_1 = require("../../utils/error");
const world = __importStar(require("../../../protos/sylklabs/hello/world/v1/world"));
const world_1 = require("../../../protos/sylklabs/hello/world/v1/world");
Object.defineProperty(exports, "HelloWorldServiceService", { enumerable: true, get: function () { return world_1.HelloWorldServiceService; } });
class HelloWorldService {
    constructor() {
        this.clientStream = (call, cb) => {
            call.on('data', (hello) => {
                console.log(hello);
            });
            cb(new error_1.ServiceError(grpc_js_1.status.ABORTED, 'test undefined server error'));
            setTimeout(() => {
                cb(null, {
                    text: 'test',
                }, call.metadata);
            }, 5000);
        };
        this.streamHello = (call) => {
            console.log(call.metadata);
            const { text } = call.request;
            call.metadata.set('test-key', 'test-value');
            call.sendMetadata(call.metadata);
            console.log(text);
            const hellos = [
                world.Hello.create({
                    text: 'hello-1'
                }),
                world.Hello.create({
                    text: 'hello-2'
                }),
                world.Hello.create({
                    text: 'hello-3'
                }),
                world.Hello.create({
                    text: 'hello-4'
                })
            ];
            hellos.map(h => call.write(h));
            // call.destroy(new ServiceError(status.ALREADY_EXISTS,'undefined error'))
            call.write(world.Hello.create({
                text: 'hello-5'
            }));
            call.end();
        };
        // @rpc @@sylk - DO NOT REMOVE
        this.hello = (call, callback) => {
        };
        this.bidiStream = (call) => {
            let i = 0;
            call.on('data', (data) => {
                console.log(data);
                data.text = 'stream from server: ' + i;
                call.write(data);
                i++;
            });
            setTimeout(() => {
                call.destroy(new error_1.ServiceError(grpc_js_1.status.ABORTED, 'bidi-server error'));
            }, 5000);
        };
    }
}
exports.HelloWorldService = HelloWorldService;
//# sourceMappingURL=HelloWorldService.js.map