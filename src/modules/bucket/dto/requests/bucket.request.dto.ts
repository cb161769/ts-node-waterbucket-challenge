import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsPositive, Max } from 'class-validator';

export class Bucket {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'property related of the first bucket capacity',
    examples: [1, 2, 3, 4, 5],
  })
  @Max(1000)
  first: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'property related of the second bucket capacity',
    examples: [1, 2, 3, 4, 5],
  })
  @Max(1000)
  second: number;
}
