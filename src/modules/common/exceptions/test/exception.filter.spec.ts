import { ErrorHandler } from '../exception.filter.module';
import { ArgumentsHost } from '@nestjs/common';

describe('MyExceptionFilter', () => {
  let filter: ErrorHandler;

  beforeEach(() => {
    filter = new ErrorHandler();
  });

  it('should catch the exception', () => {
    const host = {
      switchToHttp: () => ({
        getResponse: () => ({
          status: (code: number) => ({
            json: (response: any) => response,
          }),
        }),
      }),
    } as ArgumentsHost;

    expect(filter.catch(new Error('Test error'), host)).toEqual({
      statusCode: 500,
      message: 'Test error',
    });
  });
});