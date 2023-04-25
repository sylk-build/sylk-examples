/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { Task, TaskId } from "./Todo";
/** sylk.build Generated proto DO NOT EDIT */
export type TaskService = typeof TaskService;
export declare const TaskService: {
    /** [sylk] - None */
    readonly getTask: {
        readonly path: "/Task/GetTask";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TaskId) => Buffer;
        readonly requestDeserialize: (value: Buffer) => TaskId;
        readonly responseSerialize: (value: Task) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Task;
    };
};
export interface TaskServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getTask: handleUnaryCall<TaskId, Task>;
}
export interface TaskClient extends Client {
    /** [sylk] - None */
    getTask(request: TaskId, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    getTask(request: TaskId, metadata: Metadata, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
    getTask(request: TaskId, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
}
export declare const TaskClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TaskClient;
    service: typeof TaskService;
};
