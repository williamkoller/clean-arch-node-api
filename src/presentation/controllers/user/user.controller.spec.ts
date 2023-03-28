import { UserRepositoryInterface } from '@app/data/protocols/db/user/user.repository.interface';
import { UserDatabaseInMemoryRepository } from '@app/infra/database/repositories/inmemory/user/user.databaseinmemory.repository';
import { AddUserUseCase } from '@app/main/factories/usecases/user/add-user/add-user.usecase';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;
  let addUserUseCase: AddUserUseCase;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
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
    }).compile();

    controller = moduleFixture.get<UserController>(UserController);
    addUserUseCase = moduleFixture.get<AddUserUseCase>(AddUserUseCase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(addUserUseCase).toBeDefined();
  });

  it('should ', async () => {
    const response = await controller.create({
      name: 'any_name',
      email: 'any_mail@mail.com',
      password: 'any_password',
    });

    expect(response).toEqual({
      id: response.id,
      name: 'any_name',
      email: 'any_mail@mail.com',
      password: 'any_password',
    });
  });
});
