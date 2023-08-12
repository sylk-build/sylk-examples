import { handleUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { ApiType } from '../../utils/interfaces';
import * as world from '../../protos/sylklabs/hello/world/v1/world';
import { HelloWorldServiceService } from '../../protos/sylklabs/hello/world/v1/world';
declare class HelloWorldService implements world.HelloWorldServiceServer, ApiType<UntypedHandleCall> {
    [method: string]: any;
    getHello: handleUnaryCall<world.Hello, world.Hello>;
}
export { HelloWorldService, HelloWorldServiceService };
