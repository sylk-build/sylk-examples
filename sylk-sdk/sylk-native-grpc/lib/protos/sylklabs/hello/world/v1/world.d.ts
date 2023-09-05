/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientDuplexStream, ClientOptions, ClientReadableStream, ClientUnaryCall, ClientWritableStream, handleBidiStreamingCall, handleClientStreamingCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
/** Generated by sylk.build, DO NOT EDIT. */
/** [sylklabs.hello.world.v1.Hello] - */
export interface Hello {
    /** [sylklabs.hello.world.v1.Hello.text] - */
    text: string;
}
export declare const Hello: {
    encode(message: Hello, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Hello;
    fromJSON(object: any): Hello;
    toJSON(message: Hello): unknown;
    create<I extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & { [K in Exclude<keyof I, "text">]: never; }>(base?: I | undefined): Hello;
    fromPartial<I_1 extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "text">]: never; }>(object: I_1): Hello;
};
export type HelloWorldServiceService = typeof HelloWorldServiceService;
export declare const HelloWorldServiceService: {
    /** [hello.world.v1.HelloWorldService.Hello] - */
    readonly hello: {
        readonly path: "/sylklabs.hello.world.v1.HelloWorldService/Hello";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Hello) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Hello;
        readonly responseSerialize: (value: Hello) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Hello;
    };
    /** [StreamHello] - */
    readonly streamHello: {
        readonly path: "/sylklabs.hello.world.v1.HelloWorldService/StreamHello";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: Hello) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Hello;
        readonly responseSerialize: (value: Hello) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Hello;
    };
    /** [clientStream] - */
    readonly clientStream: {
        readonly path: "/sylklabs.hello.world.v1.HelloWorldService/clientStream";
        readonly requestStream: true;
        readonly responseStream: false;
        readonly requestSerialize: (value: Hello) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Hello;
        readonly responseSerialize: (value: Hello) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Hello;
    };
    /** [bidiStream] - */
    readonly bidiStream: {
        readonly path: "/sylklabs.hello.world.v1.HelloWorldService/bidiStream";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: Hello) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Hello;
        readonly responseSerialize: (value: Hello) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Hello;
    };
};
export interface HelloWorldServiceServer extends UntypedServiceImplementation {
    /** [hello.world.v1.HelloWorldService.Hello] - */
    hello: handleUnaryCall<Hello, Hello>;
    /** [StreamHello] - */
    streamHello: handleServerStreamingCall<Hello, Hello>;
    /** [clientStream] - */
    clientStream: handleClientStreamingCall<Hello, Hello>;
    /** [bidiStream] - */
    bidiStream: handleBidiStreamingCall<Hello, Hello>;
}
export interface HelloWorldServiceClient extends Client {
    /** [hello.world.v1.HelloWorldService.Hello] - */
    hello(request: Hello, callback: (error: ServiceError | null, response: Hello) => void): ClientUnaryCall;
    hello(request: Hello, metadata: Metadata, callback: (error: ServiceError | null, response: Hello) => void): ClientUnaryCall;
    hello(request: Hello, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Hello) => void): ClientUnaryCall;
    /** [StreamHello] - */
    streamHello(request: Hello, options?: Partial<CallOptions>): ClientReadableStream<Hello>;
    streamHello(request: Hello, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Hello>;
    /** [clientStream] - */
    clientStream(callback: (error: ServiceError | null, response: Hello) => void): ClientWritableStream<Hello>;
    clientStream(metadata: Metadata, callback: (error: ServiceError | null, response: Hello) => void): ClientWritableStream<Hello>;
    clientStream(options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Hello) => void): ClientWritableStream<Hello>;
    clientStream(metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Hello) => void): ClientWritableStream<Hello>;
    /** [bidiStream] - */
    bidiStream(): ClientDuplexStream<Hello, Hello>;
    bidiStream(options: Partial<CallOptions>): ClientDuplexStream<Hello, Hello>;
    bidiStream(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<Hello, Hello>;
}
export declare const HelloWorldServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): HelloWorldServiceClient;
    service: typeof HelloWorldServiceService;
};
