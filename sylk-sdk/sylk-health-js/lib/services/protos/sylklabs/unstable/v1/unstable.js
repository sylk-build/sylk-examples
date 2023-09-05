"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnstabelServiceClient = exports.UnstabelServiceService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const empty_1 = require("../../../google/protobuf/empty");
const struct_1 = require("../../../google/protobuf/struct");
exports.UnstabelServiceService = {
    /** [unstable.v1.UnstabelService.Shaky] - */
    shaky: {
        path: "/sylklabs.unstable.v1.UnstabelService/Shaky",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(struct_1.Struct.encode(struct_1.Struct.wrap(value)).finish()),
        requestDeserialize: (value) => struct_1.Struct.unwrap(struct_1.Struct.decode(value)),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
};
exports.UnstabelServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UnstabelServiceService, "sylklabs.unstable.v1.UnstabelService");
//# sourceMappingURL=unstable.js.map