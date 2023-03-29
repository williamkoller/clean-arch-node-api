import { User, UserProps } from '@app/domain/entities/user/user.entity';
import { BcryptAdapter } from '@app/infra/cryptography/bcrypt-adapter/bcrypt-adapter';
import { UserDatabaseInMemoryRepository } from '@app/infra/database/repositories/inmemory/user/user.databaseinmemory.repository';
import { AddUserDTO } from '@app/presentation/dtos/user/add-user/add-user.dto';
import { ConflictException } from '@nestjs/common';
import { AddUserUseCase } from './add-user.usecase';

describe('AddUserUseCase Test', () => {
  it('should be create a new user', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const bcryptAdapter = new BcryptAdapter();
    const createAccountUseCase = new AddUserUseCase(repository, bcryptAdapter);

    const userProps: UserProps = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'.toLowerCase(),
    };
    const user = User.create(userProps);

    const hash = await bcryptAdapter.hash('any_password');
    const addUserDTO: AddUserDTO = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: hash,
    };

    jest.spyOn(bcryptAdapter, 'hash').mockResolvedValue(hash);

    const output = await createAccountUseCase.create(addUserDTO);

    expect(repository.users).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.users[0].id,
      name: user.props.name,
      email: user.props.email,
      password: hash,
    });
  });

  fit('should be throw when usecase throw', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const bcryptAdapter = new BcryptAdapter();
    const createAccountUseCase = new AddUserUseCase(repository, bcryptAdapter);

    const hash = await bcryptAdapter.hash('any_password');

    const addUserDTO: AddUserDTO = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: hash,
    };

    jest
      .spyOn(bcryptAdapter, 'hash')
      .mockImplementation(() => Promise.resolve(hash));

    const output = await createAccountUseCase.create(addUserDTO);

    const outputConflict = createAccountUseCase.create(addUserDTO);

    expect(output).toStrictEqual({
      id: output.id,
      email: 'any_email@mail.com',
      name: 'any_name',
      password: hash,
    });

    jest.spyOn(repository, 'findByEmail');
    expect(repository.findByEmail).toHaveBeenCalledTimes(0);
    await expect(outputConflict).rejects.toThrowError(new ConflictException());
  });
});
