import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import QueryString from 'query-string';
import {useAuthStore} from 'stores/auth'
import { IPut, IDelete, IPatch, IPost, IGet } from './interfaces/http';

/**
 *
 *
 * @class HttpFacade
 * @description provides axios request methods for making api calls
 */
class HttpFacade {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      headers: { 'Content-Type': 'application/json' },
    });
    this.http.interceptors.request.use(
      (config) => {
        const token = useAuthStore.getState().authToken;
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    this.http.interceptors.response.use(
      (response) => response,
      (error: any) => {
        let targetError = {};
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (error?.response && error?.response?.status === 400) {
          const validationError = 'celebrate request validation failed';
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (error?.response?.data?.message === validationError) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            let validationMessage =
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              error?.response?.data?.validation?.body?.message;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            validationMessage = (validationMessage as string)?.replace(
              /"/g,
              ''
            );
            targetError = {
              errorType: 'validationError',
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              errorMessage: validationMessage,
            };
          }
        }
        // eslint-disable-next-line prefer-promise-reject-errors, @typescript-eslint/no-unsafe-member-access
        return Promise.reject({ ...(error.response || {}), ...targetError });
      }
    );
  }

  post = async ({ url, body }: IPost) => {
    const response = await this.http.post(url, body);
    return response.data as Record<PropertyKey, unknown>;
  };

  patch = async ({ url, body }: IPatch) => {
    const response = await this.http.patch(url, body);
    return response.data as Record<PropertyKey, unknown>;
  };

  get = async (
    { url, query }: IGet,
    options: AxiosRequestConfig<any> | undefined
  ) => {
    const qs = QueryString.stringify(query as Record<string, any>);
    const response = await this.http.get(`${url}?${qs}`, options);
    return response.data as Record<PropertyKey, unknown>;
  };

  delete = async ({ url }: IDelete) => {
    const response = await this.http.delete(url);
    return response.data as Record<PropertyKey, unknown>;
  };

  put = async ({ url, body }: IPut) => {
    const response = await this.http.put(url, body);
    return response.data as Record<PropertyKey, unknown>;
  };
}

export default new HttpFacade();
