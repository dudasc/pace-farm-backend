import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/modules/users/entities/user.entity';

@ObjectType()
export class LoginResponseDto {
  @Field()
  public access_token: string;

  @Field(() => UserEntity)
  public user: UserEntity;
}