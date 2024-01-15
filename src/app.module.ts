import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { CoreModule } from "./modules/core/core.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AuthenticationInterceptor } from "./common/interceptors/authentication.interceptor";
import { CassandraModule } from "./common/cassandra/cassandra.module";
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CoreModule, CassandraModule, AuthenticationModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthenticationInterceptor,
    },
  ],
})
export class AppModule {}
