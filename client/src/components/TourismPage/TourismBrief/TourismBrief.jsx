import React from "react";
import styles from "./TourismBrief.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import {
  tourismBriefImage,
  tourismBriefWebpImage,
} from "../../../assets/images";
import { useLazy } from "../../../hooks/useLazy";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

const TourismBrief = () => {
  const { ref, isInView } = useLazy(0.5);
  return (
    <section
      ref={ref}
      className={`${styles.tourismBrief} wrapperWhite wrapperPadding`}
    >
      <div className="container">
        <div className={styles.tourismBrief__content}>
          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.bottom}
            className={styles.tourismBrief__text1}
          >
            <p className="textMain">
              Our travel services to Uzbekistan are designed to offer a seamless
              and unforgettable experience. From customized private tours and
              group packages to hotel bookings, local guides, and
              transportation, we take care of every detail so you can focus on
              exploring. Whether you are a history enthusiast, adventure seeker,
              or cultural traveler, Uzbekistan promises a one-of-a-kind. From
              your first inquiry to your safe return home, we are with you every
              step of the way.
            </p>
          </TransitionProvider>

          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.right}
            className={styles.tourismBrief__imageColumn}
          >
            <ImageWebp
              src={tourismBriefImage}
              srcSet={tourismBriefWebpImage}
              alt="MAMNUN Agency"
              className={styles.tourismBrief__briefImg}
            />
          </TransitionProvider>

          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.bottom}
            delay={100}
            className={styles.tourismBrief__text2}
          >
            <p className="textMain">
              We also believe that the true magic of Uzbekistan lies in its
              people. That’s why our tours offer&nbsp;
              <span className="textPrimary">
                meaningful integration with locals
              </span>
              &nbsp; — from hands-on experiences with artisans in their
              workshops, to home-cooked meals with Uzbek families, to
              participating in traditional celebrations and customs. These
              moments create real connections and lifelong memories.
            </p>
          </TransitionProvider>
        </div>
      </div>
    </section>
  );
};

export default TourismBrief;
