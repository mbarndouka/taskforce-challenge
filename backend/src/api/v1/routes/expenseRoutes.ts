// src/routes/expenseRoutes.ts
import express from 'express';
import { ExpenseController } from '../controllers/ExpenseController';
import { ExpenseService } from '../services/ExpenseService';
import { ExpenseRepository } from '../repositories/ExpenseRepository';

const router = express.Router();
const expenseRepository = new ExpenseRepository();
const expenseService = new ExpenseService(expenseRepository);
const expenseController = new ExpenseController(expenseService);

// Create a new expense
router.post('/expenses', (req, res) =>
  expenseController.createExpense(req, res)
);

// Get expenses by user ID
router.get('/expenses/user/:userId', (req, res) =>
  expenseController.getExpensesByUserId(req, res)
);

export default router;
