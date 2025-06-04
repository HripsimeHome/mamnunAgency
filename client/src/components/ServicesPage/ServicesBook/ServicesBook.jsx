import styles from "./ServicesBook.module.scss";

const ServicesBook = () => {
  return (
    <section className={`${styles.servicesBook} wrapperWhite`}>
      <div className="container">      
        <p className="titleBlackh2">Experience seamless travel with our reliable services worldwide.&nbsp;           
          <span className="titlePurpleh2">Book your journey today         
          </span>
          and enjoy the comfort and convenience you deserve!
        </p>    
      </div>
    </section>
  );
};

export default ServicesBook; 

  