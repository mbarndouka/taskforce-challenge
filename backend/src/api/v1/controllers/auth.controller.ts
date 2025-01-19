import { Request, Response } from 'express';
import authService from '../services/auth.service';

class AuthController {
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const token = await authService.register(name, email, password);
    res.status(201).json({ token });
  }
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await authService.login(email, password);
    if (!user) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }
  }
}

export default new AuthController();
