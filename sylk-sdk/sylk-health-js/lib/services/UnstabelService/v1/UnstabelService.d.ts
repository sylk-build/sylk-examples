import { handleUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { ApiType } from '../../utils/interfaces';
import * as empty from '../../protos/google/protobuf/empty';
import { UnstabelServiceService, UnstabelServiceServer } from '../../protos/sylklabs/unstable/v1/unstable';
declare class UnstabelService implements UnstabelServiceServer, ApiType<UntypedHandleCall> {
    [method: string]: any;
    constructor();
    shaky: handleUnaryCall<any, empty.Empty>;
}
export { UnstabelService, UnstabelServiceService };
