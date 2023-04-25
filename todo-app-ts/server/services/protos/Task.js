"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskClient = exports.TaskService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const Todo_1 = require("./Todo");
exports.TaskService = {
    /** [sylk] - None */
    getTask: {
        path: "/Task/GetTask",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(Todo_1.TaskId.encode(value).finish()),
        requestDeserialize: (value) => Todo_1.TaskId.decode(value),
        responseSerialize: (value) => Buffer.from(Todo_1.Task.encode(value).finish()),
        responseDeserialize: (value) => Todo_1.Task.decode(value),
    },
};
exports.TaskClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TaskService, "Task");
//# sourceMappingURL=Task.js.map