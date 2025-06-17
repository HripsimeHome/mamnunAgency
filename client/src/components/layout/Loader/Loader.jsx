import styles from "./Loader.module.scss";
import ImageWebp from "../ImageWebp/ImageWebp";
import { loaderFrameImage, loaderFrameWebpImage } from "../../../assets/images";

const Loader = ({ className }) => {
  return (
    <div className={`${styles.loader} ${className || ""}`}>
      <div className={styles.loader__wrapper}>
        <ImageWebp
          src={loaderFrameImage}
          srcSet={loaderFrameWebpImage}
          className={styles.loader__img}
        />
      </div>
      <h5 className={styles.loader__txt}>Loading...</h5>
    </div>
  );
};

export default Loader;
