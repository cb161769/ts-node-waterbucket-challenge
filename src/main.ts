import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerFactory } from './modules/common/logger/logger.module';
import { setupSwagger } from './modules/common/swagger/swagger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: LoggerFactory('waterbucket')
  });
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
