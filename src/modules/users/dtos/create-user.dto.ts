import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType()
export class CreateUserDto {
  @Field()
  public name: string;

  @Field()
  public email: string;

  @Field()
  public password: string;
}