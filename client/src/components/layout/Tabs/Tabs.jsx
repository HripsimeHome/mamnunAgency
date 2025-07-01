import { useState } from "react";
import styles from "./Tabs.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { useLazy } from "../../../hooks/useLazy";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

const Tabs = ({ tabHeaders = [], tabContentGroups = [] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { isInView, ref } = useLazy(0.7);
  return (
    <section ref={ref} className={styles.tabs}>
      {/* Tab headers */}
      <div className={styles.tabs__titleContainer}>
        {tabHeaders.map((header, index) => (
          <span
            key={index}
            className={` 
              ${styles.tabs__tabTitle}           
              ${
                index === activeTabIndex
                  ? styles.tabs_active
                  : styles.tabs_inActive
              }
            `}
            onClick={() => setActiveTabIndex(index)}
          >
            {header}
          </span>
        ))}
      </div>

      {/* Tab content */}
      {tabContentGroups[activeTabIndex]?.map(
        ({ image, webpImage, title, description }, index) => (
          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.bottom}
            delay={index * 100}
            key={index}
            className={styles.tabs__content}
          >
            <div className={styles.tabs__titleBlock}>
              {image && (
                <ImageWebp
                  src={image}
                  srcSet={webpImage}
                  alt={title}
                  className={styles.tabs__img}
                />
              )}
              <h3 className={styles.tabs__title}>{title}</h3>
            </div>
            <div className={styles.tabs__description}>{description}</div>
          </TransitionProvider>
        )
      )}
    </section>
  );
};

export default Tabs;
