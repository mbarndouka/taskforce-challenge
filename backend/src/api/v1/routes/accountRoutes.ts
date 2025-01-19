import Router from 'express';
import { AccountController } from '../controllers/AccountController';
import { AccountService } from '../services/AccountService';
import { AccountRepository } from '../repositories/AccountRepository';

const router = Router();
const accountRepository = new AccountRepository();
const accountService = new AccountService(accountRepository);
const accountController = new AccountController(accountService);

router.post('/accounts', (req, res) =>
  accountController.createAccount(req, res)
);

router.get('/accounts/:id', (req, res) =>
  accountController.getAccountById(req, res)
);

router.get('/accounts/user/:userId', (req, res) =>
  accountController.getAccountsByUserId(req, res)
);

router.put('/accounts/:id', (req, res) =>
  accountController.updateAccount(req, res)
);

router.delete('/accounts/:id', (req, res) =>
  accountController.deleteAccount(req, res)
);

export default router;
