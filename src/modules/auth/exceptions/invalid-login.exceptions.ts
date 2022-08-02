import { ForbiddenException } from '@nestjs/common';

class InvalidLoginException extends ForbiddenException {
  public constructor() {
    super('Incorrect e-mail or password');
  }
}

export default InvalidLoginException;