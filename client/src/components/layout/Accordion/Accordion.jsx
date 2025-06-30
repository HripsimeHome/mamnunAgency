import { useState } from "react";
import styles from "./Accordion.module.scss";
import ImageWebp from "../ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import { arrowWhiteIcon } from "../../../assets/svg";
import {
  accordionMinusImage,
  accordionMinusLightImage,
  accordionMinusLightWebpImage,
  accordionMinusWebpImage,
  accordionPlusImage,
  accordionPlusLightImage,
  accordionPlusLightWebpImage,
  accordionPlusWebpImage,
} from "../../../assets/images";

const Accordion = ({
  accordionItems = [],
  className,
  inverse,
  by2Col,
  by6And4Col,
  ...rest
}) => {
  const firstColData = accordionItems.slice(
    0,
    Math.ceil(accordionItems.length / 2)
  );
  const secColData = accordionItems.slice(Math.ceil(accordionItems.length / 2));

  const isDoubleCol = by2Col || by6And4Col;

  return (
    <div className={`${styles.accordion} ${className || ""}`} {...rest}>
      <div
        className={`${styles.accordion__col} ${
          isDoubleCol ? styles.accordion__col_sm : ""
        } ${by6And4Col ? styles.accordion__col_6Col : ""}`}
      >
        {by6And4Col && (
          <ImageWebp
            src={!inverse ? accordionPlusLightImage : accordionPlusImage}
            srcSet={
              !inverse ? accordionPlusLightWebpImage : accordionPlusWebpImage
            }
            alt="plus"
            className={styles.accordion__bgImg}
          />
        )}
        {(isDoubleCol ? firstColData : accordionItems).map((item, index) => (
          <AccordionItem key={index} {...item} inverse={inverse} />
        ))}
      </div>
      {isDoubleCol && (
        <div
          className={`${styles.accordion__col} ${
            isDoubleCol ? styles.accordion__col_sm : ""
          } ${by6And4Col ? styles.accordion__col_4Col : ""}`}
        >
          {by6And4Col && (
            <ImageWebp
              src={!inverse ? accordionMinusLightImage : accordionMinusImage}
              srcSet={
                !inverse
                  ? accordionMinusLightWebpImage
                  : accordionMinusWebpImage
              }
              alt="minus"
              className={styles.accordion__bgImg}
            />
          )}
          {secColData.map((item, index) => (
            <AccordionItem key={index} {...item} inverse={inverse} />
          ))}
        </div>
      )}
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
  inverse,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const displayImage = !inverse
    ? isOpen
      ? activeImage || image
      : image
    : isOpen
    ? image
    : activeImage || image;
  const displayWebp = isOpen ? activeWebpImage || webpImage : webpImage;

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.accordion__header} 
        ${isOpen ? styles.accordion__header_active : ""}  
        ${inverse ? styles.accordion__header_inverse : ""}
        `}
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
