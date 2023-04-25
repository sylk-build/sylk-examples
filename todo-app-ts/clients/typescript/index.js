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
exports.TaskClient = exports.Todo = exports.todoappts = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const util_1 = require("util");
const Task_1 = require("./protos/Task");
Object.defineProperty(exports, "TaskClient", { enumerable: true, get: function () { return Task_1.TaskClient; } });
const Todo = __importStar(require("./protos/Todo"));
exports.Todo = Todo;
const interceptorsProviders = [];
const _DEFAULT_OPTION = {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
    "interceptors": interceptorsProviders,
};
class todoappts {
    constructor(host = "localhost", port = 44880, metadata = new grpc_js_1.Metadata()) {
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.Task_client = new Task_1.TaskClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
    }
    GetTask(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Task_client.getTask.bind(this.Task_client))(Todo.TaskId.fromJSON(request), metadata);
        }
        else {
            return this.Task_client.getTask(Todo.TaskId.fromJSON(request), metadata, callback);
        }
    }
}
exports.todoappts = todoappts;
//# sourceMappingURL=index.js.map