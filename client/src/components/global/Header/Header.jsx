import styles from "./Header.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { useImageLoader } from "../../../hooks/useImageLoader";




const Header = ({ image, webpImage, title, subtitle }) => {
  const loading = useImageLoader( image, webpImage);
  return (
    <header className={styles.header}>
      <ImageWebp
        src={image}
        srcSet={webpImage}
        alt="MAMNUN Agency"
        className={styles.header__img}
      />
      <div className="container">
        <div className={styles.header__textContainer}>
          <h1 className={styles.header__title}>{title}</h1>
          <h3 className={styles.header__subtitle}>{subtitle}</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
