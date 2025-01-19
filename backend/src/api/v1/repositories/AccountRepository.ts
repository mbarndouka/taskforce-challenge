// src/repositories/AccountRepository.ts
import { PrismaClient, Account } from '@prisma/client';
import { IAccountRepository } from './interfaces/IAccountRepository';

export class AccountRepository implements IAccountRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createAccount(
    account: Omit<Account, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Account> {
    return this.prisma.account.create({ data: account });
  }

  async getAccountById(id: number): Promise<Account | null> {
    return this.prisma.account.findUnique({ where: { id } });
  }

  async getAccountsByUserId(userId: number): Promise<Account[]> {
    return this.prisma.account.findMany({ where: { userId } });
  }

  async updateAccount(id: number, account: Partial<Account>): Promise<Account> {
    return this.prisma.account.update({ where: { id }, data: account });
  }

  async deleteAccount(id: number): Promise<Account> {
    return this.prisma.account.delete({ where: { id } });
  }
}
