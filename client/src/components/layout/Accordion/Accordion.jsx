import { useEffect, useState } from "react";
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
import { useLazy } from "../../../hooks/useLazy";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

const Accordion = ({
  accordionItems = [],
  className,
  inverse,
  by2Col,
  by6And4Col,
  ...rest
}) => {
  const { ref, isInView } = useLazy();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let firstColData = [];
  let secColData = [];
  if (by2Col && isDesktop) {
    // For by2Col, display 1st item in first col, 2nd in second col, 3rd in first, 4th in second, etc.
    firstColData = accordionItems.filter((_, idx) => idx % 2 === 0);
    secColData = accordionItems.filter((_, idx) => idx % 2 === 1);
  } else {
    // Default: split in half
    firstColData = accordionItems.slice(
      0,
      Math.ceil(accordionItems.length / 2)
    );
    secColData = accordionItems.slice(Math.ceil(accordionItems.length / 2));
  }

  const isDoubleCol = by2Col || by6And4Col;

  return (
    <div
      ref={ref}
      className={`${styles.accordion} ${className || ""}`}
      {...rest}
    >
      <div
        className={`${styles.accordion__col} ${
          isDoubleCol ? styles.accordion__col_sm : ""
        } ${by6And4Col ? styles.accordion__col_6Col : ""} ${
          by2Col ? styles.accordion__col_2Col : ""
        }`}
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
          <AccordionItem
            key={index}
            {...item}
            inverse={inverse}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
      {isDoubleCol && (
        <div
          className={`${styles.accordion__col} ${
            isDoubleCol ? styles.accordion__col_sm : ""
          } ${by6And4Col ? styles.accordion__col_4Col : ""} ${
            by2Col ? styles.accordion__col_2Col : ""
          }`}
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
            <AccordionItem
              key={index}
              {...item}
              inverse={inverse}
              index={index}
              isInView={isInView}
            />
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
  isInView,
  index,
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
    <TransitionProvider
      inProp={isInView}
      style={TransitionStyleTypes.bottom}
      delay={index * 100}
    >
      <button
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
      </button>
    </TransitionProvider>
  );
};

export default Accordion;
