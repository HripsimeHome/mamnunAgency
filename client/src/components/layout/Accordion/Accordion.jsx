import { useState } from "react";
import styles from "./Accordion.module.scss";
import ImageWebp from "../ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import { arrowWhiteIcon, arrowPurpleIcon } from "../../../assets/svg";

const Accordion = ({ accordionItems = [], className, ...rest }) => {
  return (
    <div className={`${styles.accordion} ${className || ""}`} {...rest}>
      {accordionItems.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

const AccordionItem = ({ defaultOpen = false, ...item }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <div className={`${styles.accordion__header} ${isOpen ? styles.accordion__header_active : ""}`} aria-expanded={isOpen}>
        <button
          className={styles.accordion__test}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.accordion__titlePosition}>
            {item.image && (
              <ImageWebp
                src={item.image}
                srcSet={item.webpImage}
                alt={item.title}
                className={styles.accordion__icon}
              />
            )}
            <span  className={styles.accordion__titleTest}>{item.title}</span>
          </div>
          <Svg
            id={isOpen ? arrowPurpleIcon : arrowWhiteIcon}
            className={styles.accordion__toggleIcon}
          />
        </button>

        {isOpen && (
          <div className={styles.accordion__content}>
            
            {item.content}
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
