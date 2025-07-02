import styles from "./AboutVideo.module.scss";
import { useLazy } from "../../../../hooks/useLazy";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Svg from "../../../layout/Svg/Svg";
import { muteVideoIcon, unmuteVideoIcon } from "../../../../assets/svg";

const AboutVideo = () => {
  const { ref, isInView } = useLazy(undefined, undefined, true);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current
          .play()
          .catch((err) => console.log("Play failed:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section ref={ref} className={`${styles.aboutVideo}`}>
      <div className="container">
        <div className={styles.aboutVideo__videoContainer}>
          <video
            ref={videoRef}
            className={styles.aboutVideo__video}
            autoPlay
            muted={muted}
            playsInline
          >
            <source src="/videos/about/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            className={styles.aboutVideo__muteBtn}
            onClick={() => {
              setMuted((prev) => {
                const newMuted = !prev;
                if (videoRef.current) {
                  videoRef.current.muted = newMuted;
                }
                return newMuted;
              });
            }}
          >
            <Svg
              className={styles.aboutVideo__muteIcon}
              id={muted ? unmuteVideoIcon : muteVideoIcon}
            />
          </button>
          <p className="paragraphWhite ptLg">
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
