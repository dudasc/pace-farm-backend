import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  public id?: number;

  @Field()
  public name: string;

  @Field()
  public email: string;

  @Field()
  public password: string;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;

  @Field()
  public deletedAt: Date;
}