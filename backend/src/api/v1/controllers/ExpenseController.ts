import { Request, Response } from 'express';
import { ExpenseService } from '../services/ExpenseService';
import { Expense } from '@prisma/client';

export class ExpenseController {
  private expenseService: ExpenseService;

  constructor(expenseService: ExpenseService) {
    this.expenseService = expenseService;
  }

  async createExpense(req: Request, res: Response): Promise<void> {
    const expense: Expense = req.body;
    const createdExpense = await this.expenseService.createExpense(expense);
    res.status(201).json(createdExpense);
  }

  async getExpensesByUserId(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.userId, 10);
    const expenses = await this.expenseService.getExpensesByUserId(userId);
    res.status(200).json(expenses);
  }
}
