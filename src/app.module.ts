import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './modules/registration/registration.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import {CoreModule} from "./modules/core/core.module";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {AuthenticationInterceptor} from "./common/interceptors/authentication.interceptor";


@Module({
  imports: [CoreModule, RegistrationModule, AuthenticationModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: AuthenticationInterceptor,
  },],
})
export class AppModule {}
