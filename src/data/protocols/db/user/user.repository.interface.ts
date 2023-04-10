import { UserModel } from '@app/infra/database/mongodb/models/user/user.model';
import { AddUserDTO } from '@app/presentation/dtos/user/add-user/add-user.dto';
import { UpdateUserDTO } from '@app/presentation/dtos/user/update-user/update-user.dto';

export interface UserRepositoryInterface {
  create(data: AddUserDTO): Promise<UserModel>;
  findById(id: string): Promise<UserModel>;
  findAll(): Promise<UserModel[]>;
  update(id: string, dataUpdate: UpdateUserDTO): Promise<UserModel>;
  remove(id: string): Promise<void>;
  findByEmail(email: string): Promise<UserModel>;
}
