import styles from "./AboutMap.module.scss";

const AboutMap = () => {
  return (
    <section className={`${styles.aboutMap} wrapperBlack`}>
      <div className="container">
        <h2 className="titleWhiteH2">
          We Operate&nbsp;
          <span className="titlePrimarryH2">Worldwide</span>
        </h2>
      </div>
    </section>
  );
};

export default AboutMap;
