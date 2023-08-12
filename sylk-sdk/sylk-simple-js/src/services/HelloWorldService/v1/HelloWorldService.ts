import { 
	handleUnaryCall,
	handleClientStreamingCall,
	handleServerStreamingCall,
	handleBidiStreamingCall,
	sendUnaryData,
	ServerDuplexStream,
	ServerReadableStream,
	ServerUnaryCall,
	ServerWritableStream,
	status,
	UntypedHandleCall,
	Metadata,
	Interceptor,
	credentials
 } from '@grpc/grpc-js';
import { ServiceError } from '../../utils/error';
import { ApiType } from '../../utils/interfaces';
import * as world from '../../protos/sylklabs/hello/world/v1/world';
import { HelloWorldServiceService } from '../../protos/sylklabs/hello/world/v1/world';

class HelloWorldService implements world.HelloWorldServiceServer, ApiType<UntypedHandleCall> {
	[method: string]: any;

	// @rpc @@sylk - DO NOT REMOVE
	public getHello: handleUnaryCall<world.Hello, world.Hello> = (
		call: ServerUnaryCall<world.Hello, world.Hello>,
		callback: sendUnaryData<world.Hello>
	) => {

	}


}

export {
	HelloWorldService,
	HelloWorldServiceService
};