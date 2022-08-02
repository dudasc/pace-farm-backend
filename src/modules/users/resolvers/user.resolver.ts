import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Resolver('User')
export class UserResolver {
  public constructor(
    private usersService: UsersService
  ) { }

  @Query(() => String)
  async helloWorld(@Args('id') id: string): Promise<any> {
    return 'Hello world' + id;
  }

  @Query(() => [UserModel])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => UserModel)
  async user(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('data') user: CreateUserDto
  ): Promise<UserModel> {
    return await this.usersService.create(user);
  }

  @Mutation(() => UserModel)
  async updateUser(
    @Args('data') user: UpdateUserDto
  ): Promise<UserModel> {
    return await this.usersService.update(user);
  }

  @Mutation(() => UserModel)
  async deleteUser(
    @Args('id') id: number
  ): Promise<UserModel> {
    return await this.usersService.delete(id);
  }
}
