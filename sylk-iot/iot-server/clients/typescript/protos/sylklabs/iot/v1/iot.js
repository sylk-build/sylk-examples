"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotServiceClient = exports.IotServiceService = exports.SensorData = exports.Topic = exports.PublishRequest = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../google/protobuf/empty");
const timestamp_1 = require("../../../google/protobuf/timestamp");
function createBasePublishRequest() {
    return { topic: "", data: undefined };
}
exports.PublishRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.topic !== "") {
            writer.uint32(10).string(message.topic);
        }
        if (message.data !== undefined) {
            exports.SensorData.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublishRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.topic = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data = exports.SensorData.decode(reader, reader.uint32());
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
        return {
            topic: isSet(object.topic) ? String(object.topic) : "",
            data: isSet(object.data) ? exports.SensorData.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.topic !== "") {
            obj.topic = message.topic;
        }
        if (message.data !== undefined) {
            obj.data = exports.SensorData.toJSON(message.data);
        }
        return obj;
    },
    create(base) {
        return exports.PublishRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePublishRequest();
        message.topic = (_a = object.topic) !== null && _a !== void 0 ? _a : "";
        message.data = (object.data !== undefined && object.data !== null)
            ? exports.SensorData.fromPartial(object.data)
            : undefined;
        return message;
    },
};
function createBaseTopic() {
    return { name: "" };
}
exports.Topic = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTopic();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.Topic.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTopic();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSensorData() {
    return { sensorId: "", value: 0, timestamp: undefined };
}
exports.SensorData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sensorId !== "") {
            writer.uint32(10).string(message.sensorId);
        }
        if (message.value !== 0) {
            writer.uint32(17).double(message.value);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSensorData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sensorId = reader.string();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.value = reader.double();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        return {
            sensorId: isSet(object.sensorId) ? String(object.sensorId) : "",
            value: isSet(object.value) ? Number(object.value) : 0,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sensorId !== "") {
            obj.sensorId = message.sensorId;
        }
        if (message.value !== 0) {
            obj.value = message.value;
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = message.timestamp.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.SensorData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSensorData();
        message.sensorId = (_a = object.sensorId) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
exports.IotServiceService = {
    /** [sylklabs.iot.v1.IotService.Subscribe] - */
    subscribe: {
        path: "/sylklabs.iot.v1.IotService/Subscribe",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.Topic.encode(value).finish()),
        requestDeserialize: (value) => exports.Topic.decode(value),
        responseSerialize: (value) => Buffer.from(exports.SensorData.encode(value).finish()),
        responseDeserialize: (value) => exports.SensorData.decode(value),
    },
    /** [sylklabs.iot.v1.IotService.Publish] - */
    publish: {
        path: "/sylklabs.iot.v1.IotService/Publish",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.PublishRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.PublishRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
};
exports.IotServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.IotServiceService, "sylklabs.iot.v1.IotService");
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=iot.js.map