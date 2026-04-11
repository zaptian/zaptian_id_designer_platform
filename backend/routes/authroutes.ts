import express from "express";
import { body } from "express-validator";
import { register, login, logout, getMe } from "../controllers/authcontroller.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

const registerValidation = [
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("mobile").isLength({ min: 10, max: 10 }).withMessage("Mobile number must be 10 digits"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];

const loginValidation = [
  body("identifier").notEmpty().withMessage("Email or mobile is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

router.post("/register", registerValidation, validate, register);
router.post("/login", loginValidation, validate, login);
router.post("/logout", logout);
router.get("/me", protect, getMe);

export default router;
