import { IExpenseRepository } from '../repositories/interfaces/IExpenseRepository';
import { Expense } from '@prisma/client';

export class ExpenseService {
  private expenseRepository: IExpenseRepository;

  constructor(expenseRepository: IExpenseRepository) {
    this.expenseRepository = expenseRepository;
  }

  async createExpense(expense: Expense): Promise<Expense> {
    return this.expenseRepository.createExpense(expense);
  }

  async getExpensesByUserId(userId: number): Promise<Expense[]> {
    return this.expenseRepository.getExpensesByUserId(userId);
  }
}
