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
import * as struct from '../../protos/google/protobuf/struct';
import * as empty from '../../protos/google/protobuf/empty';
import { UnstabelServiceService, UnstabelServiceServer } from '../../protos/sylklabs/unstable/v1/unstable';

class UnstabelService implements UnstabelServiceServer, ApiType<UntypedHandleCall> {
	[method: string]: any;

	constructor() {
		console.log('started native gRPC service...')
		
	}

	// @rpc @@sylk - DO NOT REMOVE
	public shaky: handleUnaryCall<any, empty.Empty> = (
		call: ServerUnaryCall<any, empty.Empty>,
		callback: sendUnaryData<empty.Empty>
	) => {
		console.log(call)

		console.log('recieved call');

		callback(null, {}, call.metadata)
	}


}

export {
	UnstabelService,
	UnstabelServiceService
};