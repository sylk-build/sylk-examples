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
import * as webhooksv1 from './protos/sylklabs/webhooks/v1/webhooks';
import { WebhookServiceService, WebhookServiceClient as WebhookServicev1Client  } from './protos/sylklabs/webhooks/v1/webhooks';
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


export class WebhookServiceV1 {
	constructor(opts: SylkClientOpts) {
		const { host, metadata, port, channelCreds } = {...DEFAULT_CLIENT_OPTS, ...opts}
		this.host = host;
		this.port = port;
		this.metadata = metadata;
		this.metadata.add('sylk-version','0.3.5');
		this.WebhookServicev1Client = new WebhookServicev1Client(`${this.host}:${this.port}`, <ChannelCredentials>channelCreds,_DEFAULT_OPTION);
	}

	private readonly metadata: Metadata;
	private readonly host: string;
	private readonly port: number;
	private readonly WebhookServicev1Client: WebhookServicev1Client;

	/**
	* @method WebhookService.Webhook
	* @description None
	* @kind Unary
	* @param request webhooksv1.Payload
	* @param metadata Metadata
	* @returns Promise<empty.Empty>
	*/
	public Webhook(request: webhooksv1.Payload, metadata?: Metadata): Promise<empty.Empty>;
	/**
	* @method WebhookService.Webhook
	* @description None
	* @kind Unary
	* @param request webhooksv1.Payload
	* @param metadata Metadata
	* @param callback A callback function to be excuted once the server responds with empty.Empty
	* @returns ClientUnaryCall
	*/
	public Webhook(request: webhooksv1.Payload, metadata: Metadata, callback: (error: _service_error | null, response: empty.Empty) => void): ClientUnaryCall;
	public Webhook(request: webhooksv1.Payload, metadata: Metadata = this.metadata, callback?: (error: _service_error | null, response: empty.Empty) => void): ClientUnaryCall | Promise<empty.Empty> {
		if (callback === undefined) {
			return promisify<webhooksv1.Payload, Metadata, empty.Empty>(this.WebhookServicev1Client.webhook.bind(this.WebhookServicev1Client))(webhooksv1.Payload.fromJSON(request), metadata);
		} else {
		 return this.WebhookServicev1Client.webhook(webhooksv1.Payload.fromJSON(request), metadata, callback);
		}
	}
}