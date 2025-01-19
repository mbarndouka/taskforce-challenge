import { Transaction } from '@prisma/client';
import { ITransactionRepository } from '../repositories/interfaces/ITransactionRepository';

export class TransactionService {
  private transactionRepository: ITransactionRepository;

  constructor(transactionRepository: ITransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  async createTransaction(transaction: Transaction): Promise<Transaction> {
    return this.transactionRepository.createTransaction(transaction);
  }

  async getTransactionsByAccountId(accountId: number): Promise<Transaction[]> {
    return this.transactionRepository.getTransactionsByAccountId(accountId);
  }
}
