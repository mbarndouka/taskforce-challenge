import { User } from '@prisma/client';

export interface IUserRepository {
  createUser(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findUserById(id: number): Promise<User | null>;
  updateUser(userId: number, updateData: Partial<User>): Promise<void>;
}
