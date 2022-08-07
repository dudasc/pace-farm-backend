import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';
import hashPassword from 'src/shared/utils/hash-password';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {
  public constructor(private prismaService: PrismaService) { }

  async create(createUserInput: CreateUserInput) {
    createUserInput.password = await hashPassword(createUserInput.password)

    return await this.prismaService.user.create({ data: createUserInput });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: +id, deletedAt: null
      }
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(updateUserInput: UpdateUserInput) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: +updateUserInput.id,
        deletedAt: null
      }
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (updateUserInput.password) {
      updateUserInput.password = await hashPassword(updateUserInput.password)
    }

    console.log(updateUserInput.password);

    const where: any = {
      id: +updateUserInput.id
    };

    delete updateUserInput.id;

    return await this.prismaService.user.update({ where, data: updateUserInput });
  }

  async remove(id: number) {
    const user = await this.prismaService.user.delete({
      where: {
        id: +id
      }
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.prismaService.user.findFirst({
      where: { email, deletedAt: null }
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
