import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerFactory } from './modules/common/logger/logger.module';
import { setupSwagger } from './modules/common/swagger/swagger.module';
import { ErrorHandler } from './modules/common/exceptions/exception.filter.module';
import { ValidationPipe } from './modules/common/pipes/validation.pipe';
import { ResponseInterceptor } from './modules/common/transformers/response.interceptor';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: LoggerFactory(process.env.APP_NAME ?? 'waterbucket'),
  });
  setupSwagger(app);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: 'v1',
  });
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ErrorHandler(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
