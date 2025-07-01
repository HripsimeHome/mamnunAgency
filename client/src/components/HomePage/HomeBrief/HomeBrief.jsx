import styles from "./HomeBrief.module.scss";
import { useNavigate } from "react-router-dom";
import MainBtn from "../../layout/MainBtn/MainBtn.jsx";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {
  missionImage,
  missionWebpImage,
  valuesImage,
  valuesWebpImage,
} from "../../../assets/images";

import { aboutPagePath } from "../../../router/path";
import { useLazy } from "../../../hooks/useLazy.js";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider.jsx";

const HomeBrief = () => {
  const navigate = useNavigate();
  const { isInView, ref } = useLazy(0.4);
  return (
    <section ref={ref} className="wrapperWhite wrapperPadding">
      <div className={`${styles.homeBrief} container`}>
        <TransitionProvider
          inProp={isInView}
          style={TransitionStyleTypes.right}
          className={styles.homeBrief__column}
        >
          <p className="textMain">
            We are a proud family-owned company dedicated to delivering
            exceptional education and travel services customized just for you.
            Our mission is to empower students to achieve their academic and
            career aspirations by offering comprehensive support at every
            stage—from university admissions to visa assistance. In addition to
            our educational services, we specialize in crafting unique travel
            experiences that ensure every journey is memorable and enriching.
          </p>

          <ImageWebp
            src={missionImage}
            srcSet={missionWebpImage}
            alt="MAMNUN Agency"
            className={styles.homeBrief__missionImg}
          />
        </TransitionProvider>

        <TransitionProvider
          inProp={isInView}
          style={TransitionStyleTypes.left}
          className={styles.homeBrief__column}
        >
          <p className="textMain">
            Our commitment to quality and transparency means you can trust us to
            guide you through the process with clarity and confidence. Your
            satisfaction is our top priority, and we are here to help you turn
            your dreams into reality.
          </p>

          <ImageWebp
            src={valuesImage}
            srcSet={valuesWebpImage}
            alt="MAMNUN Agency"
            className={styles.homeBrief__valuesImg}
          />

          <MainBtn
            onClick={() => navigate(aboutPagePath)}
            className={styles.homeBrief__btn}
          >
            Who We Are
          </MainBtn>
        </TransitionProvider>
      </div>
    </section>
  );
};

export default HomeBrief;
