import { IsBoolean, IsEnum, IsNumber } from 'class-validator';
import { Environment } from '../enums/enviroments.enums';

export class Enviroment {
  @IsEnum(Environment)
  NODE_ENV: Environment;
  @IsNumber()
  PORT: number;
  @IsBoolean()
  DEBUG: boolean;
}
