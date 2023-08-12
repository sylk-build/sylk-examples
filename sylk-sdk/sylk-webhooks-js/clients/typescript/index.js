"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookServiceV1 = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const util_1 = require("util");
const webhooksv1 = __importStar(require("./protos/sylklabs/webhooks/v1/webhooks"));
const webhooks_1 = require("./protos/sylklabs/webhooks/v1/webhooks");
const interceptorsProviders = [];
const _DEFAULT_OPTION = {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
    "interceptors": interceptorsProviders,
};
const DEFAULT_CLIENT_OPTS = {
    host: "localhost",
    port: 44880,
    metadata: new grpc_js_1.Metadata(),
    channelCreds: grpc_js_1.credentials.createInsecure()
};
class WebhookServiceV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.3.5');
        this.WebhookServicev1Client = new webhooks_1.WebhookServiceClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    Webhook(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.WebhookServicev1Client.webhook.bind(this.WebhookServicev1Client))(webhooksv1.Payload.fromJSON(request), metadata);
        }
        else {
            return this.WebhookServicev1Client.webhook(webhooksv1.Payload.fromJSON(request), metadata, callback);
        }
    }
}
exports.WebhookServiceV1 = WebhookServiceV1;
//# sourceMappingURL=index.js.map