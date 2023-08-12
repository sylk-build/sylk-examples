"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookServiceClient = exports.WebhookServiceService = exports.Payload = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../google/protobuf/empty");
const struct_1 = require("../../../google/protobuf/struct");
function createBasePayload() {
    return { data: undefined };
}
exports.Payload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.data), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.data = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { data: isObject(object.data) ? object.data : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.data !== undefined) {
            obj.data = message.data;
        }
        return obj;
    },
    create(base) {
        return exports.Payload.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePayload();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
exports.WebhookServiceService = {
    /** [webhooks.v1.WebhookService.Webhook] - */
    webhook: {
        path: "/sylklabs.webhooks.v1.WebhookService/Webhook",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.Payload.encode(value).finish()),
        requestDeserialize: (value) => exports.Payload.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
};
exports.WebhookServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.WebhookServiceService, "sylklabs.webhooks.v1.WebhookService");
function isObject(value) {
    return typeof value === "object" && value !== null;
}
//# sourceMappingURL=webhooks.js.map