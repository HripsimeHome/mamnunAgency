import styles from "./AboutVideo.module.scss";
import { useLazy } from "../../../../hooks/useLazy";
import { useRef } from "react";
import { useEffect } from "react";

const AboutVideo = () => {
  const { ref, isInView } = useLazy(undefined, undefined, true);
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section ref={ref} className={`${styles.aboutVideo}`}>
      <div className="container">
        <div className={styles.aboutVideo__videoContainer}>
          <video ref={videoRef} className={styles.aboutVideo__video} loop muted>
            <source src="/videos/about/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p className={styles.aboutVideo__text}>
            We are also a premier travel agency dedicated to providing unique
            travel packages and exceptional services. Our expertise extends
            beyond education, as we offer VIP passenger ground handling with
            Fast Track assistance at airports, ensuring a seamless travel
            experience for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutVideo;
