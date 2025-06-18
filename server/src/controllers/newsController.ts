import { OrderItem } from "sequelize";
import News from "../models/newsModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import { deleteFiles } from "../utils/files.js";
import { uploadImage } from "../utils/multer.js";
import { resizeImage } from "../utils/sharp.js";
import { AppError } from "../utils/appError.js";

export const uploadNewsImages = uploadImage.single("image");

export const saveNewsImage = catchAsync(async (req, _, next) => {
  if (req.file) {
    await resizeImage(
      req.file.path,
      `public/news/resized-${req.file.filename}`
    );

    deleteFiles([req.file.filename]);
    req.body.image = `/news/resized-${req.file.filename.slice(
      0,
      req.file.filename.lastIndexOf(".")
    )}.jpeg`;
  }
  return next();
});

export const createNews = catchAsync(async (req, res) => {
  const news = await News.create(req.body, { validate: true });

  res.send({ status: "success", data: news });
});
export const getNews = catchAsync(async (req, res) => {
  const { page, pageSize } = req.query;
  const pageNumber = parseInt(page as string, 10) || 1;
  const pageSizeNumber = parseInt(
    (pageSize || process.env.PAGE_SIZE) as string,
    10
  );

  let order: OrderItem[] = [["date", "DESC"]];

  // Ensure valid pagination values
  const limit = pageSizeNumber > 0 ? pageSizeNumber : 20;
  const offset = (pageNumber > 0 ? pageNumber - 1 : 0) * limit;

  const data = await News.findAll({
    limit,
    order,
    offset,
  });

  const count = await News.count();

  const currentPage = pageNumber;

  res.send({
    resultCount: count,
    currentPage,
    pageSize: limit,
    data,
  });
});

export const getActiveDayNews = catchAsync(async (req, res) => {
  const dayNews = await News.findOne({
    where: {
      activeDayNews: true,
    },
  });

  res.send({ status: "success", data: dayNews });
});
export const updateActiveDayNews = catchAsync(async (req, res, next) => {
  const updatingNews = await News.findByPk(req.params.id);
  if (!updatingNews) {
    return next(new AppError("invalid id parameter"));
  }

  const dayNews = await News.findOne({
    where: {
      activeDayNews: true,
    },
  });
  if (dayNews && !updatingNews.activeDayNews) {
    await dayNews.update({ activeDayNews: false });
  }
  await updatingNews.update({ activeDayNews: !updatingNews.activeDayNews });

  res.send({ status: "success", data: updatingNews });
});

export const updateNews = catchAsync(async (req, res, next) => {
  const updatingNews = await News.findByPk(req.params.id);
  if (!updatingNews) {
    return next(new AppError("invalid id param"));
  }
  if (req.body.image) {
    deleteFiles([updatingNews.image]);
  }

  await updatingNews.update(req.body);
  res.send({ status: "success", data: updatingNews });
});

export const deleteNews = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (!id) return next(new AppError("invalid id param"));

  // First find the news item
  const newsItem = await News.findByPk(id);
  if (!newsItem) {
    return next(new AppError("News not found"));
  }

  // Then destroy it
  await newsItem.destroy();

  res.send({ status: "success" });
});
