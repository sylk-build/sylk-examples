"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct_FieldsEntry = exports.Struct = exports.nullValueToJSON = exports.nullValueFromJSON = exports.NullValue = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
var NullValue;
(function (NullValue) {
    /** NULL_VALUE - Null value. */
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    NullValue[NullValue["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NullValue = exports.NullValue || (exports.NullValue = {}));
function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return NullValue.NULL_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NullValue.UNRECOGNIZED;
    }
}
exports.nullValueFromJSON = nullValueFromJSON;
function nullValueToJSON(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return "NULL_VALUE";
        case NullValue.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.nullValueToJSON = nullValueToJSON;
function createBaseStruct() {
    return { fields: {} };
}
exports.Struct = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.fields).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.Struct_FieldsEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStruct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.Struct_FieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.fields[entry1.key] = entry1.value;
                    }
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
            fields: isObject(object.fields)
                ? Object.entries(object.fields).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields) {
            const entries = Object.entries(message.fields);
            if (entries.length > 0) {
                obj.fields = {};
                entries.forEach(([k, v]) => {
                    obj.fields[k] = v;
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.Struct.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStruct();
        message.fields = Object.entries((_a = object.fields) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
    wrap(object) {
        const struct = createBaseStruct();
        if (object !== undefined) {
            Object.keys(object).forEach((key) => {
                struct.fields[key] = object[key];
            });
        }
        return struct;
    },
    unwrap(message) {
        const object = {};
        if (message.fields) {
            Object.keys(message.fields).forEach((key) => {
                object[key] = message.fields[key];
            });
        }
        return object;
    },
};
function createBaseStruct_FieldsEntry() {
    return { key: "", value: undefined };
}
exports.Struct_FieldsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Value.encode(exports.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStruct_FieldsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.Value.unwrap(exports.Value.decode(reader, reader.uint32()));
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object === null || object === void 0 ? void 0 : object.value) ? object.value : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.Struct_FieldsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStruct_FieldsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseValue() {
    return {
        nullValue: undefined,
        numberValue: undefined,
        stringValue: undefined,
        boolValue: undefined,
        structValue: undefined,
        listValue: undefined,
    };
}
exports.Value = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nullValue !== undefined) {
            writer.uint32(8).int32(message.nullValue);
        }
        if (message.numberValue !== undefined) {
            writer.uint32(17).double(message.numberValue);
        }
        if (message.stringValue !== undefined) {
            writer.uint32(26).string(message.stringValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(32).bool(message.boolValue);
        }
        if (message.structValue !== undefined) {
            exports.Struct.encode(exports.Struct.wrap(message.structValue), writer.uint32(42).fork()).ldelim();
        }
        if (message.listValue !== undefined) {
            exports.ListValue.encode(exports.ListValue.wrap(message.listValue), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nullValue = reader.int32();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.numberValue = reader.double();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.stringValue = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.boolValue = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.structValue = exports.Struct.unwrap(exports.Struct.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.listValue = exports.ListValue.unwrap(exports.ListValue.decode(reader, reader.uint32()));
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
            nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : undefined,
            numberValue: isSet(object.numberValue) ? Number(object.numberValue) : undefined,
            stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
            boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
            structValue: isObject(object.structValue) ? object.structValue : undefined,
            listValue: Array.isArray(object.listValue) ? [...object.listValue] : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nullValue !== undefined) {
            obj.nullValue = nullValueToJSON(message.nullValue);
        }
        if (message.numberValue !== undefined) {
            obj.numberValue = message.numberValue;
        }
        if (message.stringValue !== undefined) {
            obj.stringValue = message.stringValue;
        }
        if (message.boolValue !== undefined) {
            obj.boolValue = message.boolValue;
        }
        if (message.structValue !== undefined) {
            obj.structValue = message.structValue;
        }
        if (message.listValue !== undefined) {
            obj.listValue = message.listValue;
        }
        return obj;
    },
    create(base) {
        return exports.Value.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseValue();
        message.nullValue = (_a = object.nullValue) !== null && _a !== void 0 ? _a : undefined;
        message.numberValue = (_b = object.numberValue) !== null && _b !== void 0 ? _b : undefined;
        message.stringValue = (_c = object.stringValue) !== null && _c !== void 0 ? _c : undefined;
        message.boolValue = (_d = object.boolValue) !== null && _d !== void 0 ? _d : undefined;
        message.structValue = (_e = object.structValue) !== null && _e !== void 0 ? _e : undefined;
        message.listValue = (_f = object.listValue) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
    wrap(value) {
        const result = createBaseValue();
        if (value === null) {
            result.nullValue = NullValue.NULL_VALUE;
        }
        else if (typeof value === "boolean") {
            result.boolValue = value;
        }
        else if (typeof value === "number") {
            result.numberValue = value;
        }
        else if (typeof value === "string") {
            result.stringValue = value;
        }
        else if (Array.isArray(value)) {
            result.listValue = value;
        }
        else if (typeof value === "object") {
            result.structValue = value;
        }
        else if (typeof value !== "undefined") {
            throw new Error("Unsupported any value type: " + typeof value);
        }
        return result;
    },
    unwrap(message) {
        if (message.stringValue !== undefined) {
            return message.stringValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.numberValue) !== undefined) {
            return message.numberValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.boolValue) !== undefined) {
            return message.boolValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.structValue) !== undefined) {
            return message.structValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.listValue) !== undefined) {
            return message.listValue;
        }
        else if ((message === null || message === void 0 ? void 0 : message.nullValue) !== undefined) {
            return null;
        }
        return undefined;
    },
};
function createBaseListValue() {
    return { values: [] };
}
exports.ListValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.values) {
            exports.Value.encode(exports.Value.wrap(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.values.push(exports.Value.unwrap(exports.Value.decode(reader, reader.uint32())));
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
        return { values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? [...object.values] : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.values) === null || _a === void 0 ? void 0 : _a.length) {
            obj.values = message.values;
        }
        return obj;
    },
    create(base) {
        return exports.ListValue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListValue();
        message.values = ((_a = object.values) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
    wrap(array) {
        const result = createBaseListValue();
        result.values = array !== null && array !== void 0 ? array : [];
        return result;
    },
    unwrap(message) {
        if ((message === null || message === void 0 ? void 0 : message.hasOwnProperty("values")) && Array.isArray(message.values)) {
            return message.values;
        }
        else {
            return message;
        }
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=struct.js.map