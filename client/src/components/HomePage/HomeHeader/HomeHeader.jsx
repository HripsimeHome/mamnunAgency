import styles from "./HomeHeader.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainBtn from "../../layout/MainBtn/MainBtn";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

import {
  tourismPagePath,
  educationPagePath,
  servicesPagePath,
} from "../../../router/path";
import { homeVideoPosterImage } from "../../../assets/images";

const HomeHeader = () => {
  const navigate = useNavigate();
  const [activeMottoIndex, setActiveMottoIndex] = useState(0);

  const mottos = [
    {
      title: "Travel Far",
      button: "Tourism",
      path: tourismPagePath,
    },
    {
      title: "Learn Deep",
      button: "Education",
      path: educationPagePath,
    },
    {
      title: "Experience True Satisfaction",
      button: "VIP Services",
      path: servicesPagePath,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMottoIndex((prev) => {
        if (prev === mottos.length - 1) {
          return 0;
        } else return prev + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className={styles.homeHeader}>
      {process.env.NODE_ENV !== "development" && (
        <video
          autoPlay
          muted
          loop
          className={styles.homeHeader__video}
          poster={homeVideoPosterImage}
        >
          Your browser does not support the video tag.
          <source src="/videos/home/home.mp4" type="video/mp4" />
        </video>
      )}

      <div className={styles.homeHeader__mottoTextContainer}>
        {mottos.map((motto, index) => (
          <TransitionProvider
            inProp={index === activeMottoIndex}
            style={TransitionStyleTypes.left}
            className={styles.homeHeader__mottoTextWrapper}
            key={index}
          >
            <h2 className={styles.homeHeader__mottoText}>{motto.title}</h2>
          </TransitionProvider>
        ))}
      </div>
      <div className={`container ${styles.homeHeader__mottoBtnsWrapper}`}>
        {mottos.map((motto, index) => (
          <MainBtn
            active={index === activeMottoIndex}
            className={"textWhite"}
            key={index}
            onClick={() => navigate(motto.path)}
          >
            {motto.button}
          </MainBtn>
        ))}
      </div>
    </section>
  );
};

export default HomeHeader;
