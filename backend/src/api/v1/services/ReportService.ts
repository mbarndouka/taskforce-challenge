// src/services/ReportService.ts
import { ITransactionRepository } from '../repositories/interfaces/ITransactionRepository';
import { Transaction } from '@prisma/client';

export class ReportService {
  private transactionRepository: ITransactionRepository;

  constructor(transactionRepository: ITransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async generateReport(
    accountId: number,
    startDate: Date,
    endDate: Date
  ): Promise<Transaction[]> {
    return this.transactionRepository.getTransactionsByAccountIdAndDateRange(
      accountId,
      startDate,
      endDate
    );
  }
}
