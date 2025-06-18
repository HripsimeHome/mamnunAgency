import styles from "./EducationJourney.module.scss";

const EducationJourney = () => {
  return (
    <section className={`${styles.educationJourney} wrapperWhite`}>
      <div className="container">
        <h2 className="titleSecondaryH2 center">
          Unlock Your Global Education Journey&nbsp;
          <span className="titlePrimaryH2">with Us!</span>
        </h2>

        <div className={styles.educationJourney__journeyBlock}>
          <div className={styles.educationJourney__journeyColumn}>
            <h3 className="titlePrimaryH3">How We Assist You:</h3>

            <ul className={styles.educationJourney__journeyList}>
              <li>Tailoring programs to meet your unique needs</li>
              <li>Expertly handling your documentation and applications</li>
              <li>
                Monitoring every step to avoid mistakes, delays, and rejections
              </li>
              <li>
                Assisting with visa applications and interview preparation
              </li>
              <li>
                Providing comprehensive support before and after your
                application, addressing all your educational and living concerns
                abroad!
              </li>
            </ul>
          </div>

          <div className={styles.educationJourne__journeyColumn}>
            <h3 className="titleSecondaryH3">What We Do not Do:</h3>

            <ul className={styles.educationJourney__journeyList}>
              <li>We do not issue visas abroad.</li>
              <li>
                We do not work with individuals who are not committed to their
                education.
              </li>
              <li>
                We do not take responsibility for the actions of applicants
                while abroad.
              </li>
              <li>
                We do not compromise on quality; we always deliver on our
                promises.
              </li>
              <li>
                We do not abandon our clients halfway; we see you through to the
                finish line!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;
