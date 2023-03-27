import { User } from '@app/domain/entities/user/user.entity';
import { UserOutput } from '@app/main/factories/usecases/user/add-user/add-user.usecase';

export abstract class UserMapper {
  static toUser(user: User): UserOutput {
    return {
      id: user.id,
      name: user.name,
      email: user.email.toLowerCase(),
      password: user.password,
    };
  }
}
