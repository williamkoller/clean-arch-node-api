import { EnvironmentConfigModule } from '@app/infra/config/environment-config/environment-config.module';
import { EnvironmentConfigService } from '@app/infra/config/environment-config/environment-config.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './models/user/user.model';
import { UserMongodbRepository } from './repositories/user/user-mongodb.repository';

export const getMongoDBModule = (config: EnvironmentConfigService) => ({
  uri: config.getDatabaseUri(),
});

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getMongoDBModule,
    }),
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UserMongodbRepository],
  exports: [UserMongodbRepository],
})
export class MongoDBModule {}
