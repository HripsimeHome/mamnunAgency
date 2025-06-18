import React, { memo } from "react";

import styles from "./MainBtn.module.scss";

const MainBtn = memo(
  ({ className, children, withBg, isNegative, ...properties }) => {
    return (
      <button
        className={`
          ${styles.mainBtn} 
          ${withBg ? styles.mainBtn_withBg : ""} 
          ${
          isNegative ? styles.mainBtn_negative : ""
        }
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
