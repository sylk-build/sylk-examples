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
exports.IotServiceV1 = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const util_1 = require("util");
const rxjs_1 = require("rxjs");
const iotv1 = __importStar(require("./protos/sylklabs/iot/v1/iot"));
const iot_1 = require("./protos/sylklabs/iot/v1/iot");
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
class IotServiceV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.3.4');
        this.IotServicev1Client = new iot_1.IotServiceClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    Subscribe(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.IotServicev1Client.subscribe(iotv1.Topic.fromJSON(request), metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
    Publish(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.IotServicev1Client.publish.bind(this.IotServicev1Client))(iotv1.PublishRequest.fromJSON(request), metadata);
        }
        else {
            return this.IotServicev1Client.publish(iotv1.PublishRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.IotServiceV1 = IotServiceV1;
//# sourceMappingURL=index.js.map