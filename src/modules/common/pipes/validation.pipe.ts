import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    try {
      const object = plainToInstance(metatype, value);
      const errors = await validate(object);
      if (errors.length > 0) {
        const response = errors.map((err) => ({
          property: err.property,
          message: err.constraints[Object.keys(err.constraints)[0]],
        }));
        throw new BadRequestException(response, 'payload validation failed');
      }
      return value;
    } catch (error) {
      throw new InternalServerErrorException(error['message']);
    }
  }
}
