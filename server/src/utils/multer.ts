import e from "express";
import { ParamsDictionary } from "express-serve-static-core";
import multer from "multer";
import { ParsedQs } from "qs";
import { AppError } from "./appError.js";
import { errorTypes } from "../constants/errors.js";

export const multerStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    let path = "public/";
    cb(null, path);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    const type = fileName.slice(fileName.lastIndexOf("."));
    // Specify the file name
    const uniqId = Math.round(Math.random() * 1000);
    cb(null, `${Date.now()}-${uniqId}${type}`);
  },
});

const multerFilter = (
  _: e.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      new AppError("Please upload only images", 400, {
        image: errorTypes.invalidvalue,
      })
    );
  }
};

export const uploadImage = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});
