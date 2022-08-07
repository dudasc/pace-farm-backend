import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponseDto } from '../dtos/login-response';
import { LoginInput } from '../dtos/login.input';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { ForgotPasswordService } from '../services/forgot-password/forgot-password.service';
import { LoginService } from '../services/login/login.service';

@Resolver('Auth')
export class AuthResolver {
  public constructor(
    private readonly loginService: LoginService,
    private readonly forgotPasswordService: ForgotPasswordService
  ) { }

  @Mutation(() => LoginResponseDto)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() context
  ) {
    return this.loginService.execute(context.user);
  }

  @Mutation(() => String)
  async forgotPassword(
    @Args('email') email: string
  ) {
    return this.forgotPasswordService.execute(email);
  }
}
