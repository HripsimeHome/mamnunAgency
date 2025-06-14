import express from "express";
import { protect, restrictTo } from "../controllers/authController.js";
import { EUserRoles } from "../definitions/IUser.js";
import {
  createNews,
  deleteNews,
  getActiveDayNews,
  getNews,
  saveNewsImage,
  updateActiveDayNews,
  updateNews,
  uploadNewsImages,
} from "../controllers/newsController.js";

export const newsRouter = express.Router();

newsRouter.get("/", getNews);
newsRouter.get("/dayNews", getActiveDayNews);

newsRouter.use(protect);
newsRouter.use(restrictTo(EUserRoles.admin));

newsRouter.post("/create", uploadNewsImages, saveNewsImage, createNews);
newsRouter.put("/update/dayNews/:id", updateActiveDayNews);
newsRouter.patch("/:id", uploadNewsImages, saveNewsImage, updateNews);
newsRouter.delete("/:id", deleteNews);
