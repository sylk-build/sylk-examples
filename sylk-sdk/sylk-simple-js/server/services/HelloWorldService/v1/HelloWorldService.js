"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldServiceService = exports.HelloWorldService = void 0;
const world_1 = require("../../protos/sylklabs/hello/world/v1/world");
Object.defineProperty(exports, "HelloWorldServiceService", { enumerable: true, get: function () { return world_1.HelloWorldServiceService; } });
class HelloWorldService {
    constructor() {
        // @rpc @@sylk - DO NOT REMOVE
        this.getHello = (call, callback) => {
        };
    }
}
exports.HelloWorldService = HelloWorldService;
//# sourceMappingURL=HelloWorldService.js.map