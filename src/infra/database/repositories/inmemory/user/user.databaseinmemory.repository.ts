import { UserRepositoryInterface } from '@app/data/protocols/db/user/user.repository.interface';
import { User } from '@app/domain/entities/user/user.entity';

export class UserDatabaseInMemoryRepository implements UserRepositoryInterface {
  users: User[] = [];

  async create(data: User): Promise<User> {
    this.users.push(data);
    return this.users.find((user) => user.id === data.id);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async update(id: string, dataUpdate: User): Promise<User> {
    this.users = this.users.filter((user) => user.id !== id);
    this.users.push(dataUpdate);
    return this.users.find((user) => user.id === id);
  }

  async remove(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
