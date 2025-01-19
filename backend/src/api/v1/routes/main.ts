import { Router } from 'express';
import swaggerRoute from '../utils/swagger';
import logger from '../utils/logger';
import userRoutes from './userRoutes';
import budgetRoutes from './budgetRoutes';
import expenseRoutes from './expenseRoutes';
import categoryRoutes from './categoryRoutes';
import transactionRoutes from './transactionRoutes';
import welcomeController from '../controllers/welcome.controller';
import authRoutes from './auth.routes';
import accountRoutes from './accountRoutes';

const apiV1 = Router();

apiV1.get('/', (req, res) => {
  logger.info(`${req.url} redirecting to /api-docs`);
  res.redirect('/api/v1/api-docs');
});

apiV1.get('/welcome', welcomeController);
apiV1.use('/auth', authRoutes);
apiV1.use('/user', userRoutes);
apiV1.use('/budget', budgetRoutes);
apiV1.use('/account', accountRoutes);
apiV1.use('/expense', expenseRoutes);
apiV1.use('/category', categoryRoutes);
apiV1.use('/transaction', transactionRoutes);

apiV1.use('/api-docs', swaggerRoute);

export default apiV1;
