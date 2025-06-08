import styles from "./AboutHeader.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {  
  logoBlackImage, 
  logoBlackWebpImage
  
} from "../../../assets/images";

const AboutHeader = () => {
  return (
    <section className={`${styles.aboutHeader} wrapperWhite`}>
      <div className="container">
        <div className={styles.aboutHeader__content}>
          <div className={styles.aboutHeader__text}>
            <h2 className={styles.aboutHeader__title}>
              MAMNUN is not just an education consultancy agency
            </h2>  
            <p>
              We are also a premier travel agency dedicated to providing unique travel packages and exceptional services. Our expertise extends beyond education, as we offer VIP passenger ground handling with Fast Track assistance at airports, ensuring a seamless travel experience for our clients. 
            </p>
            <p>
            Whether you are seeking educational opportunities or planning your next adventure, MAMNUN is here to cater to all your travel needs, including ground transportation across the globe. Experience the perfect blend of education and travel with MAMNUN, where your satisfaction is our top priority!
            </p>
          </div>
        
        
          <ImageWebp 
            src={logoBlackImage} 
            srcSet={logoBlackWebpImage}
            alt="MAMNUN Agency"                 
            className={styles.aboutHeader__logo} 
          />
        </div>      
      </div>      
   </section>  
  );
};

export default AboutHeader; 