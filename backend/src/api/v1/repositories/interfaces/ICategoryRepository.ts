import { Category } from '@prisma/client';

export interface ICategoryRepository {
  /**
   * Creates a new category.
   * @param category - The category data to create.
   * @returns The created category.
   */
  createCategory(
    category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Category>;

  /**
   * Retrieves a category by its ID.
   * @param id - The ID of the category.
   * @returns The category if found, otherwise null.
   */
  getCategoryById(id: number): Promise<Category | null>;

  /**
   * Retrieves all categories.
   * @returns A list of all categories.
   */
  getAllCategories(): Promise<Category[]>;

  /**
   * Retrieves all subcategories for a specific parent category.
   * @param parentId - The ID of the parent category.
   * @returns A list of subcategories.
   */
  getSubcategoriesByParentId(parentId: number): Promise<Category[]>;

  /**
   * Updates a category.
   * @param id - The ID of the category to update.
   * @param category - The updated category data.
   * @returns The updated category.
   */
  updateCategory(id: number, category: Partial<Category>): Promise<Category>;

  /**
   * Deletes a category.
   * @param id - The ID of the category to delete.
   * @returns The deleted category.
   */
  deleteCategory(id: number): Promise<Category>;
}
