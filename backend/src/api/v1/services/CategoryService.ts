import { ICategoryRepository } from '../repositories/interfaces/ICategoryRepository';
import { Category } from '@prisma/client';

export class CategoryService {
  private categoryRepository: ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async createCategory(category: Category): Promise<Category> {
    return this.categoryRepository.createCategory(category);
  }

  async getCategoryById(id: number): Promise<Category | null> {
    return this.categoryRepository.getCategoryById(id);
  }
}
