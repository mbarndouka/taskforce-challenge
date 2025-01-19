// src/repositories/BudgetRepository.ts
import { PrismaClient, Budget } from '@prisma/client';
import { IBudgetRepository } from './interfaces/IBudgetRepository';

export class BudgetRepository implements IBudgetRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createBudget(budget: Budget): Promise<Budget> {
    return this.prisma.budget.create({ data: budget });
  }

  async getBudgetByUserId(userId: number): Promise<Budget | null> {
    return this.prisma.budget.findFirst({ where: { userId } });
  }

  async getBudgetById(id: number): Promise<Budget | null> {
    return this.prisma.budget.findUnique({ where: { id } });
  }

  async updateBudget(id: number, budget: Partial<Budget>): Promise<Budget> {
    return this.prisma.budget.update({ where: { id }, data: budget });
  }

  async deleteBudget(id: number): Promise<Budget> {
    return this.prisma.budget.delete({ where: { id } });
  }
}
