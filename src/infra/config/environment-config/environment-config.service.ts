import { DatabaseInterface } from '@app/domain/database/database.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService as Config } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService implements DatabaseInterface {
  constructor(private readonly config: Config) {}
  getDatabaseUri(): string {
    return this.config.get<string>('MONGODB_URI');
  }
}
