// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BaseModel {}
export type GenericFunction = <T>(arg: T) => T;
export type GenericObject = { [key: string]: unknown };
export type Payload =
  | string
  | GenericObject // GenericObject
  | ArrayBuffer
  | ArrayBufferView
  | URLSearchParams
  | FormData
  | File
  | Blob
  | BaseModel;

export type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;
export type JSONValue = Primitive | JSONObject | JSONArray;
export interface JSONObject {
  [key: string]: JSONValue;
}
export type JSONArray = Array<JSONValue>;
export type VoidCallback = () => void;
export type ErrorWithMessage = {
  message: string;
};

export type Status = 'INITIAL' | 'LOADING' | 'DATA' | 'NO_DATA' | 'ERROR';
