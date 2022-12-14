export type Links =
  | 'ROOT'
  | 'AUTH'
  | 'DASHBOARD'

export const LINKS: Record<Links, Links> = {
  ROOT: 'ROOT',
  AUTH: 'AUTH',
  DASHBOARD: 'DASHBOARD',
};

export interface LocationParams<Data> {
  pathname: string;
  state: Data;
  search: string;
  hash: string;
  key: string;
}

export interface ResponsePayload<X, T> {
  statusCode?: number;
  message?: X;
  data?: T;
}
