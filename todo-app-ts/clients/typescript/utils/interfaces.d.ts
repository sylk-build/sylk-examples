interface Api<T> {
    [method: string]: T;
}
export type ApiType<T> = Api<T> & {};
export {};
