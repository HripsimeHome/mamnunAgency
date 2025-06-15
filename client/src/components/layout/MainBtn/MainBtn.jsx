import React, { memo } from "react";

import styles from "./MainBtn.module.scss";

const MainBtn = memo(({ className, children, withBg, ...properties }) => {
  return (
    <button
      className={`${styles.mainBtn} ${withBg ? styles.mainBtn_withBg : ""} ${
        className ? className : ""
      }`}
      {...properties}
    >
      {children}
    </button>
  );
});

export default MainBtn;
