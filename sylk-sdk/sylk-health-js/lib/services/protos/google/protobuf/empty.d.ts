import _m0 from "protobufjs/minimal";
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 *
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Empty {
}
export declare const Empty: {
    encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Empty;
    fromJSON(_: any): Empty;
    toJSON(_: Empty): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): Empty;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Empty;
};
