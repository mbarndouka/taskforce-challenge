import { Request, Response } from 'express';
import * as httpCode from '../utils/httpCode';
import * as Error from '../utils/errors';
import { AccountService } from '../services/AccountService';
import { ErrorHandler, HttpError, logger } from '../utils/error-handler';

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
      logger.error(error);
      ErrorHandler.handleError(error as Error, res);
    }
  }

  async getAccountById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    try {
      const account = await this.accountService.getAccountById(id);
      if (account) {
        res.status(200).json(account);
      } else {
        throw new HttpError(
          httpCode.NOT_FOUND,
          'Account not found',
          Error.accountNotFound
        );
      }
    } catch (error) {
      logger.error(error);
      ErrorHandler.handleError(error as Error, res);
    }
  }

  async getAccountsByUserId(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.userId, 10);
    try {
      const accounts = await this.accountService.getAccountsByUserId(userId);
      res.status(200).json(accounts);
    } catch (error) {
      throw new HttpError(
        httpCode.BAD_REQUEST,
        'User not found',
        Error.BadRequestError
      );
    }
  }

  async updateAccount(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const accountData = req.body;
    try {
      const account = await this.accountService.updateAccount(id, accountData);
      res.status(200).json(account);
    } catch (error) {
      throw new HttpError(
        httpCode.BAD_REQUEST,
        'Account not found',
        Error.BadRequestError
      );
    }
  }

  async deleteAccount(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    try {
      const account = await this.accountService.deleteAccount(id);
      res.status(200).json(account);
    } catch (error) {
      throw new HttpError(
        httpCode.NOT_FOUND,
        'Account not found',
        Error.accountNotFound
      );
    }
  }
}
