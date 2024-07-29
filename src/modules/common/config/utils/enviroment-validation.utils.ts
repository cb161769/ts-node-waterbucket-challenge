import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Enviroment } from '../models/enviroment.model';

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(Enviroment, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    const response = errors.map((err) => ({
      property: err.property,
      message: err.constraints[Object.keys(err.constraints)[0]],
    }));
    throw new Error(JSON.stringify(response));
  }
  return validatedConfig;
}
