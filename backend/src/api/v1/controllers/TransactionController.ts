// src/controllers/TransactionController.ts
import { Request, Response } from 'express';
import { TransactionService } from '../services/TransactionService';
import { Transaction } from '@prisma/client';

export class TransactionController {
  private transactionService: TransactionService;

  constructor(transactionService: TransactionService) {
    this.transactionService = transactionService;
  }

  async createTransaction(req: Request, res: Response): Promise<void> {
    const transaction: Transaction = req.body;
    const createdTransaction =
      await this.transactionService.createTransaction(transaction);
    res.status(201).json(createdTransaction);
  }

  async getTransactionsByAccountId(req: Request, res: Response): Promise<void> {
    const accountId = parseInt(req.params.accountId, 10);
    const transactions =
      await this.transactionService.getTransactionsByAccountId(accountId);
    res.status(200).json(transactions);
  }
}
