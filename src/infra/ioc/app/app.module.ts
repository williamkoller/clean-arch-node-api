import { EnvironmentConfigModule } from '@app/infra/config/environment-config/environment-config.module';
import { AppController } from '@app/presentation/controllers/app/app.controller';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';

@Module({
  imports: [EnvironmentConfigModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
