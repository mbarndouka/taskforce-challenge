import { Account } from '@prisma/client';

export interface IAccountRepository {
  createAccount(
    account: Omit<Account, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Account>;
  getAccountById(id: number): Promise<Account | null>;
  getAccountsByUserId(userId: number): Promise<Account[]>;
  updateAccount(id: number, account: Partial<Account>): Promise<Account>;
  deleteAccount(id: number): Promise<Account>;
}
