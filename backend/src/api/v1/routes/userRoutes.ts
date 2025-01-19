import Router from 'express';
import { UserController } from '../controllers/UserController';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Create a new user
router.post('/register', (req, res) => userController.createUser(req, res));

// Get a user by ID
router.get('/users/:id', authenticateToken, (req, res) =>
  userController.getUserById(req, res)
);

export default router;
