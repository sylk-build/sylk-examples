import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class PublishRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): PublishRequest;

  getData(): SensorData | undefined;
  setData(value?: SensorData): PublishRequest;
  hasData(): boolean;
  clearData(): PublishRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
  static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishRequest;
  static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
  export type AsObject = {
    topic: string,
    data?: SensorData.AsObject,
  }
}

export class Topic extends jspb.Message {
  getName(): string;
  setName(value: string): Topic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    name: string,
  }
}

export class SensorData extends jspb.Message {
  getSensorId(): string;
  setSensorId(value: string): SensorData;

  getValue(): number;
  setValue(value: number): SensorData;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SensorData;
  hasTimestamp(): boolean;
  clearTimestamp(): SensorData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorData.AsObject;
  static toObject(includeInstance: boolean, msg: SensorData): SensorData.AsObject;
  static serializeBinaryToWriter(message: SensorData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorData;
  static deserializeBinaryFromReader(message: SensorData, reader: jspb.BinaryReader): SensorData;
}

export namespace SensorData {
  export type AsObject = {
    sensorId: string,
    value: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

