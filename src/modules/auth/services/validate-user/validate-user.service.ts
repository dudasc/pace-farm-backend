import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services/users.service';
import hashComparePassword from 'src/shared/utils/hash-compare-password';

@Injectable()
export class ValidateUserService {
  constructor(private readonly userService: UsersService) { }

  public async execute(username: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(username);

    const validPassword = await hashComparePassword(
      password,
      user.password,
    );

    if (validPassword) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }
}
