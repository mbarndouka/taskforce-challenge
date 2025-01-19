// src/controllers/VisualizationController.ts
import { Request, Response } from 'express';
import { TransactionService } from '../services/TransactionService';

export class VisualizationController {
  private transactionService: TransactionService;

  constructor(transactionService: TransactionService) {
    this.transactionService = transactionService;
  }

  async getTransactionSummary(req: Request, res: Response): Promise<void> {
    const accountId = parseInt(req.params.accountId, 10);
    const transactions =
      await this.transactionService.getTransactionsByAccountId(accountId);

    // Process transactions to generate summary data
    const summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'Income') {
          acc.income += transaction.amount;
        } else {
          acc.expense += transaction.amount;
        }
        return acc;
      },
      { income: 0, expense: 0 }
    );

    res.status(200).json(summary);
  }
}
