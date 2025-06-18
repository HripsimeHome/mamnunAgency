import sharp from "sharp";

export const resizeImage = async (
  file: string,
  toFile: string,
  convertToJpeg: boolean = true
) => {
  try {
    const image = sharp(file);

    if (convertToJpeg) {
      await image
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`${toFile.slice(0, toFile.lastIndexOf("."))}.jpeg`);
    } else {
      await image.toFile(toFile);
    }
  } catch (error) {
    console.error(error);
  }
};
