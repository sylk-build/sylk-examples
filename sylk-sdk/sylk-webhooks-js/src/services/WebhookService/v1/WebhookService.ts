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
import * as webhooks from '../../protos/sylklabs/webhooks/v1/webhooks';
import * as empty from '../../protos/google/protobuf/empty';
import { WebhookServiceService } from '../../protos/sylklabs/webhooks/v1/webhooks';

class WebhookService implements webhooks.WebhookServiceServer, ApiType<UntypedHandleCall> {
	[method: string]: any;

	// @rpc @@sylk - DO NOT REMOVE
	public webhook: handleUnaryCall<webhooks.Payload, empty.Empty> = (
		call: ServerUnaryCall<webhooks.Payload, empty.Empty>,
		callback: sendUnaryData<empty.Empty>
	) => {

	}


}

export {
	WebhookService,
	WebhookServiceService
};