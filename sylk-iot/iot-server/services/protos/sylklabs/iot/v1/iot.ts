/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientReadableStream,
  ClientUnaryCall,
  handleServerStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { Timestamp } from "../../../google/protobuf/timestamp";

/** Generated by sylk.build, DO NOT EDIT. */

/** [sylklabs.iot.v1.PublishRequest] - */
export interface PublishRequest {
  /** [sylklabs.iot.v1.PublishRequest.topic] - */
  topic: string;
  /** [sylklabs.iot.v1.PublishRequest.data] - */
  data?: SensorData | undefined;
}

/** [sylklabs.iot.v1.Topic] - The Topic message represents the topic to which the IoT server and Grafana plugin will subscribe and publish. It will have a single field called name, which is a string representing the name of the topic. */
export interface Topic {
  /** [sylklabs.iot.v1.Topic.name] - */
  name: string;
}

/** [sylklabs.iot.v1.SensorData] - */
export interface SensorData {
  /** [sylklabs.iot.v1.SensorData.sensor_id] - */
  sensorId: string;
  /** [sylklabs.iot.v1.SensorData.value] - */
  value: number;
  /** [sylklabs.iot.v1.SensorData.timestamp] - */
  timestamp?: Date | undefined;
}

function createBasePublishRequest(): PublishRequest {
  return { topic: "", data: undefined };
}

export const PublishRequest = {
  encode(message: PublishRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.data !== undefined) {
      SensorData.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.data = SensorData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishRequest {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      data: isSet(object.data) ? SensorData.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: PublishRequest): unknown {
    const obj: any = {};
    if (message.topic !== "") {
      obj.topic = message.topic;
    }
    if (message.data !== undefined) {
      obj.data = SensorData.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishRequest>, I>>(base?: I): PublishRequest {
    return PublishRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublishRequest>, I>>(object: I): PublishRequest {
    const message = createBasePublishRequest();
    message.topic = object.topic ?? "";
    message.data = (object.data !== undefined && object.data !== null)
      ? SensorData.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseTopic(): Topic {
  return { name: "" };
}

export const Topic = {
  encode(message: Topic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Topic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): Topic {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Topic): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Topic>, I>>(base?: I): Topic {
    return Topic.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Topic>, I>>(object: I): Topic {
    const message = createBaseTopic();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSensorData(): SensorData {
  return { sensorId: "", value: 0, timestamp: undefined };
}

export const SensorData = {
  encode(message: SensorData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sensorId !== "") {
      writer.uint32(10).string(message.sensorId);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SensorData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SensorData {
    return {
      sensorId: isSet(object.sensorId) ? String(object.sensorId) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: SensorData): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<SensorData>, I>>(base?: I): SensorData {
    return SensorData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SensorData>, I>>(object: I): SensorData {
    const message = createBaseSensorData();
    message.sensorId = object.sensorId ?? "";
    message.value = object.value ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

export type IotServiceService = typeof IotServiceService;
export const IotServiceService = {
  /** [sylklabs.iot.v1.IotService.Subscribe] - */
  subscribe: {
    path: "/sylklabs.iot.v1.IotService/Subscribe",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Topic) => Buffer.from(Topic.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Topic.decode(value),
    responseSerialize: (value: SensorData) => Buffer.from(SensorData.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SensorData.decode(value),
  },
  /** [sylklabs.iot.v1.IotService.Publish] - */
  publish: {
    path: "/sylklabs.iot.v1.IotService/Publish",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PublishRequest) => Buffer.from(PublishRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PublishRequest.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface IotServiceServer extends UntypedServiceImplementation {
  /** [sylklabs.iot.v1.IotService.Subscribe] - */
  subscribe: handleServerStreamingCall<Topic, SensorData>;
  /** [sylklabs.iot.v1.IotService.Publish] - */
  publish: handleUnaryCall<PublishRequest, Empty>;
}

export interface IotServiceClient extends Client {
  /** [sylklabs.iot.v1.IotService.Subscribe] - */
  subscribe(request: Topic, options?: Partial<CallOptions>): ClientReadableStream<SensorData>;
  subscribe(request: Topic, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<SensorData>;
  /** [sylklabs.iot.v1.IotService.Publish] - */
  publish(request: PublishRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
  publish(
    request: PublishRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  publish(
    request: PublishRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
}

export const IotServiceClient = makeGenericClientConstructor(
  IotServiceService,
  "sylklabs.iot.v1.IotService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): IotServiceClient;
  service: typeof IotServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
