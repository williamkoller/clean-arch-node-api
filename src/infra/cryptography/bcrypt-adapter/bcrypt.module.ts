import { Module } from '@nestjs/common';
import { BcryptAdapter } from './bcrypt-adapter';

@Module({
  providers: [BcryptAdapter],
  exports: [BcryptAdapter],
})
export class BcryptModule {}
