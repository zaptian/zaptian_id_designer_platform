export enum ErrorCode {
  BAD_REQUEST = "BAD_REQUEST",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  CONFLICT = "CONFLICT",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly errorCode: ErrorCode;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, errorCode: ErrorCode = ErrorCode.BAD_REQUEST) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = "Bad Request", errorCode: ErrorCode = ErrorCode.BAD_REQUEST) {
    super(message, 400, errorCode);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Login required, please log in to access this resource", errorCode: ErrorCode = ErrorCode.UNAUTHORIZED) {
    super(message, 401, errorCode);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = "Forbidden", errorCode: ErrorCode = ErrorCode.FORBIDDEN) {
    super(message, 403, errorCode);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Resource Not Found", errorCode: ErrorCode = ErrorCode.NOT_FOUND) {
    super(message, 404, errorCode);
  }
}

export class ConflictError extends AppError {
  constructor(message: string = "Conflict Occurred", errorCode: ErrorCode = ErrorCode.CONFLICT) {
    super(message, 409, errorCode);
  }
}

export class InternalError extends AppError {
  constructor(message: string = "Internal Server Error", errorCode: ErrorCode = ErrorCode.INTERNAL_ERROR) {
    super(message, 500, errorCode);
  }
}

