import { Hasher } from '@app/data/protocols/cryptography/hasher';
import { UserRepositoryInterface } from '@app/data/protocols/db/user/user.repository.interface';
import { BcryptAdapter } from '@app/infra/cryptography/bcrypt-adapter/bcrypt-adapter';
import { UserDatabaseInMemoryRepository } from '@app/infra/database/repositories/inmemory/user/user.databaseinmemory.repository';
import { AddUserUseCase } from '@app/main/factories/usecases/user/add-user/add-user.usecase';
import { UserController } from '@app/presentation/controllers/user/user.controller';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    UserDatabaseInMemoryRepository,
    BcryptAdapter,
    {
      provide: AddUserUseCase,
      useFactory(userRepo: UserRepositoryInterface, hasher: Hasher) {
        return new AddUserUseCase(userRepo, hasher);
      },
      inject: [UserDatabaseInMemoryRepository, BcryptAdapter],
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
