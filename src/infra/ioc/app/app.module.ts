import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '@app/presentation/controllers/app/app.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env['PATH_ENVIRONMENT'],
    }),
    forwardRef(() => UserModule),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
