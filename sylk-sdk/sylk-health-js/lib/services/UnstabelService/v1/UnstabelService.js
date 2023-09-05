"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnstabelServiceService = exports.UnstabelService = void 0;
const unstable_1 = require("../../protos/sylklabs/unstable/v1/unstable");
Object.defineProperty(exports, "UnstabelServiceService", { enumerable: true, get: function () { return unstable_1.UnstabelServiceService; } });
class UnstabelService {
    constructor() {
        // @rpc @@sylk - DO NOT REMOVE
        this.shaky = (call, callback) => {
            console.log(call);
            console.log('recieved call');
            callback(null, {}, call.metadata);
        };
        console.log('started native gRPC service...');
    }
}
exports.UnstabelService = UnstabelService;
//# sourceMappingURL=UnstabelService.js.map