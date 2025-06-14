import { ErrorRequestHandler, Response } from "express";
import { ValidationError } from "sequelize";
import { errorTypes } from "../constants/errors.js";
import { AppError, IAppError } from "../utils/appError.js";

type SendErrorFunc = (error: IAppError, res: Response) => void;
type ReturnErrorFunc = (error: any) => Error;

const sendErrDev: SendErrorFunc = (error, res) => {
  const { status, message, stack, statusCode } = error;
  res.status(statusCode).json({
    status,
    message,
    stack,
    error,
  });
};

const sendErrProd: SendErrorFunc = (error, res) => {
  const { statusCode, status, message } = error;
  res.status(statusCode).json({
    status,
    message,
    error,
  });
};

const handleCastErrorDb: ReturnErrorFunc = (err: ValidationError) => {
  const entries = err.errors.map((item) => item.path);
  const errors = entries.reduce((acc: { [key in string]: string }, cur) => {
    if (cur) acc[cur] = errorTypes.invalidvalue;
    return acc;
  }, {});
  const message = `Invalid value(s) ${entries.join(", ")}`;
  return new AppError(message, 400, errors);
};

const handleDuplicateError: ReturnErrorFunc = (
  err: ValidationError & { fields: { [p: string]: string } }
) => {
  const entries = err.errors.map((item) => item.path);

  const message = `Duplicated value(s) ${entries.join(", ")}`;
  return new AppError(message, 400, err.fields);
};

const handleInvalidValueError: ReturnErrorFunc = (err: {
  parent: { code: string; sqlMessage: string };
}) => {
  const slicedMsg = err.parent.sqlMessage.split("`.`");
  const regex1 = /'([^']*)'/g;
  const regex2 = /`([^`]*)`/g;
  const key =
    err.parent.sqlMessage.match(regex1)?.[0].replaceAll("'", "") ||
    err.parent.sqlMessage.match(regex2)?.[0].replaceAll("`", "") ||
    "";
  const message = `invaid ${key} value`;
  return new AppError(message, 400, { [key]: errorTypes.invalidvalue });
};

const handleMulterError: ReturnErrorFunc = (err: {
  field: string;
  message: string;
  name: string;
  code: string;
}) => {
  const message = err?.message || "MulterError";
  const key = err?.field ? err.field.replace("[]", "") : "file";
  if (err?.code === "LIMIT_FILE_SIZE") {
    return new AppError(message, 400, {
      [key]: errorTypes.largeFile,
    });
  } else {
    return new AppError(message, 400, {
      [key]: "MulterError",
    });
  }
};

const handleJWTError = () =>
  new AppError("Invalid Token,please log in again", 401);

const handleJWTExpiredError = () =>
  new AppError("Your token has expired,please log in again");

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  let error = { ...err };
  console.log({ err });

  if (err instanceof ValidationError) {
    error = { ...err } as ValidationError;

    if (error.name === "SequelizeValidationError")
      error = handleCastErrorDb(error);
    if (error.name === "SequelizeUniqueConstraintError")
      error = handleDuplicateError(error);
  }
  if (error?.name === "SequelizeDatabaseError")
    error = handleInvalidValueError(error);
  if (error?.name === "MulterError") error = handleMulterError(error);

  if (error.name === "JsonWebTokenError") error = handleJWTError();
  if (error.name === "TokenExpiredError") error = handleJWTExpiredError();

  if (process.env.NODE_ENV === "development") {
    sendErrDev(error, res);
  }
  if (process.env.NODE_ENV === "production") {
    sendErrProd(error, res);
  }
};

export const handleRequiredFieldsError = (
  fields: string[],
  body: any
): { [x: string]: string } | null => {
  let errors: { [x: string]: string } | null = null;
  fields.forEach((item) => {
    console.log({ item });

    if (!body[item]) {
      if (!errors) errors = {};
      errors[item] = errorTypes.emptyField;
    }
  });

  return errors;
};

export const handleNumberFieldsError = (
  fields: string[],
  body: any,
  error: { [x: string]: string } | null = null
): { [x: string]: string } | null => {
  let errors: { [x: string]: string } | null = error || null;

  fields.forEach((item) => {
    if (!errors?.[item] && +body[item] <= 0) {
      if (!errors) errors = {};
      errors[item] = errorTypes.invalidvalue;
    }
  });

  return errors;
};
