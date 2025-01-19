// src/controllers/CategoryController.ts
import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';
import { Category } from '@prisma/client';

export class CategoryController {
  private categoryService: CategoryService;

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
  }

  async createCategory(req: Request, res: Response): Promise<void> {
    const category: Category = req.body;
    const createdCategory = await this.categoryService.createCategory(category);
    res.status(201).json(createdCategory);
  }

  async getCategoryById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const category = await this.categoryService.getCategoryById(id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  }
}
