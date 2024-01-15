import { Injectable, OnModuleInit } from "@nestjs/common";
import { mapping } from "cassandra-driver";
import { User } from "./users.model";
import { CassandraService } from "src/common/cassandra/cassandra.service";
import { NewUser } from "./dto/newUser.dto";

@Injectable()
export class UserRepository implements OnModuleInit {
  constructor(private cassandraService: CassandraService) {}

  userMapper: mapping.ModelMapper<User>;

  onModuleInit() {
    const mappingOptions: mapping.MappingOptions = {
      models: {
        User: {
          tables: ["users"],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };

    this.userMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel("User");
  }

  // async getEmployees() {
  //     return (await this.userMapper.findAll()).toArray();
  // }

  async getEmployeeByEmail(email: string) {
    return (await this.userMapper.find({ email: email })).toArray();
  }

  async createUser(user: NewUser) {
    return this.userMapper.insert(user)
    // return (await this.userMapper.insert(user)).toArray();
  }
}
