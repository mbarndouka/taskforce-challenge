import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../utils/error-handler';
import logger from '../utils/logger';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info(req.url);
    const welcome = new HttpError(200, 'Welcome to The Docs Test', 'Welcome');
    res.status(welcome.status).send(welcome.message);
  } catch (error) {
    next(error);
  }
};
