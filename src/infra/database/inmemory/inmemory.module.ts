import { Module } from '@nestjs/common';
import { UserDatabaseInMemoryRepository } from './repositories/user/user.databaseinmemory.repository';

@Module({
  imports: [UserDatabaseInMemoryRepository],
  providers: [UserDatabaseInMemoryRepository],
  exports: [UserDatabaseInMemoryRepository],
})
export class InMemoryModule {}
