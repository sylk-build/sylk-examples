import { 
	handleUnaryCall
	,ClientUnaryCall
	,ClientReadableStream,
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
	credentials,
	ChannelCredentials,
	ServiceError as _service_error
 } from '@grpc/grpc-js';
import { promisify } from 'util';
import { Observable } from 'rxjs';
import * as worldv1 from './protos/sylklabs/hello/world/v1/world';
import { HelloWorldServiceService, HelloWorldServiceClient as HelloWorldServicev1Client  } from './protos/sylklabs/hello/world/v1/world';


const interceptorsProviders: Interceptor[] = []
const _DEFAULT_OPTION = {
	"grpc.keepalive_time_ms": 120000,
	"grpc.http2.min_time_between_pings_ms": 120000,
	"grpc.keepalive_timeout_ms": 20000,
	"grpc.http2.max_pings_without_data": 0,
	"grpc.keepalive_permit_without_calls": 1,
	"interceptors": interceptorsProviders,
}

/**
 * Generated thanks to [sylk.build](https://www.sylk.build)
 */
export interface SylkClientOpts {
	host: string;
	port: number;
	metadata: Metadata;
	channelCreds: ChannelCredentials
}
const DEFAULT_CLIENT_OPTS: SylkClientOpts = {
	host: "localhost",
	port: 44880,
	metadata: new Metadata(),
	channelCreds: credentials.createInsecure()
}


export class HelloWorldServiceV1 {
	constructor(opts: SylkClientOpts) {
		const { host, metadata, port, channelCreds } = {...DEFAULT_CLIENT_OPTS, ...opts}
		this.host = host;
		this.port = port;
		this.metadata = metadata;
		this.metadata.add('sylk-version','0.3.5');
		this.HelloWorldServicev1Client = new HelloWorldServicev1Client(`${this.host}:${this.port}`, <ChannelCredentials>channelCreds,_DEFAULT_OPTION);
	}

	private readonly metadata: Metadata;
	private readonly host: string;
	private readonly port: number;
	private readonly HelloWorldServicev1Client: HelloWorldServicev1Client;

	/**
	* @method HelloWorldService.GetHello
	* @description None
	* @kind Unary
	* @param request worldv1.Hello
	* @param metadata Metadata
	* @returns Promise<worldv1.Hello>
	*/
	public GetHello(request: worldv1.Hello, metadata?: Metadata): Promise<worldv1.Hello>;
	/**
	* @method HelloWorldService.GetHello
	* @description None
	* @kind Unary
	* @param request worldv1.Hello
	* @param metadata Metadata
	* @param callback A callback function to be excuted once the server responds with worldv1.Hello
	* @returns ClientUnaryCall
	*/
	public GetHello(request: worldv1.Hello, metadata: Metadata, callback: (error: _service_error | null, response: worldv1.Hello) => void): ClientUnaryCall;
	public GetHello(request: worldv1.Hello, metadata: Metadata = this.metadata, callback?: (error: _service_error | null, response: worldv1.Hello) => void): ClientUnaryCall | Promise<worldv1.Hello> {
		if (callback === undefined) {
			return promisify<worldv1.Hello, Metadata, worldv1.Hello>(this.HelloWorldServicev1Client.getHello.bind(this.HelloWorldServicev1Client))(worldv1.Hello.fromJSON(request), metadata);
		} else {
		 return this.HelloWorldServicev1Client.getHello(worldv1.Hello.fromJSON(request), metadata, callback);
		}
	}
}