import { IUserRepository } from './interfaces/IUserRepository';
import { PrismaClient, User, Prisma } from '@prisma/client';

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async updateUser(userId: number, updateData: Partial<User>): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: updateData,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findUserById(userId: number): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
