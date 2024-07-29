export type Response<T> = {
  code: string;
  data: T;
  path: string;
  error?: any;
};
