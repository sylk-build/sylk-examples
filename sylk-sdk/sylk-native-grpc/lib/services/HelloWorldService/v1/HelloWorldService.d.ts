import { handleUnaryCall, handleClientStreamingCall, handleServerStreamingCall, handleBidiStreamingCall, UntypedHandleCall } from '@grpc/grpc-js';
import { ApiType } from '../../utils/interfaces';
import * as world from '../../../protos/sylklabs/hello/world/v1/world';
import { HelloWorldServiceService } from '../../../protos/sylklabs/hello/world/v1/world';
declare class HelloWorldService implements world.HelloWorldServiceServer, ApiType<UntypedHandleCall> {
    [method: string]: any;
    clientStream: handleClientStreamingCall<world.Hello, world.Hello>;
    streamHello: handleServerStreamingCall<world.Hello, world.Hello>;
    hello: handleUnaryCall<world.Hello, world.Hello>;
    bidiStream: handleBidiStreamingCall<world.Hello, world.Hello>;
}
export { HelloWorldService, HelloWorldServiceService };
