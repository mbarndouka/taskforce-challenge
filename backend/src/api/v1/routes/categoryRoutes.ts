// src/routes/categoryRoutes.ts
import express from 'express';
import { CategoryController } from '../controllers/CategoryController';
import { CategoryService } from '../services/CategoryService';
import { CategoryRepository } from '../repositories/CategoryRepository';

const router = express.Router();
const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

// Create a new category
router.post('/categories', (req, res) =>
  categoryController.createCategory(req, res)
);

// Get a category by ID
router.get('/categories/:id', (req, res) =>
  categoryController.getCategoryById(req, res)
);

export default router;
