import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ValidateUserService } from '../services/validate-user/validate-user.service';
import { UserEntity } from 'src/modules/users/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validateUserService: ValidateUserService) {
    super({
      usernameField: 'email'
    });
  }

  async validate(username: string, password: string): Promise<UserEntity> {
    const user = await this.validateUserService.execute(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
