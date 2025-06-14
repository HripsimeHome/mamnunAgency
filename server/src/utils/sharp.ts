import sharp from "sharp";

export const resizeImage = async (
  file: string,
  toFile: string,
  sizes: [number, number] = [800, 500]
) => {
  try {
    console.log("jpeg");

    await sharp(file)
      .resize(...sizes)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`${toFile.slice(0, toFile.lastIndexOf("."))}.jpeg`);
  } catch (error) {
    console.error(error);
  }
};
