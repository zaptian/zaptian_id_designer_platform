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

  const currentUser = await User.findByPk(decoded.id);
  if (!currentUser) {
    throw new UnauthorizedError("The user belonging to this token does no longer exist.");
  }

  req.user = currentUser;
  next();
});
