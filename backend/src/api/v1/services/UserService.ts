import { IUserRepository } from '../repositories/interfaces/IUserRepository';
import bcrypt from 'bcrypt';
import { User } from '@prisma/client';

export class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return this.userRepository.createUser({
      name: user.name,
      id: user.id,
      email: user.email,
      password: hashedPassword,
      twoFactorSecret: user.twoFactorSecret,
      isTwoFactorEnabled: user.isTwoFactorEnabled,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findUserById(id);
  }
}
