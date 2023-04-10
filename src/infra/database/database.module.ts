import { Module } from '@nestjs/common';
import { InMemoryModule } from './inmemory/inmemory.module';
import { MongoDBModule } from './mongodb/mongodb.module';

@Module({
  imports: [InMemoryModule, MongoDBModule],
  exports: [InMemoryModule, MongoDBModule],
})
export class DatabaseModule {}
