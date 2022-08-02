import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/modules/users/models/user.model';
import { UsersService } from 'src/modules/users/services/users.service';
import hashComparePassword from 'src/shared/utils/hash-compare-password';
import { LoginDto } from '../../dtos/login.dto';
import InvalidLoginException from '../../exceptions/invalid-login.exceptions';

@Injectable()
export class LoginService {
  constructor(private readonly usersService: UsersService) { }

  async execute(loginDto: LoginDto): Promise<UserModel> {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) {
      throw new InvalidLoginException();
    }

    const validPassword = await hashComparePassword(
      loginDto.password,
      user.password,
    );

    if (validPassword) {
      return user;
    }

    throw new InvalidLoginException();
  }
}
