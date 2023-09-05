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
import * as world from '../../../protos/sylklabs/hello/world/v1/world';
import { HelloWorldServiceService } from '../../../protos/sylklabs/hello/world/v1/world';

class HelloWorldService implements world.HelloWorldServiceServer, ApiType<UntypedHandleCall> {
	[method: string]: any;
	
	clientStream: handleClientStreamingCall<world.Hello, world.Hello> = (
		call: ServerReadableStream<world.Hello, world.Hello>,
		cb: sendUnaryData<world.Hello>
	) => {
		call.on('data', (hello) => {
			console.log(hello)
		})
		
		cb(new ServiceError(status.ABORTED,'test undefined server error'))


		setTimeout(() => {
			cb(null, {
				text: 'test',
			},call.metadata)
		},5000)

	};
	
	streamHello: handleServerStreamingCall<world.Hello, world.Hello> = (
		call: ServerWritableStream<world.Hello, world.Hello>
	) => {
		console.log(call.metadata)
		const { text } = call.request;
		call.metadata.set('test-key','test-value');
		call.sendMetadata(call.metadata)
		console.log(text);
		const hellos = [
			world.Hello.create({
				text: 'hello-1'
			}),
			world.Hello.create({
				text: 'hello-2'
			}),
			world.Hello.create({
				text: 'hello-3'
			}),
			world.Hello.create({
				text: 'hello-4'
			})
		];
		
		hellos.map(h => call.write(h));
		// call.destroy(new ServiceError(status.ALREADY_EXISTS,'undefined error'))
		call.write(world.Hello.create({
			text: 'hello-5'
		}))
		call.end();
	};

	// @rpc @@sylk - DO NOT REMOVE
	public hello: handleUnaryCall<world.Hello, world.Hello> = (
		call: ServerUnaryCall<world.Hello, world.Hello>,
		callback: sendUnaryData<world.Hello>
	) => {

	}

	bidiStream: handleBidiStreamingCall<world.Hello, world.Hello> = (
		call: ServerDuplexStream<world.Hello,world.Hello>
	) => {
		let i = 0;
		call.on('data', (data) => {
			console.log(data)
			data.text = 'stream from server: '+i
			call.write(data)
			i++
		})

		setTimeout(() => {
			call.destroy(new ServiceError(status.ABORTED,'bidi-server error'));
		}, 5000);

	};


}

export {
	HelloWorldService,
	HelloWorldServiceService
};