// src/routes/transactionRoutes.ts
import express from 'express';
import { TransactionController } from '../controllers/TransactionController';
import { TransactionService } from '../services/TransactionService';
import { TransactionRepository } from '../repositories/TransactionRepository';
import { authenticateToken } from '../middleware/auth.middleware';

const router = express.Router();
const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const transactionController = new TransactionController(transactionService);

// Create a new transaction
router.post('/transactions', authenticateToken, (req, res) =>
  transactionController.createTransaction(req, res)
);

// Get transactions by account ID
router.get('/transactions/account/:accountId', authenticateToken, (req, res) =>
  transactionController.getTransactionsByAccountId(req, res)
);

export default router;
