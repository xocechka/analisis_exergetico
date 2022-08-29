/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';

export interface Init {
  baseURL?: string;
  withCredentials?: boolean;
  handleSuccess?: (
    value: AxiosResponse<any>
  ) => AxiosResponse<any> | Promise<AxiosResponse<any>>;
  handleError?: ((error: any) => any) | undefined;
}
