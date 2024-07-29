import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsPositive,
  Max,
  ValidateNested,
} from 'class-validator';
import { Bucket } from './bucket.request.dto';
import { ApiProperty } from '@nestjs/swagger';

export class WaterJugRiddle {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @Max(1000)
  @ApiProperty({
    description: 'Amount of gallons to using two jugs to be filled ',
    examples: [1, 2, 3, 4, 5],
  })
  amountWanted: number;
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Bucket)
  @ApiProperty({ type: Bucket, description: 'Object related of the request ' })
  bucket!: Bucket;
}
