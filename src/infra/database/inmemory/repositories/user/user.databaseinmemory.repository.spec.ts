import { User, UserProps } from '@app/domain/entities/user/user.entity';
import { UserDatabaseInMemoryRepository } from './user.databaseinmemory.repository';

describe('UserDatabaseInMemoryRepository', () => {
  it('should be create() a new user', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const userProps: UserProps = {
      name: 'any_name',
      email: 'any@mail.com',
      password: 'any_pass',
    };
    const user = User.create(userProps);
    await repository.create(user);
    expect(repository.users).toHaveLength(1);
    expect(repository.users).toStrictEqual([user]);
  });

  it('should be findAll() users', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const userProps: UserProps = {
      name: 'any_name',
      email: 'any@mail.com',
      password: 'any_pass',
    };
    const user = User.create(userProps);
    await repository.create(user);
    await repository.findAll();
    expect(repository.users).toHaveLength(1);
    expect(repository.users).toStrictEqual([user]);
  });

  it('should be findById() user', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const userProps: UserProps = {
      name: 'any_name',
      email: 'any@mail.com',
      password: 'any_pass',
    };
    const user = User.create(userProps);
    await repository.create(user);
    await repository.findById(user.id);

    jest.spyOn(repository, 'create');
    jest.spyOn(repository, 'findById');

    expect(repository.users).toHaveLength(1);
    expect(repository.users).toStrictEqual([user]);
    expect(repository.create).toHaveBeenCalledTimes(0);
    expect(repository.findById).toHaveBeenCalledTimes(0);
  });

  it('should be findByEmail() user', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const userProps: UserProps = {
      name: 'any_name',
      email: 'any@mail.com',
      password: 'any_pass',
    };
    const user = User.create(userProps);
    await repository.create(user);
    await repository.findByEmail(user.email);

    jest.spyOn(repository, 'create');
    jest.spyOn(repository, 'findByEmail');

    expect(repository.users).toHaveLength(1);
    expect(repository.users).toStrictEqual([user]);
    expect(repository.create).toHaveBeenCalledTimes(0);
    expect(repository.findByEmail).toHaveBeenCalledTimes(0);
  });

  it('should be update() user', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const userProps: UserProps = {
      name: 'any_name',
      email: 'any@mail.com',
      password: 'any_pass',
    };
    const user = User.create(userProps);
    await repository.create(user);
    await repository.update(user.id, user);

    jest.spyOn(repository, 'create');
    jest.spyOn(repository, 'update');

    expect(repository.users).toHaveLength(1);
    expect(repository.users).toStrictEqual([user]);
    expect(repository.create).toHaveBeenCalledTimes(0);
    expect(repository.update).toHaveBeenCalledTimes(0);
  });

  it('should be remove() user', async () => {
    const repository = new UserDatabaseInMemoryRepository();
    const userProps: UserProps = {
      name: 'any_name',
      email: 'any@mail.com',
      password: 'any_pass',
    };
    const user = User.create(userProps);
    await repository.create(user);
    await repository.remove(user.id);

    jest.spyOn(repository, 'create');
    jest.spyOn(repository, 'remove');

    expect(repository.users).toHaveLength(0);
    expect(repository.users).toStrictEqual([]);
    expect(repository.create).toHaveBeenCalledTimes(0);
    expect(repository.remove).toHaveBeenCalledTimes(0);
  });
});
