/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDelete {
  url: string;
}

export interface IPost extends IDelete {
  body: FormData | string;
}

export interface IPatch extends IDelete {
  body?: FormData | string;
}

export type IPut = IPost;

export interface IGet extends IDelete {
  query?: Record<string, unknown>;
}
