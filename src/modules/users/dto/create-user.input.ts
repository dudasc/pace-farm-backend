import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  public name: string;

  @Field()
  public email: string;

  @Field()
  public password: string;
}
