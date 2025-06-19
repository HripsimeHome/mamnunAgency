import styles from "./AboutFooter.module.scss";

const AboutFooter = () => {
  return (
    <section className={`${styles.aboutFooter} wrapperWhite wrapperPadding`}>
      <div className="container">
        <div className={styles.aboutFooter__textBlock}>
          <h2 className="titleSecondaryH2">
            Feel free to&nbsp;
            <span className="titlePrimaryH2">reach out&nbsp;</span>
            if you have any other questions or need further assistance!
          </h2>

          <div className={styles.aboutFooter__companyBlock}>
            <h3 className={styles.aboutFooter__companyName}>MAMNUN Agency</h3>
            <spasn>Reviews</spasn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFooter;
