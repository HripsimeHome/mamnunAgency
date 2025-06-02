import React from "react";
import styles from "./ImageWebp.module.scss";

const ImageWebp = ({
  srcSet,
  pictureClass,
  forwardedRef,
  alt,
  src,
  useLoader,
  ...properties
}) => {
  return (
    <picture
      className={`${styles.imageWebp} ${
        useLoader ? styles.imageWebp_loader : ""
      } ${pictureClass ? pictureClass : ""}`}
    >
      <source srcSet={srcSet} type="image/webp" />
      <img alt={alt} src={src} ref={forwardedRef} {...properties} />
    </picture>
  );
};

export default ImageWebp;