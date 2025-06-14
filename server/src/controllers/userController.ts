import express from "express";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import { errorTypes } from "../constants/errors.js";
import { IUser } from "../definitions/IUser";
import User from "../models/userModel.js";
import { AppError } from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { Email } from "../utils/email.js";

const signToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "");
};

const createAndSendToken = (
  user: IUser,
  res: express.Response,
  statusCode = 200
) => {
  const token = signToken(user.id.toString());
  // user.password = undefined

  res.status(statusCode).json({
    status: "success",
    token,
  });
};

export const signUp = catchAsync(async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  if (password !== passwordConfirm)
    return next(new AppError("passwords are not equal", 400));
  const user = await User.create({
    email,
    password: password?.toString(),
  });
  const token = signToken(user.id.toString());
  const { password: pass, ...userData } = user.toJSON();

  res.send({
    status: "success",
    token,
    data: userData,
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return next(
      new AppError("Please provide email", 400, {
        email: errorTypes.emptyField,
      })
    );
  }
  if (!password) {
    return next(
      new AppError("Please provide password", 400, {
        password: errorTypes.emptyField,
      })
    );
  }
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return next(
      new AppError("incorrect email", 401, {
        email: errorTypes.invalidvalue,
      })
    );
  }
  if (user.passwordResetToken) {
    return next(
      new AppError("incorrect password", 401, {
        password: errorTypes.invalidvalue,
      })
    );
  }

  const isPasswordCorrect = await user.correctPassword(password, user.password);

  if (!isPasswordCorrect) {
    return next(
      new AppError("incorrect password", 401, {
        password: errorTypes.invalidvalue,
      })
    );
  }

  createAndSendToken(user, res);
});

export const changePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  const user = await User.findByPk(req.user.id);

  if (!currentPassword)
    return next(
      new AppError("currentPassword is reuired", 400, {
        currentPassword: errorTypes.emptyField,
      })
    );
  if (!newPassword)
    return next(
      new AppError("currentPassword is reuired", 400, {
        newPassword: errorTypes.emptyField,
      })
    );
  if (!confirmPassword)
    return next(
      new AppError("confirmPassword is reuired", 400, {
        confirmPassword: errorTypes.emptyField,
      })
    );

  if (newPassword !== confirmPassword)
    return next(
      new AppError("passwords are not equal", 400, {
        confirmPassword: errorTypes.invalidvalue,
      })
    );
  if (!user) return next(new AppError("invalid token"));
  const isPasswordCorrect = await user.correctPassword(
    currentPassword,
    user.password
  );

  if (!isPasswordCorrect)
    return next(
      new AppError("Current password is invalid", 400, {
        currentPassword: errorTypes.invalidvalue,
      })
    );

  user.password = newPassword;
  await user.save();
  res.send({ status: "success" });
});

export const forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({
    where: { email: req.body.email as string },
  });
  if (!user) {
    return next(
      new AppError("There is no user with email address", 401, {
        email: errorTypes.invalidvalue,
      })
    );
  }

  const resetToken = user.createPasswordResetToken();
  user.passwordResetToken = resetToken;

  user.passwordResetExpires = new Date(Date.now() + 30 * 60 * 1000);

  await user.save();

  try {
    await new Email(
      user,
      `${process.env.CLIENT_HOST}admin/resetPassword/${resetToken}`
    ).sendForgotPass();

    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  } catch (err) {
    console.error("ERR", err);
    user.passwordResetToken = undefined;
  }
});

export const resetPassword = catchAsync(async (req, res, next) => {
  const { password, passwordConfirm } = req.body;

  if (!password) {
    return next(
      new AppError("password is required", 400, {
        password: errorTypes.emptyField,
      })
    );
  }

  if (!passwordConfirm) {
    return next(
      new AppError("passwordconfirm is required", 400, {
        passwordConfirm: errorTypes.emptyField,
      })
    );
  }

  if (password !== passwordConfirm)
    return next(
      new AppError("passwords are not equal", 400, {
        passwordConfirm: errorTypes.invalidvalue,
      })
    );

  const user = await User.findOne({
    where: {
      passwordResetToken: req.params.token,
      passwordResetExpires: { [Op.gt]: Date.now() },
    },
  });

  if (!user) {
    return next(
      new AppError("Token is invalid or has expired", 400, {
        token: errorTypes.invalidvalue,
      })
    );
  }
  user.password = req.body.password;
  user.passwordResetToken = null;
  user.passwordResetExpires = null;
  await user.save();

  createAndSendToken(user, res);
});
