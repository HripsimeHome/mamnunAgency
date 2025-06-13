import styles from "./ServicesBook.module.scss";

const ServicesBook = () => {
  return (
    <section className={`${styles.servicesBook} wrapperWhite`}>
      <div className="container"> 
        <div className={styles.servicesBook__formContainer}>
          <div className={styles.servicesBook__form}>
            <p className={styles.servicesBook__formTitle}>Experience seamless travel with our reliable services worldwide.&nbsp;           
              <span className="textPurple">Book your journey today         
              </span>
              and enjoy the comfort and convenience you deserve!
            </p> 

            <button 
              className={`${styles.servicesBook__formBtn} btnPrimary`}
            >
            Send
            </button>
          </div> 
        </div> 
        {/* formContainer */}
      </div>
    </section>
  );
};

export default ServicesBook;