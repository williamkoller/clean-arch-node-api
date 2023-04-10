import { UserModel } from '@app/infra/database/mongodb/models/user/user.model';
import { UserOutput } from '@app/main/factories/usecases/user/add-user/add-user.usecase';

export abstract class UserMapper {
  public static toUser(model: UserModel): UserOutput {
    return {
      id: model._id,
      name: model.name,
      email: model.email,
      password: model.password,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    };
  }
}
