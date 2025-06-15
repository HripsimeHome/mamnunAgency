import styles from "./ServicesServices.module.scss";

const ServicesServices = () => {
  return (
    <section className={`${styles.servicesServices} wrapperBlack`}>
      <div className="container">
        <h2 className="titleWhiteH2">
          Our&nbsp;
          <span className="titlePrimaryH2">Services</span>
        </h2>

        <div className={styles.servicesServices__flipCard}>
          <div className={styles.servicesServices__flipCardInner}>
            <div className={styles.servicesServices__front}>Front</div>
            <div className={styles.servicesServices__back}>Back</div>
          </div>
        </div>
        {/* flipCard */}
      </div>
    </section>
  );
};

export default ServicesServices;
