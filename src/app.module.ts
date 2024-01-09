import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './modules/registration/registration.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';

@Module({
  imports: [RegistrationModule, AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
