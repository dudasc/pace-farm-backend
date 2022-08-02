import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/services/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import hashPassword from 'src/shared/utils/hash-password';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {
  public constructor(private prismaService: PrismaService) { }

  async findAll(): Promise<any[]> {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number): Promise<UserModel> {
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

  async create(data: CreateUserDto): Promise<UserModel> {
    data.password = await hashPassword(data.password)

    return await this.prismaService.user.create({ data });
  }

  async update(data: UpdateUserDto): Promise<UserModel> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: +data.id,
        deletedAt: null
      }
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (data.password) {
      data.password = await hashPassword(data.password)
    }

    console.log(data.password);

    const where: any = {
      id: +data.id
    };

    delete data.id;

    return await this.prismaService.user.update({ where, data });
  }

  async delete(id: number): Promise<UserModel> {
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

  async findByEmail(email: string): Promise<UserModel> {
    const user = await this.prismaService.user.findFirst({
      where: { email, deletedAt: null }
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
