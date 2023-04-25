import _m0 from "protobufjs/minimal";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Todo.v1.Task] - None */
export interface Task {
    id: string;
    title: string;
    description: string;
    done: boolean;
}
/** [sylk.Todo.v1.TaskId] - None */
export interface TaskId {
    id: string;
}
export declare const Task: {
    encode(message: Task, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Task;
    fromJSON(object: any): Task;
    toJSON(message: Task): unknown;
    create<I extends {
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        done?: boolean | undefined;
    } & {
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        done?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof Task>]: never; }>(base?: I | undefined): Task;
    fromPartial<I_1 extends {
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        done?: boolean | undefined;
    } & {
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        done?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Task>]: never; }>(object: I_1): Task;
};
export declare const TaskId: {
    encode(message: TaskId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TaskId;
    fromJSON(object: any): TaskId;
    toJSON(message: TaskId): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): TaskId;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): TaskId;
};
