import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { WaterBuckController } from './controllers/bucket.controller';

@Module({
  imports: [CommonModule],
  controllers: [WaterBuckController],
})
export class BucketModule {}
