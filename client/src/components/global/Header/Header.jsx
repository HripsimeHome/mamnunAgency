import styles from "./Header.module.scss";

const Header = ({ image, webpImage, backgroundClass, title, subtitle }) => {
  return (
    <header className={`${styles.header} ${backgroundClass}`}>
      <h1 className={styles.header__title}>{title}</h1>
      <h3>
        className={styles.header__subtitle}
        {subtitle}
      </h3>
    </header>
  );
};

export default Header;
