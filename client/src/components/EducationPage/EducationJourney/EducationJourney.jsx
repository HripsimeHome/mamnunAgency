// src/components/pages/EducationJourney/EducationJourney.jsx
import { useLazy } from "../../../hooks/useLazy";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import styles from "./EducationJourney.module.scss";

const assistData = [
  "Tailoring programs to meet your unique needs",
  "Expertly handling your documentation and applications",
  "Monitoring every step to avoid mistakes, delays, and rejections",
  "Assisting with visa applications and interview preparation",
  "Providing comprehensive support before and after your application, addressing all your educational and living concerns abroad!",
];

const notAssistData = [
  "We do not issue visas abroad.",
  "We do not work with individuals who are not committed to their education.",
  "We do not take responsibility for the actions of applicants while abroad.",
  "We do not compromise on quality; we always deliver on our promises.",
  "We do not abandon our clients halfway; we see you through to the finish line!",
];

const EducationJourney = () => {
  const { ref, isInView } = useLazy(0.7);
  return (
    <section
      ref={ref}
      className={`${styles.educationJourney} wrapperWhite wrapperPadding`}
    >
      <div className="container">
        <h2
          className={`${styles.educationJourney__titlePosition} titleSecondaryH2 center`}
        >
          Unlock Your Global Education Journey{" "}
          <span className="titlePrimaryH2">with Us!</span>
        </h2>

        <div className={styles.educationJourney__journeyContainer}>
          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.right}
            className={styles.educationJourney__journeyColumn}
          >
            <h3 className={`${styles.educationJourney__title} titlePrimaryH3 `}>
              How We Assist You:
            </h3>
            <ul
              className={`
                ${styles.educationJourney__journeyList}
                ${styles.educationJourney__checkList}
              `}
            >
              {assistData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </TransitionProvider>

          <TransitionProvider
            inProp={isInView}
            style={TransitionStyleTypes.right}
            delay={100}
            className={styles.educationJourney__journeyColumn}
          >
            <h3 className={`${styles.educationJourney__title} titlePrimaryH3 `}>
              What We Do not Do:
            </h3>
            <ul
              className={`
                ${styles.educationJourney__journeyList}
                ${styles.educationJourney__crossList}
              `}
            >
              {notAssistData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </TransitionProvider>
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;
