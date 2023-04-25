import { Metadata, ServiceError as _service_error, ClientUnaryCall } from '@grpc/grpc-js';
import { TaskClient } from './protos/Task';
import * as Todo from './protos/Todo';
export declare class todoappts {
    constructor(host?: string, port?: number, metadata?: Metadata);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Task_client;
    /**
    * @method Task.GetTask
    * @description None
    * @kind Unary
    * @param request Todo.TaskId
    * @param metadata Metadata
    * @returns Promise<Todo.Task>
    */
    GetTask(request: Todo.TaskId, metadata?: Metadata): Promise<Todo.Task>;
    /**
    * @method Task.GetTask
    * @description None
    * @kind Unary
    * @param request Todo.TaskId
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Todo.Task
    * @returns ClientUnaryCall
    */
    GetTask(request: Todo.TaskId, metadata: Metadata, callback: (error: _service_error | null, response: Todo.Task) => void): ClientUnaryCall;
}
export { Todo, TaskClient };
