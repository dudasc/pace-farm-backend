import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType()
export class UpdateUserDto {
  @Field(() => ID)
  public id: number;

  @Field()
  public name: string;

  @Field()
  public email: string;

  @Field()
  public password: string;
}