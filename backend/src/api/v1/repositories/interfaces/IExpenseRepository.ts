import { Expense } from '@prisma/client';

export interface IExpenseRepository {
  /**
   * Creates a new expense.
   * @param expense - The expense data to create.
   * @returns The created expense.
   */
  createExpense(
    expense: Omit<Expense, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Expense>;

  /**
   * Retrieves an expense by its ID.
   * @param id - The ID of the expense.
   * @returns The expense if found, otherwise null.
   */
  getExpenseById(id: number): Promise<Expense | null>;

  /**
   * Retrieves all expenses for a specific user.
   * @param userId - The ID of the user.
   * @returns A list of expenses for the user.
   */
  getExpensesByUserId(userId: number): Promise<Expense[]>;

  /**
   * Retrieves all expenses for a specific category.
   * @param categoryId - The ID of the category.
   * @returns A list of expenses for the category.
   */
  getExpensesByCategoryId(categoryId: number): Promise<Expense[]>;

  /**
   * Updates an expense.
   * @param id - The ID of the expense to update.
   * @param expense - The updated expense data.
   * @returns The updated expense.
   */
  updateExpense(id: number, expense: Partial<Expense>): Promise<Expense>;

  /**
   * Deletes an expense.
   * @param id - The ID of the expense to delete.
   * @returns The deleted expense.
   */
  deleteExpense(id: number): Promise<Expense>;
}
