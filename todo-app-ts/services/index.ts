import { credentials, Metadata, ServiceError as _service_error, ClientUnaryCall, ClientDuplexStream, ClientReadableStream, ClientWritableStream, InterceptingCall, Interceptor } from '@grpc/grpc-js';
import { promisify } from 'util';
import { Observable } from 'rxjs';
import { TaskClient } from './protos/Task'
import * as Todo from './protos/Todo'


const interceptorsProviders: Interceptor[] = []
const _DEFAULT_OPTION = {
	"grpc.keepalive_time_ms": 120000,
	"grpc.http2.min_time_between_pings_ms": 120000,
	"grpc.keepalive_timeout_ms": 20000,
	"grpc.http2.max_pings_without_data": 0,
	"grpc.keepalive_permit_without_calls": 1,
	"interceptors": interceptorsProviders,
}

export class todoappts {

	constructor(host: string = "localhost", port: number = 44880, metadata: Metadata = new Metadata()) {
		this.host = host;
		this.port = port;
		this.metadata = metadata;
		this.Task_client = new TaskClient(`${this.host}:${this.port}`, credentials.createInsecure(),_DEFAULT_OPTION);
	}

	private readonly metadata: Metadata;
	private readonly host: string;
	private readonly port: number;
	private readonly Task_client: TaskClient;

	
	/**
	* @method Task.GetTask
	* @description None
	* @kind Unary
	* @param request Todo.TaskId
	* @param metadata Metadata
	* @returns Promise<Todo.Task>
	*/
	public GetTask(request: Todo.TaskId, metadata?: Metadata): Promise<Todo.Task>;
	/**
	* @method Task.GetTask
	* @description None
	* @kind Unary
	* @param request Todo.TaskId
	* @param metadata Metadata
	* @param callback A callback function to be excuted once the server responds with Todo.Task
	* @returns ClientUnaryCall
	*/
	public GetTask(request: Todo.TaskId, metadata: Metadata, callback: (error: _service_error | null, response: Todo.Task) => void): ClientUnaryCall;
	public GetTask(request: Todo.TaskId, metadata: Metadata = this.metadata, callback?: (error: _service_error | null, response: Todo.Task) => void): ClientUnaryCall | Promise<Todo.Task> {
		if (callback === undefined) {
			return promisify<Todo.TaskId, Metadata, Todo.Task>(this.Task_client.getTask.bind(this.Task_client))(Todo.TaskId.fromJSON(request), metadata);
		} else {
		 return this.Task_client.getTask(Todo.TaskId.fromJSON(request), metadata, callback);
		}
	}
}
export {
	Todo,
	TaskClient
}