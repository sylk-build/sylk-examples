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
exports.TaskService = exports.Task = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const error_1 = require("./utils/error");
const Task_1 = require("./protos/Task");
Object.defineProperty(exports, "TaskService", { enumerable: true, get: function () { return Task_1.TaskService; } });
const Todo = __importStar(require("./protos/Todo"));
class Task {
    constructor() {
        this.tasks = [
            Todo.Task.fromPartial({
                id: "1",
                title: "Build awesome services",
                description: "Build manage and deploy micro-services with powerful easy to use sylk.build CLI and cloud platform",
                done: true
            })
        ];
        // @rpc @@sylk - DO NOT REMOVE
        this.getTask = (call, callback) => {
            const { id } = call.request;
            console.log(`[GetTask] Got request for task data: ${id}`);
            let task = this.tasks.find(t => t.id === id);
            if (task) {
                callback(null, task, call.metadata);
            }
            else {
                callback(new error_1.ServiceError(grpc_js_1.status.NOT_FOUND, `Task "${id}" is not found.`, undefined, call.metadata), undefined, call.metadata);
            }
            ;
        };
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map