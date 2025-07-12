import styles from "./ServicesBook.module.scss";
import ServiceBookForm from "./ServiceBookForm/ServiceBookForm.jsx";

const ServicesBook = () => {
  return (
    <section className={`${styles.servicesBook} wrapperWhite wrapperPadding`}>
      <div className="container">
        <div className={styles.servicesBook__formContainer}>
          <div className={styles.servicesBook__form}>
            <p className={styles.servicesBook__formTitle}>
              Experience seamless travel with our reliable services
              worldwide.&nbsp;
              <span className="textPrimary">Book your journey today</span>
              &nbsp;and enjoy the comfort and convenience you deserve!
            </p>

            <ServiceBookForm />
          </div>
        </div>
        {/* formContainer */}
      </div>
    </section>
  );
};

export default ServicesBook;
