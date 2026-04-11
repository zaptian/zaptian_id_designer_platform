import { Request, Response, NextFunction } from "express";

/**
 * Eliminates the need for try/catch blocks in async express handlers.
 * Any error will be caught and passed to the next() function.
 */
export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
