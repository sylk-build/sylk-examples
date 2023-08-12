import { handleUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { ApiType } from '../../utils/interfaces';
import * as webhooks from '../../protos/sylklabs/webhooks/v1/webhooks';
import * as empty from '../../protos/google/protobuf/empty';
import { WebhookServiceService } from '../../protos/sylklabs/webhooks/v1/webhooks';
declare class WebhookService implements webhooks.WebhookServiceServer, ApiType<UntypedHandleCall> {
    [method: string]: any;
    webhook: handleUnaryCall<webhooks.Payload, empty.Empty>;
}
export { WebhookService, WebhookServiceService };
