import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';

@Resolver('App')
export class AppResolver {
  @UseGuards(JwtAuthGuard)
  @Query(() => String)
  async helloWorld(): Promise<any> {
    return 'Hello world';
  }
}
