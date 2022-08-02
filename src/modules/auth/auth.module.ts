import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './resolvers/auth.resolver';
import { LoginService } from './services/login/login.service';

@Module({
  imports: [UsersModule],
  providers: [LoginService, AuthResolver]
})
export class AuthModule { }
