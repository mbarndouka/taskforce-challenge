import { PrismaClient, Transaction } from '@prisma/client';
import { ITransactionRepository } from './interfaces/ITransactionRepository';

export class TransactionRepository implements ITransactionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createTransaction(transaction: Transaction): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: transaction,
    });
  }

  async getTransactionById(id: number): Promise<Transaction | null> {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  async getTransactionsByAccountId(accountId: number): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      where: { accountId },
    });
  }

  async getTransactionsByAccountIdAndDateRange(
    accountId: number,
    startDate: Date,
    endDate: Date
  ): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      where: {
        accountId,
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
  }

  async updateTransaction(
    id: number,
    transaction: Partial<Transaction>
  ): Promise<Transaction> {
    return this.prisma.transaction.update({
      where: { id },
      data: transaction,
    });
  }

  async deleteTransaction(id: number): Promise<Transaction> {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
