// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { User } from '@prisma/client';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user: User = req.body;
    const createdUser = await this.userService.createUser(user);
    res.status(201).json(createdUser);
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const user = await this.userService.getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }
}
