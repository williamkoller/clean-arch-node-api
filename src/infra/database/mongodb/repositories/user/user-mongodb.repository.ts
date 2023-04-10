import { UserRepositoryInterface } from '@app/data/protocols/db/user/user.repository.interface';
import { AddUserDTO } from '@app/presentation/dtos/user/add-user/add-user.dto';
import { UpdateUserDTO } from '@app/presentation/dtos/user/update-user/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, UserModel } from '../../models/user/user.model';

export class UserMongodbRepository implements UserRepositoryInterface {
  constructor(
    @InjectModel(UserModel.name)
    private readonly mongoHelper: Model<UserDocument>,
  ) {}

  async create(data: AddUserDTO): Promise<UserModel> {
    const userCreated = await this.mongoHelper.create(data);
    return await userCreated.save();
  }

  async findByEmail(email: string): Promise<UserModel> {
    return await this.mongoHelper.findOne({ email: { $eq: email } });
  }

  async findById(id: string): Promise<UserModel> {
    return await this.mongoHelper.findOne({ _id: { $eq: id } });
  }

  async findAll(): Promise<UserModel[]> {
    return await this.mongoHelper.find();
  }

  async update(id: string, dataUpdate: UpdateUserDTO): Promise<UserModel> {
    return await this.mongoHelper.findByIdAndUpdate({
      _id: { $eq: id },
      $set: { ...dataUpdate },
    });
  }

  async remove(id: string): Promise<void> {
    await this.mongoHelper.deleteOne({ _id: { $eq: id } });
  }
}
