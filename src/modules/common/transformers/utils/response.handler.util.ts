import { ExecutionContext } from '@nestjs/common';

export function responseHandler(res: any, context: ExecutionContext) {
  const ctx = context.switchToHttp();
  const response = ctx.getResponse();
  const request = ctx.getRequest();
  const code = response.statusCode;

  return {
    code,
    data: res,
    path: request.url,
  };
}
