import styles from "./Header.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { useState } from "react";
import { useLazy } from "../../../hooks/useLazy";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

const Header = ({ image, webpImage, alt, title, subtitle, imgPosition }) => {
  const [loading, setLoading] = useState(true);
  const { ref, isInView } = useLazy();
  return (
    <header ref={ref} className={styles.header}>
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
        <TransitionProvider
          inProp={isInView}
          style={TransitionStyleTypes.bottom}
          className={styles.header__textContainer}
        >
          <h1 className={styles.header__title}>{title}</h1>
          <h3 className={styles.header__subtitle}>{subtitle}</h3>
        </TransitionProvider>
      </div>
    </header>
  );
};

export default Header;
