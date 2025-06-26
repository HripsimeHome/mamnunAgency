import styles from "./AboutSlider.module.scss";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { Navigation, Pagination } from "swiper/modules";
import { sliderArrowLeftIcon, sliderArrowRightIcon } from "../../../assets/svg";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import "swiper/css/pagination";
// import "./sliderDots.scss";

import {
  educationImage,
  educationWebpImage,
  opportunitiesImage,
  opportunitiesnWebpImage,
  scholarshipsImage,
  scholarshipsWebpImage,
  servicesImage,
  servicessWebpImage,
  tourImage,
  tourWebpImage,
  VIPBlackImage,
  VIPBlackWebpImage,
  transportationImage,
  transportationWebpImage,
  supportBlackImage,
  supportBlackWebpImage,
  culturalDifferencesImage,
  culturalDifferencesWebpImage,
  consultationImage,
  consultationWebpImage,
  relationshipsImage,
  relationshipsWebpImage,
  feedbackImage,
  feedbackWebpImage,
  trustImage,
  trustIWebpImage,
  partnersWhiteImage,
  partnersWhiteWebpImage,
} from "../../../assets/images";

const slideData = [
  {
    image: educationImage,
    webpImage: educationWebpImage,
    alt: "Education and travel",
    description:
      "At MAMNUN, we are passionate about both education and travel. We are committed to helping you create lasting memories while achieving your academic aspirations.",
  },

  {
    image: opportunitiesImage,
    webpImage: opportunitiesnWebpImage,
    alt: "",
    description:
      "We have established partnerships with ranked universities worldwide, giving students access to a diverse range of programs and opportunities.",
  },

  {
    image: scholarshipsImage,
    webpImage: scholarshipsWebpImage,
    alt: "",
    description:
      "Our track record speaks for itself. We have successfully assisted numerous students in gaining admission to prestigious institutions and securing scholarships.",
  },

  {
    image: servicesImage,
    webpImage: servicessWebpImage,
    alt: "",
    description:
      "We are dedicated to providing transparent, reliable, and high-quality services to ensure that every student has the best chance of success in their academic journey.",
  },

  {
    image: tourImage,
    webpImage: tourWebpImage,
    alt: "",
    description:
      "In addition to our educational services, we offer customized travel packages designed to create unique and memorable experiences for our clients.",
  },

  {
    image: VIPBlackImage,
    webpImage: VIPBlackWebpImage,
    alt: "",
    description:
      "Enjoy our VIP passenger ground handling services, which include Fast Track assistance at airports, allowing you to bypass long lines and enjoy a stress-free travel experience.",
  },

  {
    image: transportationImage,
    webpImage: transportationWebpImage,
    alt: "",
    description:
      "We provide dependable ground transportation services worldwide, ensuring you have safe and comfortable travel options at your destination.",
  },

  {
    image: supportBlackImage,
    webpImage: supportBlackWebpImage,
    alt: "",
    description:
      "Our experienced team is dedicated to providing expert advice and support, helping you navigate both educational opportunities and travel logistics with ease.",
  },

  {
    image: culturalDifferencesImage,
    webpImage: culturalDifferencesWebpImage,
    alt: "Cultural differences and customs",
    description:
      "We offer valuable information about cultural differences and local customs, helping you adapt and thrive in new environments.",
  },

  {
    image: consultationImage,
    webpImage: consultationWebpImage,
    alt: "Consultation and travel support",
    description:
      "From the initial consultation to your arrival at your destination, we provide continuous support, ensuring you feel confident and well-prepared throughout your journey.",
  },

  {
    image: relationshipsImage,
    webpImage: relationshipsWebpImage,
    alt: "Student and family relationships",
    description:
      "We prioritize maintaining strong relationships with our students and their families, ensuring open communication and support throughout the entire process.",
  },

  {
    image: feedbackImage,
    webpImage: feedbackWebpImage,
    alt: "Partner and customer feedback",
    description:
      "We are focused on achieving results and regularly seek feedback from both our partners and customers, allowing us to continuously improve our services and meet your needs effectively.",
  },

  {
    image: trustImage,
    webpImage: trustIWebpImage,
    alt: "Tansparency and trust",
    description:
      "We believe in transparency. You can trust that there are no hidden fees, information, or surprises—everything is clearly communicated to ensure your peace of mind.",
  },

  {
    image: partnersWhiteImage,
    webpImage: partnersWhiteWebpImage,
    alt: "Trusted education and travel partner",
    description:
      "Choose MAMNUN as your trusted partner in education and travel, and let us help you turn your dreams into reality—ensuring your satisfaction every step of the way!",
  },
];

const AboutSlider = () => {
  return (
    <section className={`${styles.aboutSlider} wrapperWhite`}>
      <div className={`container ${styles.aboutSlider__grid}`}>
        {slideData.map(({ image, webpImage, alt, description }, index) => (
          <div className={styles.aboutSlider__slide} key={index}>
            <div className={styles.aboutSlider__imgWrapper}>
              <ImageWebp
                src={image}
                srcSet={webpImage}
                alt={alt}
                className={styles.aboutSlider__img}
              />
            </div>
            <p className={styles.aboutSlider__description}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSlider;
