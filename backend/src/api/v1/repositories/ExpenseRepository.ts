import { PrismaClient, Expense } from '@prisma/client';
import { IExpenseRepository } from './interfaces/IExpenseRepository';

export class ExpenseRepository implements IExpenseRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createExpense(expense: Expense): Promise<Expense> {
    return this.prisma.expense.create({ data: expense });
  }

  async getExpensesByUserId(userId: number): Promise<Expense[]> {
    return this.prisma.expense.findMany({ where: { userId } });
  }

  async getExpenseById(expenseId: number): Promise<Expense | null> {
    return this.prisma.expense.findUnique({ where: { id: expenseId } });
  }

  async getExpensesByCategoryId(categoryId: number): Promise<Expense[]> {
    return this.prisma.expense.findMany({ where: { categoryId } });
  }

  async updateExpense(
    expenseId: number,
    expense: Partial<Expense>
  ): Promise<Expense> {
    return this.prisma.expense.update({
      where: { id: expenseId },
      data: expense,
    });
  }

  async deleteExpense(expenseId: number): Promise<Expense> {
    return this.prisma.expense.delete({ where: { id: expenseId } });
  }
}
