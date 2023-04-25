import { 
	handleUnaryCall,
	sendUnaryData,
	ServerUnaryCall,
	status,
	UntypedHandleCall,
	Metadata
 } from '@grpc/grpc-js';
import { ServiceError } from './utils/error';
import { ApiType } from './utils/interfaces';
import { TaskServer, TaskService } from './protos/Task';
import * as Todo from './protos/Todo';

class Task implements TaskServer, ApiType<UntypedHandleCall> {
	[method: string]: any;

	tasks: Todo.Task[] = [
		Todo.Task.fromPartial({
			id:"1",
			title:"Build awesome services",
			description:"Build manage and deploy micro-services with powerful easy to use sylk.build CLI and cloud platform",
			done:true
		})
	];

	// @rpc @@sylk - DO NOT REMOVE
	public getTask: handleUnaryCall<Todo.TaskId, Todo.Task> = (
		call: ServerUnaryCall<Todo.TaskId, Todo.Task>,
		callback: sendUnaryData<Todo.Task>
	) => {
		const {id } = call.request;
		console.log(`[GetTask] Got request for task data: ${id}`);

		let task = this.tasks.find(t => t.id === id);
		if(task) {
			callback(null, task, call.metadata);
		} else {
			callback(
				new ServiceError(
					status.NOT_FOUND,
					`Task "${id}" is not found.`,
					undefined,
					call.metadata
				),
				undefined,
				call.metadata
			);
		};
	}

}

export {
	Task,
	TaskService
};