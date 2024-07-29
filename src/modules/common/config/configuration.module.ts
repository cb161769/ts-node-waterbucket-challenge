import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './utils/enviroment-validation.utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
      cache: true,
      validate,
      envFilePath: '.env',
    }),
  ],
})
export class ConfigurationModule {}
