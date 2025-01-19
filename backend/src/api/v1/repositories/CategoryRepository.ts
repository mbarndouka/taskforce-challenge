import { PrismaClient, Category } from '@prisma/client';
import { ICategoryRepository } from './interfaces/ICategoryRepository';

export class CategoryRepository implements ICategoryRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createCategory(category: Category): Promise<Category> {
    return this.prisma.category.create({ data: category });
  }

  async getCategoryById(id: number): Promise<Category | null> {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async getAllCategories(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async getSubcategoriesByParentId(parentId: number): Promise<Category[]> {
    return this.prisma.category.findMany({ where: { parentId } });
  }

  async updateCategory(
    id: number,
    category: Partial<Category>
  ): Promise<Category> {
    return this.prisma.category.update({ where: { id }, data: category });
  }

  async deleteCategory(id: number): Promise<Category> {
    return this.prisma.category.delete({ where: { id } });
  }
}
