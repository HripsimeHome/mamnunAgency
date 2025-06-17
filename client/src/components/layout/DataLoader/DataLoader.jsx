import Loader from "../Loader/Loader";
import styles from "./DataLoader.module.scss";

const DataLoader = ({ isLoaded, show, text, error }) => {
  return (
    <div
      className={`${styles.dataLoader} ${show ? styles.dataLoader_active : ""}`}
    >
      <div className={styles.dataLoader__inner}>
        {error ? (
          <h5 className={styles.dataLoader__errorTxt}>Failed to load Data</h5>
        ) : isLoaded ? (
          <h5 className={styles.dataLoader__emptyTxt}>
            {text || "Nothing found"}
          </h5>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default DataLoader;
