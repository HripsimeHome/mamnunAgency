/* eslint-disable react/style-prop-object */
import { useEffect, useRef, useState } from "react";
import styles from "./AboutMap.module.scss";
import { useLazy } from "../../../../hooks/useLazy";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";
import { aboutMapImage, aboutMapWebpImage } from "../../../../assets/images";
import TransitionProvider from "../../../../providers/TransitionProvider";

const AboutMap = () => {
  const videoRef = useRef(null);
  const { isInView, ref } = useLazy(0.6);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      videoRef.current.play();
    }
  }, [isInView]);

  return (
    <section ref={ref} className={`${styles.aboutMap} wrapperBlack`}>
      <div className={`container ${styles.aboutMap__container}`}>
        <h2 className={`titlePrimaryH2 center ${styles.aboutMap__title}`}>
          We&nbsp;
          <span className={`titleWhiteH2 ${styles.aboutMap__titleWeight}`}>
            Operate Worldwide
          </span>
        </h2>
        <video
          ref={videoRef}
          src="/videos/about/aboutMap.mp4"
          muted
          onCanPlay={() => setVideoLoaded(true)}
          className={styles.aboutMap__video}
          playsInline
          disablePictureInPicture
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          preload="auto"
        ></video>
        <TransitionProvider
          inProp={!videoLoaded}
          style={"opacity"}
          className={styles.aboutMap__teaserImgWrapper}
        >
          <ImageWebp
            src={aboutMapImage}
            srcSet={aboutMapWebpImage}
            alt="map"
            className={styles.aboutMap__teaserImg}
          />
        </TransitionProvider>
      </div>
    </section>
  );
};

export default AboutMap;
