import { UserRepositoryInterface } from '@app/data/protocols/db/user/user.repository.interface';
import { UserDatabaseInMemoryRepository } from '@app/infra/database/repositories/inmemory/user/user.databaseinmemory.repository';
import { AddUserUseCase } from '@app/main/factories/usecases/user/add-user/add-user.usecase';
import { UserController } from '@app/presentation/controllers/user/user.controller';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    UserDatabaseInMemoryRepository,
    {
      provide: AddUserUseCase,
      useFactory(userRepo: UserRepositoryInterface) {
        return new AddUserUseCase(userRepo);
      },
      inject: [UserDatabaseInMemoryRepository],
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
