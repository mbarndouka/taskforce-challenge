import { Router } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import AuthService from '../services/auth.service';
import AuthController from '../controllers/auth.controller';

const router = Router();

// Create instances of dependencies
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService); // Create an instance of AuthController

router.post('/login', (req, res) => authController.login(req, res));
router.post('/register', (req, res) => authController.register(req, res));
export default router;
