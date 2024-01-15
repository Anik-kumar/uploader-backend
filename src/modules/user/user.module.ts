import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {UserRepository} from "./user.repository";
import {CassandraModule} from "../../common/cassandra/cassandra.module";

@Module({
  imports: [CassandraModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository]
})
export class UserModule {}
