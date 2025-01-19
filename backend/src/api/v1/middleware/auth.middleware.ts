import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: string | JwtPayload;
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    res.status(401).json({ message: 'Access denied. No token provided.' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      res.status(403).json({ message: 'Invalid token.' });
      return;
    }
    req.user = user; // Attach the user payload to the request object
    next();
  });
};
