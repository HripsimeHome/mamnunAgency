import express from "express";
import { sendContactMail } from "../controllers/contactController.js";

export const contactRouter = express.Router();

contactRouter.post("/", sendContactMail);
