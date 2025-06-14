import { useState } from "react";
import styles from "./Tabs.module.scss";
import Svg from "../../layout/Svg/Svg";

const Tabs = ({ tabHeaders = [], tabContentGroups = [] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className={styles.tabs}>      
      {/* Tab headers */}
      <div className={styles.tabs__titleContainer}>
        {tabHeaders.map((header, index) => (
          <span
            key={index}
            className={`            
              ${index === activeTabIndex ? styles.tabs__active : styles.tabs__inActive}
            `}
            onClick={() => setActiveTabIndex(index)}
          >
            {header}
          </span>
        ))}
      </div>

      {/* Tab content */}
      {tabContentGroups[activeTabIndex]?.map(
        ({ icon, title, description }, index) => (
          <div
            key={index}
            className={styles.tabs__content}
          >
            <div className={styles.tabs__titleBlock}>
              {icon && (
                <Svg id={icon} className={styles.tabs__icon} />
              )}
              <h3 className={styles.tabs__title}>{title}</h3>
            </div>
            <div className={styles.tabs__description}>
              {description}
            </div>
          </div>
        )
      )}  
    </section>
  );
};

export default Tabs;