import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { catchAsync } from "../utils/catchAsync.js";
import { UnauthorizedError } from "../utils/appError.js";

interface JwtPayload {
  id: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export const protect = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    throw new UnauthorizedError("You are not logged in! Please log in to get access.");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
  console.log("Auth Debug - Decoded Token:", decoded);

  const currentUser = await User.findByPk(decoded.id);
  console.log("Auth Debug - User Lookup Result:", currentUser ? `Found user ${currentUser.id}` : `User ID ${decoded.id} NOT FOUND`);
  
  if (!currentUser) {
    throw new UnauthorizedError(`The user belonging to this token (ID: ${decoded.id}) does no longer exist.`);
  }

  if (currentUser.status === "suspended") {
    throw new UnauthorizedError("Your account has been suspended. Please contact support.");
  }

  req.user = currentUser;
  next();
});

/**
 * Middleware to restrict access based on user roles
 */
export const restrictTo = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new UnauthorizedError("You do not have permission to perform this action."));
    }
    next();
  };
};
