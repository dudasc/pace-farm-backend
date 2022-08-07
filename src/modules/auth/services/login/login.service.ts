import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    private readonly jwtService: JwtService) { }

  public async execute(user: any): Promise<any> {
    const payload = { username: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user
    };
  }
}
