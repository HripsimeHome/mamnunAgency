import styles from "./ServicesTraveller.module.scss";

const ServicesTraveller = () => {
  return (
    <section className={`${styles.servicesTraveller} wrapperWhite`}>
      <div className="container">      
        <h2 className="titleBlackh2">Every Traveler&nbsp;           
          <span className="titlePurpleh2">is Unique         
          </span>
        </h2>  
 

        <div className={styles.servicesTraveller__flipCard}>
          <div className={styles.servicesTraveller__flipCardInner}>
            <div className={styles.servicesTraveller__front}>
              Front
            </div>
            <div className={styles.servicesTraveller__back}>
              Back
            </div>
          </div>
        </div>


    
      </div>
    </section>
  );
};

export default ServicesTraveller; 