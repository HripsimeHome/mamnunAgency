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

const AccordionItem = ({
  defaultOpen = false,
  image,
  webpImage,
  activeImage,
  activeWebpImage,
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const displayImage = isOpen ? activeImage || image : image;
  const displayWebp = isOpen ? activeWebpImage || webpImage : webpImage;

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.accordion__header} ${
          isOpen ? styles.accordion__header_active : ""
        }`}
        aria-expanded={isOpen}
      >
        <div className={styles.accordion__btn}>
          <div className={styles.accordion__titlePosition}>
            {displayImage && (
              <ImageWebp
                src={displayImage}
                srcSet={displayWebp}
                alt={title}
                className={styles.accordion__icon}
              />
            )}
            <span className={styles.accordion__title}>{title}</span>
          </div>
          <Svg id={arrowWhiteIcon} className={styles.accordion__toggleIcon} />
        </div>

        {isOpen && <div className={styles.accordion__content}>{content}</div>}
      </div>
    </>
  );
};

export default Accordion;
