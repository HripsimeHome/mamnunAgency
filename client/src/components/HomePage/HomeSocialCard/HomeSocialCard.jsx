import { useEffect } from "react";
import styles from "./HomeSocialCard.module.scss";

function HomeSocialCard() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.homeSocialCard}>
      <div
        className="elfsight-app-442d2002-a9c5-4937-8290-c81d0426e3a8"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}

export default HomeSocialCard;
