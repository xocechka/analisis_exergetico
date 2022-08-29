import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

import init from './init';
import type { Payload } from 'src/utils/types';
import type { Init } from './Http';

export class Http {
  private service: AxiosInstance;

  constructor(init: Init) {
    this.defaultInit();

    const service = axios.create({
      baseURL: init.baseURL,
    });

    service.interceptors.response.use(init.handleSuccess, init.handleError);
    this.service = service;
  }

  defaultInit() {
    init.baseURL =
      init.baseURL !== undefined ? init.baseURL : 'http://localhost';
    init.withCredentials =
      init.withCredentials !== undefined ? init.withCredentials : false;
    init.handleSuccess =
      init.handleSuccess !== undefined
        ? init.handleSuccess
        : this.defaultHandleSuccess;
    init.handleError =
      init.handleError !== undefined
        ? init.handleError
        : this.defaultHandleError;
  }

  defaultHandleSuccess(response: AxiosResponse) {
    return Promise.resolve(response);
  }

  defaultHandleError(error: AxiosError) {
    return Promise.reject(error);
  }

  get(path: string) {
    return this.service.request({
      method: 'GET',
      url: path,
      responseType: 'json',
    });
  }

  patch(path: string, payload: Payload) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  post(path: string, payload?: Payload) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  put(path: string, payload: Payload) {
    return this.service.request({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  delete(path: string) {
    return this.service.request({
      method: 'DELETE',
      url: path,
      responseType: 'json',
    });
  }
}

export default new Http(init);
