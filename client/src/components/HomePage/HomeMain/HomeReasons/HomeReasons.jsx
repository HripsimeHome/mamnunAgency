import styles from "./HomeReasons.module.scss";
import ImageWebp from "./../../../layout/ImageWebp/ImageWebp";

import {
  expertiseImage,
  expertiseWebpImage,
  personalizedApproachImage,
  personalizedApproachWebpImage,
  improvementImage,
  improvementWebpImage,
  strongRelationshipsImage,
  strongRelationshipsWebpImage,
  integrityImage,
  integrityWebpImage,
} from "../../../../assets/images";
import { useLazy } from "../../../../hooks/useLazy";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";
import { useEffect, useRef, useState } from "react";

export const reasonsData = [
  {
    image: expertiseImage,
    webpImage: expertiseWebpImage,
    title: "8+ Years of Expertise",
    index: 0,
    description:
      "Our experience and global network enable us to offer reliable and effective solutions",
  },

  {
    image: personalizedApproachImage,
    webpImage: personalizedApproachWebpImage,
    title: "Personalized Approach",
    index: 1,

    description:
      "We tailor our services to meet each client’s unique goals and aspirations",
  },

  {
    image: improvementImage,
    webpImage: improvementWebpImage,
    title: "Continuous Growth & Improvement",
    index: 4,
    description:
      "We never stop evolving, constantly enhancing our services to provide the best opportunities",
  },

  {
    image: strongRelationshipsImage,
    webpImage: strongRelationshipsWebpImage,
    title: "Strong Relationships with Stakeholders",
    index: 3,

    description:
      "We collaborate closely with universities, institutions, and industry leaders to create lasting opportunities",
  },

  {
    image: integrityImage,
    webpImage: integrityWebpImage,
    title: "Transparency & Integrity",
    index: 2,
    description:
      "No hidden fees, clear communication, and honest guidance every step of the way.",
  },
];

const HomeReasons = () => {
  const { ref, isInView } = useLazy(0.6);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);
  const readyToAnimate = isInView && videoLoaded;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1440);
    };

    window.addEventListener("resize", handleResize);
    // Set initial state in case of SSR or hydration mismatch
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (readyToAnimate && videoRef.current) {
      try {
        videoRef.current.play();
      } catch (error) {
        console.error(error);
      }
    }
  }, [readyToAnimate]);

  return (
    <section className={styles.homeReasons}>
      <h2 className="titleWhiteH2">
        Reasons to&nbsp;
        <span className="titlePrimaryH2">Choose Us</span>
      </h2>

      <div
        ref={ref}
        className={`${styles.homeReasons__cardContainer} ${
          isInView ? styles.homeReasons__cardContainer_active : ""
        }`}
      >
        <video
          ref={videoRef}
          src={"/videos/home/homeReasons.mp4"}
          className={styles.homeReasons__video}
          muted
          autoPlay
          onCanPlay={() => setVideoLoaded(true)}
        ></video>
        {reasonsData.map(
          (
            { image, webpImage, title, description, index: resIndex },
            index
          ) => (
            <TransitionProvider
              inProp={isInView}
              style={TransitionStyleTypes.zoomIn}
              delay={200 * (isMobile ? index : resIndex)}
              key={index}
              className={styles.homeReasons__card}
            >
              <ImageWebp
                src={image}
                srcSet={webpImage}
                alt={title}
                className={styles.homeReasons__cardIcon}
              />
              <h4 className={styles.homeReasons__title}>{title}</h4>
              <p className={styles.homeReasons__description}>{description}</p>
            </TransitionProvider>
          )
        )}
        {/* card */}
      </div>
      {/* cardContainer */}
    </section>
  );
};

export default HomeReasons;
