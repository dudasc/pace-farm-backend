import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserModel } from 'src/modules/users/models/user.model';
import { LoginDto } from '../dtos/login.dto';
import { LoginService } from '../services/login/login.service';

@Resolver('Auth')
export class AuthResolver {
  public constructor(private readonly loginService: LoginService) { }

  @Mutation(() => UserModel)
  async login(
    @Args('loginDto') login: LoginDto
  ) {
    return this.loginService.execute(login);
  }
}
