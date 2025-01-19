// src/routes/budgetRoutes.ts
import express from 'express';
import { BudgetController } from '../controllers/BudgetController';
// import { BudgetService } from '../services/BudgetService';
// import { BudgetRepository } from '../repositories/BudgetRepository';

const router = express.Router();
// const budgetRepository = new BudgetRepository();
// import { UserRepository } from '../repositories/UserRepository';
// import { ExpenseRepository } from '../repositories/ExpenseRepository';

// const userRepository = new UserRepository();
// const expenseRepository = new ExpenseRepository();
// const budgetService = new BudgetService(
//   budgetRepository,
//   userRepository,
//   expenseRepository
// );
const budgetController = new BudgetController();

// Create a new budget
router.post('/budgets', (req, res) => budgetController.createBudget(req, res));

// Get a budget by user ID
router.get('/budgets/user/:userId', (req, res) =>
  budgetController.getBudgetByUserId(req, res)
);

export default router;
