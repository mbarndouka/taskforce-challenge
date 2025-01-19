import express from 'express';
import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import logger from './logger';

const swaggerRoute = express.Router();

const options: Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Force Pro Wallet API',
      version: '1.0.0',
      description:
        'API documentation for the Task Force Pro Wallet application',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/api/v1/documentations/*.yaml'],
};

const swaggerSpec = swaggerJsdoc(options);

swaggerRoute.use('/', swaggerUI.serve);
swaggerRoute.get('/', swaggerUI.setup(swaggerSpec));
swaggerRoute.get('/json', (req, res) => {
  logger.info(req.url);
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.send(swaggerSpec);
});

export default swaggerRoute;
