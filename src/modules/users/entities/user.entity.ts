import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
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
