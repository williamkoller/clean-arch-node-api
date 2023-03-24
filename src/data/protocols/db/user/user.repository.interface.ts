import { BaseRepositoryInterface } from '../base/base.repository.interface';
import { User } from '@app/domain/entities/user/user.entity';

export interface UserRepositoryInterface extends BaseRepositoryInterface<User> {
  findByEmail(email: string): Promise<User>;
}
