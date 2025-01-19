import Router from 'express';
import { AccountController } from '../controllers/AccountController';
import { AccountService } from '../services/AccountService';
import { AccountRepository } from '../repositories/AccountRepository';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();
const accountRepository = new AccountRepository();
const accountService = new AccountService(accountRepository);
const accountController = new AccountController(accountService);

router.post('/accounts', authenticateToken, (req, res) =>
  accountController.createAccount(req, res)
);

router.get('/accounts/:id', authenticateToken, (req, res) =>
  accountController.getAccountById(req, res)
);

router.get('/accounts/user/:userId', authenticateToken, (req, res) =>
  accountController.getAccountsByUserId(req, res)
);

router.put('/accounts/:id', authenticateToken, (req, res) =>
  accountController.updateAccount(req, res)
);

router.delete('/accounts/:id', authenticateToken, (req, res) =>
  accountController.deleteAccount(req, res)
);

export default router;
