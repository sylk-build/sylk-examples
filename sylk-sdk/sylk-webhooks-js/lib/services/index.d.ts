import { ClientUnaryCall, Metadata, ChannelCredentials, ServiceError as _service_error } from '@grpc/grpc-js';
import * as webhooksv1 from './protos/sylklabs/webhooks/v1/webhooks';
import * as empty from './protos/google/protobuf/empty';
/**
 * Generated thanks to [sylk.build](https://www.sylk.build)
 */
export interface SylkClientOpts {
    host: string;
    port: number;
    metadata: Metadata;
    channelCreds: ChannelCredentials;
}
export declare class WebhookServiceV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly WebhookServicev1Client;
    /**
    * @method WebhookService.Webhook
    * @description None
    * @kind Unary
    * @param request webhooksv1.Payload
    * @param metadata Metadata
    * @returns Promise<empty.Empty>
    */
    Webhook(request: webhooksv1.Payload, metadata?: Metadata): Promise<empty.Empty>;
    /**
    * @method WebhookService.Webhook
    * @description None
    * @kind Unary
    * @param request webhooksv1.Payload
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with empty.Empty
    * @returns ClientUnaryCall
    */
    Webhook(request: webhooksv1.Payload, metadata: Metadata, callback: (error: _service_error | null, response: empty.Empty) => void): ClientUnaryCall;
}
