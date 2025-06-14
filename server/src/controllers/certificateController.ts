import { OrderItem } from "sequelize";
import Certificate from "../models/certificateModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import { deleteFiles } from "../utils/files.js";
import { uploadImage } from "../utils/multer.js";
import { resizeImage } from "../utils/sharp.js";
import { AppError } from "../utils/appError.js";

export const uploadCertificateImages = uploadImage.single("image");

export const saveCertificateImage = catchAsync(async (req, _, next) => {
  if (req.file) {
    await resizeImage(
      req.file.path,
      `public/certificates/resized-${req.file.filename}`
    );

    deleteFiles([req.file.filename]);
    req.body.imagePath = `/certificates/resized-${req.file.filename.slice(
      0,
      req.file.filename.lastIndexOf(".")
    )}.jpeg`;
  }
  return next();
});

export const createCertificate = catchAsync(async (req, res) => {
  const certificate = await Certificate.create(req.body, { validate: true });

  res.send({ status: "success", data: certificate });
});
export const getCertificates = catchAsync(async (req, res) => {
  const { page, pageSize } = req.query;
  const pageNumber = parseInt(page as string, 10) || 1;
  const pageSizeNumber = parseInt(
    (pageSize || process.env.PAGE_SIZE) as string,
    10
  );

  // Ensure valid pagination values
  const limit = pageSizeNumber > 0 ? pageSizeNumber : 20;
  const offset = (pageNumber > 0 ? pageNumber - 1 : 0) * limit;

  const data = await Certificate.findAll({
    limit,
    offset,
  });

  const count = await Certificate.count();

  const currentPage = pageNumber;

  res.send({
    resultCount: count,
    currentPage,
    pageSize: limit,
    data,
  });
});

export const deleteCertificate = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (!id) return next(new AppError("invalid id param"));

  // First find the certificate item
  const certificateItem = await Certificate.findByPk(id);
  if (!certificateItem) {
    return next(new AppError("Certificate not found"));
  }

  // Then destroy it
  await certificateItem.destroy();

  res.send({ status: "success" });
});
