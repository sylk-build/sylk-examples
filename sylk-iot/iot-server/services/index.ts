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
import * as iotv1 from './protos/sylklabs/iot/v1/iot';
import { IotServiceService, IotServiceClient as IotServicev1Client  } from './protos/sylklabs/iot/v1/iot';
import * as empty from './protos/google/protobuf/empty';


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


export class IotServiceV1 {
	constructor(opts: SylkClientOpts) {
		const { host, metadata, port, channelCreds } = {...DEFAULT_CLIENT_OPTS, ...opts}
		this.host = host;
		this.port = port;
		this.metadata = metadata;
		this.metadata.add('sylk-version','0.3.4');
		this.IotServicev1Client = new IotServicev1Client(`${this.host}:${this.port}`, <ChannelCredentials>channelCreds,_DEFAULT_OPTION);
	}

	private readonly metadata: Metadata;
	private readonly host: string;
	private readonly port: number;
	private readonly IotServicev1Client: IotServicev1Client;

	/**
	* @method IotService.Subscribe
	* @description None
	* @kind Server Stream
	* @param request iotv1.Topic
	* @param metadata Metadata
	* @returns Observable<iotv1.SensorData>
	*/
	public Subscribe(request: iotv1.Topic, metadata?: Metadata): Observable<iotv1.SensorData>;
	/**
	* @method IotService.Subscribe
	* @description None
	* @kind Server Stream
	* @param request iotv1.Topic
	* @param metadata Metadata
	* @param callback A callback function to be excuted once the server responds with iotv1.SensorData
	* @returns ClientReadableStream<iotv1.SensorData>
	*/
	public Subscribe(request: iotv1.Topic, metadata: Metadata, callback: (error: _service_error | null, response: iotv1.SensorData) => void): ClientReadableStream<iotv1.SensorData>;
	public Subscribe(request: iotv1.Topic, metadata: Metadata = this.metadata, callback?: (error: _service_error | null, response: iotv1.SensorData) => void): ClientReadableStream<iotv1.SensorData> | Observable<iotv1.SensorData> {
		return new Observable(subscriber => {
		const stream = this.IotServicev1Client.subscribe(iotv1.Topic.fromJSON(request), metadata);
			stream.on('data', (res: iotv1.SensorData) => {
				subscriber.next(res)
			}).on('end', () => {
				subscriber.complete()
			}).on('error', (err: any) => {
				subscriber.error(err)
				subscriber.complete()
			});
		})
	}

	
	/**
	* @method IotService.Publish
	* @description None
	* @kind Unary
	* @param request iotv1.PublishRequest
	* @param metadata Metadata
	* @returns Promise<empty.Empty>
	*/
	public Publish(request: iotv1.PublishRequest, metadata?: Metadata): Promise<empty.Empty>;
	/**
	* @method IotService.Publish
	* @description None
	* @kind Unary
	* @param request iotv1.PublishRequest
	* @param metadata Metadata
	* @param callback A callback function to be excuted once the server responds with empty.Empty
	* @returns ClientUnaryCall
	*/
	public Publish(request: iotv1.PublishRequest, metadata: Metadata, callback: (error: _service_error | null, response: empty.Empty) => void): ClientUnaryCall;
	public Publish(request: iotv1.PublishRequest, metadata: Metadata = this.metadata, callback?: (error: _service_error | null, response: empty.Empty) => void): ClientUnaryCall | Promise<empty.Empty> {
		if (callback === undefined) {
			return promisify<iotv1.PublishRequest, Metadata, empty.Empty>(this.IotServicev1Client.publish.bind(this.IotServicev1Client))(iotv1.PublishRequest.fromJSON(request), metadata);
		} else {
		 return this.IotServicev1Client.publish(iotv1.PublishRequest.fromJSON(request), metadata, callback);
		}
	}
}