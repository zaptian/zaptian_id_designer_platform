import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { BadRequestError, ErrorCode } from "../utils/appError.js";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg).join(", ");
    throw new BadRequestError(`Validation failed: ${errorMessages}`, ErrorCode.VALIDATION_ERROR);
  }
  next();
};
