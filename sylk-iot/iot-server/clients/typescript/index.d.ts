import { ClientUnaryCall, ClientReadableStream, Metadata, ChannelCredentials, ServiceError as _service_error } from '@grpc/grpc-js';
import { Observable } from 'rxjs';
import * as iotv1 from './protos/sylklabs/iot/v1/iot';
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
export declare class IotServiceV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly IotServicev1Client;
    /**
    * @method IotService.Subscribe
    * @description None
    * @kind Server Stream
    * @param request iotv1.Topic
    * @param metadata Metadata
    * @returns Observable<iotv1.SensorData>
    */
    Subscribe(request: iotv1.Topic, metadata?: Metadata): Observable<iotv1.SensorData>;
    /**
    * @method IotService.Subscribe
    * @description None
    * @kind Server Stream
    * @param request iotv1.Topic
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with iotv1.SensorData
    * @returns ClientReadableStream<iotv1.SensorData>
    */
    Subscribe(request: iotv1.Topic, metadata: Metadata, callback: (error: _service_error | null, response: iotv1.SensorData) => void): ClientReadableStream<iotv1.SensorData>;
    /**
    * @method IotService.Publish
    * @description None
    * @kind Unary
    * @param request iotv1.PublishRequest
    * @param metadata Metadata
    * @returns Promise<empty.Empty>
    */
    Publish(request: iotv1.PublishRequest, metadata?: Metadata): Promise<empty.Empty>;
    /**
    * @method IotService.Publish
    * @description None
    * @kind Unary
    * @param request iotv1.PublishRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with empty.Empty
    * @returns ClientUnaryCall
    */
    Publish(request: iotv1.PublishRequest, metadata: Metadata, callback: (error: _service_error | null, response: empty.Empty) => void): ClientUnaryCall;
}
