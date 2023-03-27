import { UserRepositoryInterface } from '@app/data/protocols/db/user/user.repository.interface';
import { User } from '@app/domain/entities/user/user.entity';
import { AddUserDTO } from '@app/presentation/dtos/user/add-user/add-user.dto';
import { UserMapper } from '@app/presentation/mappers/user/user.mapper';
import { ConflictException } from '@nestjs/common';

export class AddUserUseCase {
  constructor(private readonly userRepo: UserRepositoryInterface) {}

  async create(data: AddUserDTO): Promise<UserOutput> {
    const userFound = await this.userRepo.findByEmail(data.email);

    if (userFound) {
      throw new ConflictException();
    }

    const user = User.create(data);

    const userCreated = await this.userRepo.create(user);

    return UserMapper.toUser(userCreated);
  }
}

export type UserOutput = {
  id: string;
  name: string;
  email: string;
  password: string;
};
