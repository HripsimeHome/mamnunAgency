import styles from "./EducationRequirements.module.scss";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import Svg from "../../../layout/Svg/Svg";

import {
  formBlackImage,
  formBlackkWebpImage,
  supportBlackImage,
  supportBlackWebpImage,
  relationshipBlackImage,
  relationshipBlackWebpImage,
  agreementImage,
  agreementWebpImage,
  documentsBLackImage,
  documentsBLackWebpImage,
} from "../../../../assets/images";

import {
  educationRequirementsArrowLeftIcon,
  educationRequirementsArrowRightIcon,
  educationRequirementsBGLinesIcon,
  educationRequirementsBGLinesMobIcon,
} from "../../../../assets/svg";

const requirementsData = [
  {
    step: "1",
    title: "Fill the form",
    image: formBlackImage,
    webpImage: formBlackkWebpImage,
  },

  {
    step: "2",
    title: "Get free consultation ",
    image: supportBlackImage,
    webpImage: supportBlackWebpImage,
  },

  {
    step: "3",
    title: "Sign an Agreement and make the service fee",
    image: agreementImage,
    webpImage: agreementWebpImage,
  },

  {
    step: "4",
    title: "Send us the required package of documents",
    image: documentsBLackImage,
    webpImage: documentsBLackWebpImage,
  },

  {
    step: "5",
    title: "We will take care of the further process and keep you updated",
    image: relationshipBlackImage,
    webpImage: relationshipBlackWebpImage,
  },
];

function EducationRequirements() {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      nextButtonRef.current &&
      prevButtonRef.current
    ) {
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <section className={styles.educationRequirements}>
      <h2 className="titleSecondaryH2">
        Application process and&nbsp;
        <br />
        <span className="titlePrimaryH2">requirements</span>
      </h2>
      <div className={styles.educationRequirements__sliderContainer}>
        <Swiper
          slidesPerView={3}
          className={styles.educationRequirements__slider}
          spaceBetween={60}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {requirementsData.map(({ step, title, image, webpImage }, index) => (
            <SwiperSlide key={index}>
              <div className={styles.educationRequirements__stepContainer}>
                <div className={styles.educationRequirements__circle}>
                  <div className={styles.educationRequirements__flipInner}>
                    <div className={styles.educationRequirements__front}>
                      <span className={styles.educationRequirements__step}>
                        {step}
                      </span>
                    </div>
                    <div className={styles.educationRequirements__back}>
                      <ImageWebp
                        src={image}
                        srcSet={webpImage}
                        alt="Step icon"
                        className={styles.educationRequirements__icon}
                        pictureClass={styles.educationRequirements__iconPicture}
                      />
                    </div>
                  </div>
                </div>
                <span className={styles.educationRequirements__title}>
                  {title}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.educationRequirements__bgLines}>
            <Svg id={educationRequirementsBGLinesIcon} />
          </div>
          <div
            className={`${styles.educationRequirements__bgLines} ${styles.educationRequirements__bgLines_mob}`}
          >
            <button
              ref={prevButtonRef}
              className={styles.educationRequirements__navBtn}
            >
              <Svg id={educationRequirementsArrowLeftIcon} />
            </button>
            <Svg id={educationRequirementsBGLinesMobIcon} />
            <button
              ref={nextButtonRef}
              className={styles.educationRequirements__navBtn}
            >
              <Svg id={educationRequirementsArrowRightIcon} />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default EducationRequirements;
