import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import { xss } from "express-xss-sanitizer";
import helmet from "helmet";
import hpp from "hpp";
import { globalErrorHandler } from "./src/controllers/errorController.js";
import { userRouter } from "./src/routes/userRouter.js";
import { newsRouter } from "./src/routes/newsRouter.js";
import { AppError } from "./src/utils/appError.js";

export const app = express();

// add headers for secure
app.use(helmet());

app.use(cors());

// save as json

app.use(express.json());
app.use(bodyParser.text({ type: "/" }));
// limit requests
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 100000000,
  message: "Too many requests from this IP,please try again in an hour",
});

app.use("/api", limiter);

// disabling html sending
app.use(xss());

// prevent multiple parameters
app.use(
  hpp({
    whitelist: [],
  })
);

app.use("/api", express.static("public"));

// ROUTES2
app.use("/api/v1/users", userRouter);
app.use("/api/v1/news", newsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} in this server`, 404));
});

app.use(globalErrorHandler);
