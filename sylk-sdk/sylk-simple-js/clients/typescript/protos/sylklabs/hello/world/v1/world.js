"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldServiceClient = exports.HelloWorldServiceService = exports.Hello = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseHello() {
    return { text: "" };
}
exports.Hello = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHello();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.text = reader.string();
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
        return { text: isSet(object.text) ? String(object.text) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.text !== "") {
            obj.text = message.text;
        }
        return obj;
    },
    create(base) {
        return exports.Hello.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHello();
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
exports.HelloWorldServiceService = {
    /** [GetHello] - */
    getHello: {
        path: "/sylklabs.hello.world.v1.HelloWorldService/GetHello",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.Hello.encode(value).finish()),
        requestDeserialize: (value) => exports.Hello.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Hello.encode(value).finish()),
        responseDeserialize: (value) => exports.Hello.decode(value),
    },
};
exports.HelloWorldServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.HelloWorldServiceService, "sylklabs.hello.world.v1.HelloWorldService");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=world.js.map