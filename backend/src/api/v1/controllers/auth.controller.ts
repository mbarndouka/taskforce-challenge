import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

class AuthController {
  private authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const token = await this.authService.register(name, email, password);
    res.status(201).json({ token });
  }
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const token = await this.authService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ error: error });
    }
  }
}

export default AuthController;
