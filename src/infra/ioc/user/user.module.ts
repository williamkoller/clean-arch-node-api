import { Hasher } from '@app/data/protocols/cryptography/hasher';
import { UserRepositoryInterface } from '@app/data/protocols/db/user/user.repository.interface';
import { BcryptAdapter } from '@app/infra/cryptography/bcrypt-adapter/bcrypt-adapter';
import { BcryptModule } from '@app/infra/cryptography/bcrypt-adapter/bcrypt.module';
import { DatabaseModule } from '@app/infra/database/database.module';
import { UserMongodbRepository } from '@app/infra/database/mongodb/repositories/user/user-mongodb.repository';
import { AddUserUseCase } from '@app/main/factories/usecases/user/add-user/add-user.usecase';
import { UserController } from '@app/presentation/controllers/user/user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, BcryptModule],
  providers: [
    {
      provide: AddUserUseCase,
      useFactory(userRepo: UserRepositoryInterface, hasher: Hasher) {
        return new AddUserUseCase(userRepo, hasher);
      },
      inject: [UserMongodbRepository, BcryptAdapter],
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
