import { UserDatabaseInMemoryRepository } from '@app/infra/database/repositories/inmemory/user/user.databaseinmemory.repository';
import { AddUserDTO } from '@app/presentation/dtos/user/add-user/add-user.dto';
import { ConflictException } from '@nestjs/common';
import { AddUserUseCase } from './add-user.usecase';

describe('AddUserUseCase Test', () => {
  it('should be create a new user', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const createAccountUseCase = new AddUserUseCase(repository);
    const addUserDTO: AddUserDTO = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    const output = await createAccountUseCase.create(addUserDTO);

    expect(repository.users).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.users[0].id,
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
  });

  it('should be throw when usecase throw', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const createAccountUseCase = new AddUserUseCase(repository);
    const addUserDTO: AddUserDTO = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    const output = await createAccountUseCase.create(addUserDTO);

    output.email = 'any_email@mail.com';
    await expect(createAccountUseCase.create(addUserDTO)).rejects.toThrow(
      new ConflictException(),
    );
  });
});
