import { Module } from '@nestjs/common';
import { CacheManagerModule } from './cache/memory-cache.module';
import { ConfigurationModule } from './config/configuration.module';

@Module({
  imports: [ConfigurationModule, CacheManagerModule],
  exports: [CommonModule],
})
export class CommonModule {}
