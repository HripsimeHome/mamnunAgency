import express from "express";
import {
  bookJourney,
  sendContactMail,
} from "../controllers/contactController.js";

export const contactRouter = express.Router();

contactRouter.post("/", sendContactMail);
contactRouter.post("/book", bookJourney);
