import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { UsersService } from './services/users.service';

@Module({
  providers: [UsersService, UserResolver],
  exports: [UsersService]
})
export class UsersModule { }
