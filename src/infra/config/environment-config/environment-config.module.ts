import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './environment-config.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env['PATH_ENVIRONMENT'],
      validate,
    }),
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {}
