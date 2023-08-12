import { ClientUnaryCall, Metadata, ChannelCredentials, ServiceError as _service_error } from '@grpc/grpc-js';
import * as worldv1 from './protos/sylklabs/hello/world/v1/world';
/**
 * Generated thanks to [sylk.build](https://www.sylk.build)
 */
export interface SylkClientOpts {
    host: string;
    port: number;
    metadata: Metadata;
    channelCreds: ChannelCredentials;
}
export declare class HelloWorldServiceV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly HelloWorldServicev1Client;
    /**
    * @method HelloWorldService.GetHello
    * @description None
    * @kind Unary
    * @param request worldv1.Hello
    * @param metadata Metadata
    * @returns Promise<worldv1.Hello>
    */
    GetHello(request: worldv1.Hello, metadata?: Metadata): Promise<worldv1.Hello>;
    /**
    * @method HelloWorldService.GetHello
    * @description None
    * @kind Unary
    * @param request worldv1.Hello
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with worldv1.Hello
    * @returns ClientUnaryCall
    */
    GetHello(request: worldv1.Hello, metadata: Metadata, callback: (error: _service_error | null, response: worldv1.Hello) => void): ClientUnaryCall;
}
