import express from "express";
import { protect } from "../controllers/authController.js";
import {
  changePassword,
  checkToken,
  forgotPassword,
  login,
  resetPassword,
  signUp,
} from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);
userRouter.get("/check", protect, checkToken);
userRouter.post("/changePassword", protect, changePassword);
userRouter.post("/forgotPassword", forgotPassword);
userRouter.patch("/resetPassword/:token", resetPassword);
