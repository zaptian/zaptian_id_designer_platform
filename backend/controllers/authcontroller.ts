import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import User from "../models/user.js";
import { catchAsync } from "../utils/catchAsync.js";
import {
  ConflictError,
  ErrorCode,
  UnauthorizedError,
} from "../utils/appError.js";

const signToken = (id: number) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: (process.env.JWT_EXPIRES_IN || "1d") as any,
  });
};

const createSendToken = (
  user: User,
  statusCode: number,
  req: Request,
  res: Response,
) => {
  const userId = user.id || user.get("id");
  const token = signToken(userId as number);

  const cookieOptions = {
    expires: new Date(
      Date.now() +
        Number(process.env.JWT_COOKIE_EXPIRES_IN || 1) * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        status: user.status,
      },
    },
  });
};

export const register = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, mobile, password } = req.body;

    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      throw new ConflictError("Email already registered", ErrorCode.CONFLICT);
    }

    const existingMobile = await User.findOne({ where: { mobile } });
    if (existingMobile) {
      throw new ConflictError(
        "Mobile number already registered",
        ErrorCode.CONFLICT,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      mobile,
      password: hashedPassword,
    });

    createSendToken(newUser, 201, req, res);
  },
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { identifier, password } = req.body;

    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: identifier }, { mobile: identifier }],
      },
    });

    if (!user) {
      throw new UnauthorizedError("Incorrect email/mobile or password");
    }

    const passwordHash = user.get("password") as string;
    if (!passwordHash || !(await bcrypt.compare(password, passwordHash))) {
      throw new UnauthorizedError("Incorrect email/mobile or password");
    }

    console.log("Login Debug - Signing token for User ID:", user.id || user.get("id"));
    createSendToken(user, 200, req, res);
  },
);

export const logout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.cookie("jwt", "loggedout", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });
    res.status(200).json({ status: "success" });
  },
);

export const getMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      status: "success",
      data: {
        user: req.user,
      },
    });
  },
);
