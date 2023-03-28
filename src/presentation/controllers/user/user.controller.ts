import {
  AddUserUseCase,
  UserOutput,
} from '@app/main/factories/usecases/user/add-user/add-user.usecase';
import { AddUserDTO } from '@app/presentation/dtos/user/add-user/add-user.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly addUserUseCase: AddUserUseCase) {}

  @Post()
  async create(@Body() data: AddUserDTO): Promise<UserOutput> {
    return await this.addUserUseCase.create(data);
  }
}
