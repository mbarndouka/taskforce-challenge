import { Request, Response } from 'express';
import { AccountService } from '../services/AccountService';

export class AccountController {
  private accountService: AccountService;

  constructor(accountService: AccountService) {
    this.accountService = accountService;
  }

  async createAccount(req: Request, res: Response): Promise<void> {
    const accountData = req.body;
    try {
      const account = await this.accountService.createAccount(accountData);
      res.status(201).json(account);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async getAccountById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    try {
      const account = await this.accountService.getAccountById(id);
      if (account) {
        res.status(200).json(account);
      } else {
        res.status(404).json({ message: 'Account not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async getAccountsByUserId(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.userId, 10);
    try {
      const accounts = await this.accountService.getAccountsByUserId(userId);
      res.status(200).json(accounts);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async updateAccount(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const accountData = req.body;
    try {
      const account = await this.accountService.updateAccount(id, accountData);
      res.status(200).json(account);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async deleteAccount(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    try {
      const account = await this.accountService.deleteAccount(id);
      res.status(200).json(account);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}
