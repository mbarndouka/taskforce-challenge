import { Response } from 'express';
import * as Errors from './errors';
import logger from './logger';

export class HttpError extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string, name: string) {
    super(message);
    this.status = status;
    this.message = message;
    this.name = name;
  }
}

export class ErrorHandler {
  static handleError(error: Error, res: Response) {
    logger.error(error);
    switch (error.name) {
      case Errors.UnauthorizedError:
        return res.status(401).send({ error: error.message });
      case Errors.NotFoundError:
        return res.status(404).send({ error: error.message });
      case Errors.BadRequestError:
        return res.status(400).send({ error: error.message });
      case Errors.InternalServerError:
        return res.status(500).send({ error: error.message });
      case Errors.ConflictError:
        return res.status(409).send({ error: error.message });
      case Errors.ForbiddenError:
        return res.status(403).send({ error: error.message });
      case Errors.UnauthenticatedError:
        return res.status(401).send({ error: error.message });
      case Errors.ValidationError:
        return res.status(400).send({ error: error.message });
      default:
        return res.status(500).send({ error: error.message });
    }
  }
}

export { logger };
