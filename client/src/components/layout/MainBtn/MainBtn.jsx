import React, { memo } from "react";

import styles from "./MainBtn.module.scss";

const MainBtn = memo(
  ({
    className,
    children,
    withBg,
    withWhite,
    active,
    isNegative,
    ...properties
  }) => {
    return (
      <button
        className={`
          ${styles.mainBtn} 
          ${withBg ? styles.mainBtn_withBg : ""} 
          ${active ? styles.mainBtn_active : ""} 
          ${withWhite ? styles.mainBtn_withWhite : ""} 
          ${isNegative ? styles.mainBtn_negative : ""}
          ${className ? className : ""}
         `}
        {...properties}
      >
        {children}
      </button>
    );
  }
);

export default MainBtn;
