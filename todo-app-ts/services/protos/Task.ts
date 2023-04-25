/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Task, TaskId } from "./Todo";

/** sylk.build Generated proto DO NOT EDIT */

export type TaskService = typeof TaskService;
export const TaskService = {
  /** [sylk] - None */
  getTask: {
    path: "/Task/GetTask",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TaskId) => Buffer.from(TaskId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TaskId.decode(value),
    responseSerialize: (value: Task) => Buffer.from(Task.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Task.decode(value),
  },
} as const;

export interface TaskServer extends UntypedServiceImplementation {
  /** [sylk] - None */
  getTask: handleUnaryCall<TaskId, Task>;
}

export interface TaskClient extends Client {
  /** [sylk] - None */
  getTask(request: TaskId, callback: (error: ServiceError | null, response: Task) => void): ClientUnaryCall;
  getTask(
    request: TaskId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Task) => void,
  ): ClientUnaryCall;
  getTask(
    request: TaskId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Task) => void,
  ): ClientUnaryCall;
}

export const TaskClient = makeGenericClientConstructor(TaskService, "Task") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TaskClient;
  service: typeof TaskService;
};
