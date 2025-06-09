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
            <p  className={styles.aboutHeader__firstParagraph}>
              We are also a premier travel agency dedicated to providing unique travel packages and exceptional services. Our expertise extends beyond education, as we offer VIP passenger ground handling with Fast Track assistance at airports, ensuring a seamless travel experience for our clients. 
            </p>
            <p className={styles.aboutHeader__secondParagraph}>
            Whether you are seeking educational opportunities or planning your next adventure, MAMNUN is here to cater to all your travel needs, including ground transportation across the globe. Experience the perfect blend of education and travel with MAMNUN, where your satisfaction is our top priority!
            </p>
          </div>        
        
          <ImageWebp 
            src={logoBlackImage} 
            srcSet={logoBlackWebpImage}
            alt="MAMNUN Agency"                 
            className={styles.aboutHeader__logoAnim} 
          />
        </div>{/* content */}

        <div className={styles.aboutHeader__briefContainer}> 
          <div className={styles.aboutHeader__briefBlock}> 
            <h2 className="titleBlackh2">Our&nbsp;
              <span className="titlePurpleh2">Vision             
              </span>
            </h2>  
            <p className={styles.aboutHeader__description}>               
              To bridge global learning opportunities, providing diverse educational programs worldwide to students while crafting unique travel experiences and memorable journeys customized to individual aspirations. Through education and travel, we strive to foster a global perspective, and cultural understanding.
            </p> 
          </div>


          <div className={styles.aboutHeader__briefBlock}> 
            <h2 className="titleBlackh2">Our&nbsp;
              <span className="titlePurpleh2">Mission             
              </span>
            </h2>  
            <p className={styles.aboutHeader__description}>               
              To challenge cultural stereotypes by promoting education and travel as opportunities for personal and professional growth for everyone.
            </p> 
          </div>
        </div>
        {/* briefContainer */}

      </div>      
   </section>  
  );
};

export default AboutHeader; 