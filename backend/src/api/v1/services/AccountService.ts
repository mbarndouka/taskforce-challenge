import { IAccountRepository } from '../repositories/interfaces/IAccountRepository';
import { Account } from '@prisma/client';

export class AccountService {
  private accountRepository: IAccountRepository;

  constructor(accountRepository: IAccountRepository) {
    this.accountRepository = accountRepository;
  }

  async createAccount(
    account: Omit<Account, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Account> {
    return this.accountRepository.createAccount(account);
  }

  async getAccountById(id: number): Promise<Account | null> {
    return this.accountRepository.getAccountById(id);
  }

  async getAccountsByUserId(userId: number): Promise<Account[]> {
    return this.accountRepository.getAccountsByUserId(userId);
  }

  async updateAccount(id: number, account: Partial<Account>): Promise<Account> {
    return this.accountRepository.updateAccount(id, account);
  }

  async deleteAccount(id: number): Promise<Account> {
    return this.accountRepository.deleteAccount(id);
  }
}
