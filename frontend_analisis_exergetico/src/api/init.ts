import { AxiosError } from 'axios';
import { Init } from './Http';
import {
  DbConcurrencyError,
  ErrorResponse,
  InternalServerError,
  NetworkError,
  BadRequestError,
} from '../utils/errors/index';

export default <Init>{
  baseURL: 'http://127.0.0.1:8000',
  handleError: (error: AxiosError) => {
    let errorToReject: ErrorResponse | undefined;

    if (error.message === 'Network Error') {
      errorToReject = new NetworkError('Network Error', undefined);
    }

    if (error.response) {
      const { response } = error;

      if (!response.status) {
      } else {
        const errors = {
          400: new BadRequestError(response?.data, response.status),
          409: new DbConcurrencyError(response?.data, response.status),
          500: new InternalServerError(response?.data, response.status),
        };

        console.log('Error by axios');
        console.log('Status: ' + response.status);

        errorToReject = errors[response.status];
      }
    }
    return Promise.reject(errorToReject);
  },
};
