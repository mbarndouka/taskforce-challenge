// src/repositories/interfaces/IBudgetRepository.ts
import { Budget } from '@prisma/client';

export interface IBudgetRepository {
  /**
   * Creates a new budget.
   * @param budget - The budget data to create.
   * @returns The created budget.
   */
  createBudget(
    budget: Omit<Budget, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Budget>;

  /**
   * Retrieves a budget by its ID.
   * @param id - The ID of the budget.
   * @returns The budget if found, otherwise null.
   */
  getBudgetById(id: number): Promise<Budget | null>;

  /**
   * Retrieves a budget by user ID.
   * @param userId - The ID of the user.
   * @returns The budget if found, otherwise null.
   */
  getBudgetByUserId(userId: number): Promise<Budget | null>;

  /**
   * Updates a budget.
   * @param id - The ID of the budget to update.
   * @param budget - The updated budget data.
   * @returns The updated budget.
   */
  updateBudget(id: number, budget: Partial<Budget>): Promise<Budget>;

  /**
   * Deletes a budget.
   * @param id - The ID of the budget to delete.
   * @returns The deleted budget.
   */
  deleteBudget(id: number): Promise<Budget>;
}
