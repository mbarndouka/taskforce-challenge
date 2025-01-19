import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import prisma from '../utils/connectdb';
import { IUserRepository } from '../repositories/interfaces/IUserRepository';
import logger from '../utils/logger';

class AuthService {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }
  async register(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }

  async login(email: string, password: string): Promise<string> {
    try {
      // Find the user by email
      const user = await this.userRepository.findByEmail(email);
      if (!user) {
        logger.error(`User not found for email: ${email}`);
        throw new Error('User not found');
      }

      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
        expiresIn: '1h',
      });

      return token;
    } catch (error) {
      throw new Error(`Login failed: ${error}`);
    }
  }
}

export default AuthService;
