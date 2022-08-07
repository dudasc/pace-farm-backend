import { Module } from '@nestjs/common';
import { ForgotPasswordService } from './services/forgot-password/forgot-password.service';
import { AuthResolver } from './resolvers/auth.resolver';
import { LoginService } from './services/login/login.service';
import { ValidateUserService } from './services/validate-user/validate-user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
      secret: process.env.JWT_SECRET,
    }),

  ],
  providers: [
    LoginService,
    AuthResolver,
    ForgotPasswordService,
    ForgotPasswordService,
    ValidateUserService,
    LocalStrategy,
    JwtStrategy
  ]
})
export class AuthModule { }
