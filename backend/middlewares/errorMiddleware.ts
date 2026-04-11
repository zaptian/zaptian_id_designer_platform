import { Request, Response, NextFunction } from "express";
import { AppError, ErrorCode } from "../utils/appError.js";

const sendErrorDev = (err: any, res: Response) => {
  res.status(err.statusCode || 500).json({
    status: err.status,
    errorCode: err.errorCode || ErrorCode.INTERNAL_ERROR,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: any, res: Response) => {
  // Operational, trusted error: send message and error code to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      errorCode: err.errorCode || ErrorCode.INTERNAL_ERROR,
      message: err.message,
    });
  } else {

    // Programming or other unknown error: don't leak error details
    console.error("ERROR 💥", err);
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else {
    let error = { ...err };
    error.message = err.message;

    // Sequelize specific error handling
    if (err.name === "SequelizeUniqueConstraintError") {
      error = new AppError("Duplicate field value. Please use another value!", 400);
    }
    if (err.name === "SequelizeValidationError") {
      const messages = err.errors.map((el: any) => el.message);
      error = new AppError(`Invalid input data. ${messages.join(". ")}`, 400);
    }

    sendErrorProd(error, res);
  }
};
