import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services/users.service';

@Injectable()
export class ForgotPasswordService {
  constructor(private readonly usersService: UsersService) { }

  public async execute(email: string): Promise<string> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return 'Forgot password';
  }
}
