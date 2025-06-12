import styles from "./ServicesTraveller.module.scss";
import { Link } from "react-router-dom"
import {
  contactsPagePath
} from "../../../router/path"



const ServicesTraveller = () => {
  return (
    <section className={`${styles.servicesTraveller} wrapperWhite`}>
      <div className="container">      
        <h2 className="titleBlackh2">Every Traveler&nbsp;           
          <span className="titlePurpleh2">is Unique         
          </span>
        </h2>  
        <p className={styles.ervicesTraveller__text}>
          We customize our services to perfectly align with your individual needs.
        </p>
 



        <div className={styles.servicesTraveller__cardContainer}>
          <div className={styles.servicesTraveller__card}>
            <div className={styles.servicesTraveller__cardInner}>
              <div className={styles.servicesTraveller__cardFront}>
                Front
              </div>


              
              <div className={styles.servicesTraveller__cardBack}>
                <h4 className={styles.servicesTraveller__cardBackTitle}>
                  Corporate Groups and Incentive Travel                  
                </h4>
                <siv className={styles.servicesTraveller__cardBackTextBlock}>
                  <p className={styles.servicesTraveller__cardBackText}>
                    We specialize in organizing seamless travel arrangements for corporate groups. Our comprehensive services, including group bookings and dedicated coordinators, ensure that your team can focus on what matters most.
                  </p>

                  <Link
                    to={contactsPagePath}
                    className="btnPrimary"
                  >             
                  Learn more
                  </Link>
                </siv>


              </div>
              {/* Back */}
            </div>
          </div>
          {/* flipCard */}


         <div className={styles.servicesTraveller__card}>
            <div className={styles.servicesTraveller__cardInner}>
              <div className={styles.servicesTraveller__cardFront}>
                Front
              </div>
              
              <div className={styles.servicesTraveller__cardBack}>
                Back
                <Link
                to={contactsPagePath}
                className="btnPrimary"
                >             
                Learn more
                </Link>
              </div>
            </div>
          </div>
          {/* flipCard */}

          <div className={styles.servicesTraveller__card}>
            <div className={styles.servicesTraveller__cardInner}>
              <div className={styles.servicesTraveller__cardFront}>
                Front
              </div>
              
              <div className={styles.servicesTraveller__cardBack}>
                Back
                <Link
                to={contactsPagePath}
                className="btnPrimary"
                >             
                Learn more
                </Link>
              </div>
            </div>
          </div>
          {/* flipCard */}
        </div>
        {/* flipCardContainer */}




    
      </div>
    </section>
  );
};

export default ServicesTraveller; 