import { Module } from '@nestjs/common';
import { CommonModule } from './modules/common/common.module';
import { BucketModule } from './modules/bucket/bucket.module';

@Module({
  imports: [CommonModule, BucketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
