import styles from "./Loader.module.scss";

const Loader = ({ className }) => {
  return (
    <div className={`${styles.loader} ${className || ""}`}>
      <div className={styles.loader__wrapper}>
        <div className={styles.loader__inner}></div>
        <div className={styles.loader__anim}></div>
      </div>
      <h5 className={styles.loader__txt}>Loading...</h5>
    </div>
  );
};

export default Loader;
