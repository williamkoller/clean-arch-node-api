import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '@app/presentation/controllers/app/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env['PATH_ENVIRONMENT'],
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
