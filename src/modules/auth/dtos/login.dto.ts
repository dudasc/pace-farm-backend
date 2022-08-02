import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType()
export class LoginDto {
  @Field()
  public email: string;

  @Field()
  public password: string;
}