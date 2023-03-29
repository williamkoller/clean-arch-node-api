import { Hasher } from '@app/data/protocols/cryptography/hasher';
import { UserRepositoryInterface } from '@app/data/protocols/db/user/user.repository.interface';
import { BcryptAdapter } from '@app/infra/cryptography/bcrypt-adapter/bcrypt-adapter';
import { UserDatabaseInMemoryRepository } from '@app/infra/database/repositories/inmemory/user/user.databaseinmemory.repository';
import { AddUserUseCase } from '@app/main/factories/usecases/user/add-user/add-user.usecase';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;
  let addUserUseCase: AddUserUseCase;
  let bcryptAdapter: BcryptAdapter;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
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
    }).compile();

    controller = moduleFixture.get<UserController>(UserController);
    addUserUseCase = moduleFixture.get<AddUserUseCase>(AddUserUseCase);
    bcryptAdapter = moduleFixture.get<BcryptAdapter>(BcryptAdapter);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(addUserUseCase).toBeDefined();
  });

  it('should be create user in controller', async () => {
    const hash = await bcryptAdapter.hash('any_password');
    jest.spyOn(bcryptAdapter, 'hash').mockResolvedValue(hash);
    const response = await controller.create({
      name: 'any_name',
      email: 'any_mail@mail.com',
      password: hash,
    });

    expect(response).toEqual({
      id: response.id,
      name: 'any_name',
      email: 'any_mail@mail.com',
      password: hash,
    });
  });
});
