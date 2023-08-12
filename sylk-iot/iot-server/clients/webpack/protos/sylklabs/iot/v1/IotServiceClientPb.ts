/**
 * @fileoverview gRPC-Web generated client stub for sylklabs.iot.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as sylklabs_iot_v1_iot_pb from '../../../sylklabs/iot/v1/iot_pb';


export class IotServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSubscribe = new grpcWeb.MethodDescriptor(
    '/sylklabs.iot.v1.IotService/Subscribe',
    grpcWeb.MethodType.SERVER_STREAMING,
    sylklabs_iot_v1_iot_pb.Topic,
    sylklabs_iot_v1_iot_pb.SensorData,
    (request: sylklabs_iot_v1_iot_pb.Topic) => {
      return request.serializeBinary();
    },
    sylklabs_iot_v1_iot_pb.SensorData.deserializeBinary
  );

  subscribe(
    request: sylklabs_iot_v1_iot_pb.Topic,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<sylklabs_iot_v1_iot_pb.SensorData> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/sylklabs.iot.v1.IotService/Subscribe',
      request,
      metadata || {},
      this.methodDescriptorSubscribe);
  }

  methodDescriptorPublish = new grpcWeb.MethodDescriptor(
    '/sylklabs.iot.v1.IotService/Publish',
    grpcWeb.MethodType.UNARY,
    sylklabs_iot_v1_iot_pb.PublishRequest,
    google_protobuf_empty_pb.Empty,
    (request: sylklabs_iot_v1_iot_pb.PublishRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  publish(
    request: sylklabs_iot_v1_iot_pb.PublishRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  publish(
    request: sylklabs_iot_v1_iot_pb.PublishRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  publish(
    request: sylklabs_iot_v1_iot_pb.PublishRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sylklabs.iot.v1.IotService/Publish',
        request,
        metadata || {},
        this.methodDescriptorPublish,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sylklabs.iot.v1.IotService/Publish',
    request,
    metadata || {},
    this.methodDescriptorPublish);
  }

}

