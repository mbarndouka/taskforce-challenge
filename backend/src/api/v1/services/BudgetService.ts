// src/services/BudgetService.ts
import { IBudgetRepository } from '../repositories/interfaces/IBudgetRepository';
import { IUserRepository } from '../repositories/interfaces/IUserRepository';
import { IExpenseRepository } from '../repositories/interfaces/IExpenseRepository';
import { sendBudgetExceededNotification } from '../utils/resendClient';
import { Budget } from '@prisma/client';

export class BudgetService {
  private budgetRepository: IBudgetRepository;
  private userRepository: IUserRepository;
  private expenseRepository: IExpenseRepository;

  constructor(
    budgetRepository: IBudgetRepository,
    userRepository: IUserRepository,
    expenseRepository: IExpenseRepository
  ) {
    this.budgetRepository = budgetRepository;
    this.userRepository = userRepository;
    this.expenseRepository = expenseRepository;
  }

  async createBudget(budget: Budget): Promise<Budget> {
    return this.budgetRepository.createBudget(budget);
  }

  async getBudgetByUserId(userId: number): Promise<Budget | null> {
    return this.budgetRepository.getBudgetByUserId(userId);
  }

  async checkBudgetExceeded(userId: number): Promise<void> {
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const budget = await this.budgetRepository.getBudgetByUserId(userId);
    if (!budget) {
      throw new Error('Budget not found');
    }

    const expenses = await this.expenseRepository.getExpensesByUserId(userId);
    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

    if (totalExpenses > budget.amount) {
      // Send budget exceeded notification
      await sendBudgetExceededNotification(
        user.email,
        budget.amount,
        totalExpenses
      );
    }
  }
}
