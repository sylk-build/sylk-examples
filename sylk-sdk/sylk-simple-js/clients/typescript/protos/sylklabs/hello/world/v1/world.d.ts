/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
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
    /** [GetHello] - */
    readonly getHello: {
        readonly path: "/sylklabs.hello.world.v1.HelloWorldService/GetHello";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Hello) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Hello;
        readonly responseSerialize: (value: Hello) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Hello;
    };
};
export interface HelloWorldServiceServer extends UntypedServiceImplementation {
    /** [GetHello] - */
    getHello: handleUnaryCall<Hello, Hello>;
}
export interface HelloWorldServiceClient extends Client {
    /** [GetHello] - */
    getHello(request: Hello, callback: (error: ServiceError | null, response: Hello) => void): ClientUnaryCall;
    getHello(request: Hello, metadata: Metadata, callback: (error: ServiceError | null, response: Hello) => void): ClientUnaryCall;
    getHello(request: Hello, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Hello) => void): ClientUnaryCall;
}
export declare const HelloWorldServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): HelloWorldServiceClient;
    service: typeof HelloWorldServiceService;
};
