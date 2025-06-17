import sharp from "sharp";

export const resizeImage = async (file: string, toFile: string) => {
  try {
    await sharp(file)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`${toFile.slice(0, toFile.lastIndexOf("."))}.jpeg`);
  } catch (error) {
    console.error(error);
  }
};
