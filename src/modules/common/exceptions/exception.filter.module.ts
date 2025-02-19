import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
@Catch()
export class ErrorHandler implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const responseBody = {
      code: httpStatus,
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      error: exception['response'] ?? exception,
      data: null,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
