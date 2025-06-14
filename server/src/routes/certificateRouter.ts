import express from "express";
import { protect, restrictTo } from "../controllers/authController.js";
import { EUserRoles } from "../definitions/IUser.js";
import {
  createCertificate,
  deleteCertificate,
  getCertificates,
  uploadCertificateImages,
  saveCertificateImage,
} from "../controllers/certificateController.js";

export const certificateRouter = express.Router();

certificateRouter.get("/", getCertificates);

certificateRouter.use(protect);
certificateRouter.use(restrictTo(EUserRoles.admin));

certificateRouter.post(
  "/create",
  uploadCertificateImages,
  saveCertificateImage,
  createCertificate
);
certificateRouter.delete("/:id", deleteCertificate);
