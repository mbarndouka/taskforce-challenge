import express from 'express';
import { BudgetController } from '../controllers/BudgetController';
import { authenticateToken } from '../middleware/auth.middleware';

const router = express.Router();

const budgetController = new BudgetController();

// Create a new budget
router.post('/budgets', authenticateToken, (req, res) =>
  budgetController.createBudget(req, res)
);

// Get a budget by user ID
router.get('/budgets/user/:userId', authenticateToken, (req, res) =>
  budgetController.getBudgetByUserId(req, res)
);

export default router;
