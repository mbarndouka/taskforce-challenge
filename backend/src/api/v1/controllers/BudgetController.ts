// src/controllers/BudgetController.ts
import { Request, Response } from 'express';
import { BudgetService } from '../services/BudgetService';
import { UserRepository } from '../repositories/UserRepository';
import { BudgetRepository } from '../repositories/BudgetRepository';
import { ExpenseRepository } from '../repositories/ExpenseRepository';
import { Budget } from '@prisma/client';

export class BudgetController {
  private budgetService: BudgetService;

  constructor() {
    const userRepository = new UserRepository();
    const expenseRepository = new ExpenseRepository();
    const budgetRepository = new BudgetRepository();

    this.budgetService = new BudgetService(
      budgetRepository,
      userRepository,
      expenseRepository
    );
  }

  async createBudget(req: Request, res: Response): Promise<void> {
    const budget: Budget = req.body;
    const createdBudget = await this.budgetService.createBudget(budget);
    res.status(201).json(createdBudget);
  }

  async getBudgetByUserId(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.userId, 10);
    const budget = await this.budgetService.getBudgetByUserId(userId);
    if (budget) {
      res.status(200).json(budget);
    } else {
      res.status(404).json({ message: 'Budget not found' });
    }
  }
}
