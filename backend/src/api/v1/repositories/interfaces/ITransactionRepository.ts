import { Transaction } from '@prisma/client';

export interface ITransactionRepository {
  /**
   * Creates a new transaction.
   * @param transaction - The transaction data to create.
   * @returns The created transaction.
   */
  createTransaction(
    transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Transaction>;

  /**
   * Retrieves a transaction by its ID.
   * @param id - The ID of the transaction.
   * @returns The transaction if found, otherwise null.
   */
  getTransactionById(id: number): Promise<Transaction | null>;

  /**
   * Retrieves all transactions for a specific account.
   * @param accountId - The ID of the account.
   * @returns A list of transactions for the account.
   */
  getTransactionsByAccountId(accountId: number): Promise<Transaction[]>;

  /**
   * Retrieves transactions for a specific account within a date range.
   * @param accountId - The ID of the account.
   * @param startDate - The start date of the range.
   * @param endDate - The end date of the range.
   * @returns A list of transactions within the date range.
   */
  getTransactionsByAccountIdAndDateRange(
    accountId: number,
    startDate: Date,
    endDate: Date
  ): Promise<Transaction[]>;

  /**
   * Updates a transaction.
   * @param id - The ID of the transaction to update.
   * @param transaction - The updated transaction data.
   * @returns The updated transaction.
   */
  updateTransaction(
    id: number,
    transaction: Partial<Transaction>
  ): Promise<Transaction>;

  /**
   * Deletes a transaction.
   * @param id - The ID of the transaction to delete.
   * @returns The deleted transaction.
   */
  deleteTransaction(id: number): Promise<Transaction>;
}
