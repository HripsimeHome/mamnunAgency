import styles from "./Header.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { useState } from "react";

const Header = ({ image, webpImage, alt, title, subtitle, imgPosition }) => {
  const [loading, setLoading] = useState(true);
  return (
    <header className={styles.header}>
      <ImageWebp
        src={image}
        srcSet={webpImage}
        alt={alt}
        style={{ objectPosition: imgPosition || "center" }}
        onLoad={() => setLoading(false)}
        className={`
          ${styles.header__img}
 
          ${loading ? styles.header__img_inactive : ""}         
        `}
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
