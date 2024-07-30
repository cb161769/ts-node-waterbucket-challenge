import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { WaterBuckController } from './controllers/bucket.controller';
import { bucketService } from './services/bucket.service';

@Module({
  imports: [CommonModule],
  controllers: [WaterBuckController],
  providers: [bucketService],
})
export class BucketModule {}
