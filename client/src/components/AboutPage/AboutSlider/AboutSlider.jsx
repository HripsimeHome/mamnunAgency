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
import Svg from "../../layout/Svg/Svg";

import {
  educationImage,
  educationWebpImage,
  opportunitiesImage,
  opportunitiesnWebpImage,
  scholarshipsImage,
  scholarshipsWebpImage,
  servicesImage,
  servicessWebpImage,
  travelImage,
  travelWebpImage,
  VIPImage,
  VIPWebpImage,
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
  partnerImage,
  partnerWebpImage,
} from "../../../assets/images";

const slideData = [
  {
    imaage: educationImage,
    webpImage: educationWebpImage,
    alt: "Education and travel",
    description:
      "At MAMNUN, we are passionate about both education and travel. We are committed to helping you create lasting memories while achieving your academic aspirations.",
  },

  {
    imaage: opportunitiesImage,
    webpImage: opportunitiesnWebpImage,
    alt: "",
    description:
      "We have established partnerships with ranked universities worldwide, giving students access to a diverse range of programs and opportunities.",
  },

  {
    imaage: scholarshipsImage,
    webpImage: scholarshipsWebpImage,
    alt: "",
    description:
      "Our track record speaks for itself. We have successfully assisted numerous students in gaining admission to prestigious institutions and securing scholarships.",
  },

  {
    imaage: servicesImage,
    webpImage: servicessWebpImage,
    alt: "",
    description:
      "We are dedicated to providing transparent, reliable, and high-quality services to ensure that every student has the best chance of success in their academic journey.",
  },

  {
    imaage: travelImage,
    webpImage: travelWebpImage,
    alt: "",
    description:
      "In addition to our educational services, we offer customized travel packages designed to create unique and memorable experiences for our clients.",
  },

  {
    imaage: VIPImage,
    webpImage: VIPWebpImage,
    alt: "",
    description:
      "Enjoy our VIP passenger ground handling services, which include Fast Track assistance at airports, allowing you to bypass long lines and enjoy a stress-free travel experience.",
  },

  {
    imaage: transportationImage,
    webpImage: transportationWebpImage,
    alt: "",
    description:
      "We provide dependable ground transportation services worldwide, ensuring you have safe and comfortable travel options at your destination.",
  },

  {
    imaage: supportBlackImage,
    webpImage: supportBlackWebpImage,
    alt: "",
    description:
      "Our experienced team is dedicated to providing expert advice and support, helping you navigate both educational opportunities and travel logistics with ease.",
  },

  {
    imaage: culturalDifferencesImage,
    webpImage: culturalDifferencesWebpImage,
    alt: "",
    description:
      "We offer valuable information about cultural differences and local customs, helping you adapt and thrive in new environments.",
  },

  {
    imaage: consultationImage,
    webpImage: consultationWebpImage,
    alt: "",
    description:
      "From the initial consultation to your arrival at your destination, we provide continuous support, ensuring you feel confident and well-prepared throughout your journey.",
  },

  {
    imaage: relationshipsImage,
    webpImage: relationshipsWebpImage,
    alt: "",
    description:
      "We prioritize maintaining strong relationships with our students and their families, ensuring open communication and support throughout the entire process.",
  },

  {
    imaage: feedbackImage,
    webpImage: feedbackWebpImage,
    alt: "",
    description:
      "We are focused on achieving results and regularly seek feedback from both our partners and customers, allowing us to continuously improve our services and meet your needs effectively.",
  },

  {
    imaage: trustImage,
    webpImage: trustIWebpImage,
    alt: "",
    description:
      "We believe in transparency. You can trust that there are no hidden fees, information, or surprises—everything is clearly communicated to ensure your peace of mind.",
  },

  {
    imaage: partnerImage,
    webpImage: partnerWebpImage,
    alt: "",
    description:
      "Choose MAMNUN as your trusted partner in education and travel, and let us help you turn your dreams into reality—ensuring your satisfaction every step of the way!",
  },
];

const AboutSlider = () => {
  return (
    <section className={`${styles.aboutSlider} wrapperWhite`}>
      <div className={`container ${styles.aboutSlider__grid}`}>
        {slideData.map((item, index) => (
          <div className={styles.aboutSlider__slide} key={index}>
            <div className={styles.aboutSlider__imgWrapper}>
              <ImageWebp
                src={item.image}
                srcSet={item.webpImage}
                alt="icon"
                className={styles.aboutSlider__img}
              />
            </div>
            <p className={styles.aboutSlider__description}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSlider;
