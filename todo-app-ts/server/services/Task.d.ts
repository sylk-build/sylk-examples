import { handleUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { ApiType } from './utils/interfaces';
import { TaskServer, TaskService } from './protos/Task';
import * as Todo from './protos/Todo';
declare class Task implements TaskServer, ApiType<UntypedHandleCall> {
    [method: string]: any;
    tasks: Todo.Task[];
    getTask: handleUnaryCall<Todo.TaskId, Todo.Task>;
}
export { Task, TaskService };
