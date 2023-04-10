import { plainToClass } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Local = 'local',
  Test = 'test',
}

class EnvironmentVariables {
  @IsString()
  @IsNotEmpty()
  APP_URL: string;

  @IsNumber()
  @IsNotEmpty()
  PORT: number;

  @IsString()
  @IsNotEmpty()
  PATH_ENVIRONMENT: string;

  @IsString()
  @IsNotEmpty()
  MONGODB_URI: string;

  @IsEnum(Environment)
  NODE_ENV: Environment;
}

export function validate(config: Record<string, string>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
