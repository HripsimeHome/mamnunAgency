import styles from "./HomeHeader.module.scss";
import MainBtn from "../../layout/MainBtn/MainBtn";
import { useEffect, useState } from "react";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

const mottos = [
  {
    title: "Travel Far",
    button: "Tourism",
  },
  {
    title: "Learn Deep",
    button: "Education",
  },
  {
    title: "Experience True Satisfaction",
    button: "VIP Services",
  },
];

const HomeHeader = () => {
  const [activeMottoIndex, setActiveMottoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMottoIndex((prev) => {
        if (prev === mottos.length - 1) {
          clearInterval(interval);
          return prev;
        } else return prev + 1;
      });
    }, 5000);
  }, []);
  return (
    <section className={styles.homeHeader}>
      {process.env.NODE_ENV !== "development" && (
        <video autoPlay muted loop className={styles.homeHeader__video}>
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
          >
            {motto.button}
          </MainBtn>
        ))}
      </div>
    </section>
  );
};

export default HomeHeader;
