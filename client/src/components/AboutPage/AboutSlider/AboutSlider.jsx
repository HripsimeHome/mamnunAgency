import styles from "./AboutSlider.module.scss";
import Svg from "../../layout/Svg/Svg";

import {
  educationIcon, 
  opportunitiesIcon,
  scholarshipsIcon,
  servicesIcon,
  travelIcon,
  VIPIcon,
  transportationIcon,
  supportIcon,
  culturalDifferencesIcon,
  consultationIcon,
  relationshipsIcon,
  feedbackIcon,
  trustIcon,
  partnerIcon

} from "../../../assets/svg";

 const slideDarta = [
  {
    icon: educationIcon,
    description: "At MAMNUN, we are passionate about both education and travel. We are committed to helping you create lasting memories while achieving your academic aspirations."
  }, 

  {
    icon: opportunitiesIcon,
    description: "We have established partnerships with ranked universities worldwide, giving students access to a diverse range of programs and opportunities."
  }, 

  {
    icon: scholarshipsIcon,
    description: "Our track record speaks for itself. We have successfully assisted numerous students in gaining admission to prestigious institutions and securing scholarships."
  }, 

  {
    icon: servicesIcon,
    description: "We are dedicated to providing transparent, reliable, and high-quality services to ensure that every student has the best chance of success in their academic journey."
  }, 

  {
    icon: travelIcon,
    description: "In addition to our educational services, we offer customized travel packages designed to create unique and memorable experiences for our clients."
  },

  {
    icon: VIPIcon,
    description: "Enjoy our VIP passenger ground handling services, which include Fast Track assistance at airports, allowing you to bypass long lines and enjoy a stress-free travel experience."
  },

  {
    icon: transportationIcon,
    description: "We provide dependable ground transportation services worldwide, ensuring you have safe and comfortable travel options at your destination."
  },

  {
    icon: supportIcon,
    description: "Our experienced team is dedicated to providing expert advice and support, helping you navigate both educational opportunities and travel logistics with ease."
  },

  {
    icon: culturalDifferencesIcon,
    description: "We offer valuable information about cultural differences and local customs, helping you adapt and thrive in new environments."
  },

  {
    icon: consultationIcon,
    description: "From the initial consultation to your arrival at your destination, we provide continuous support, ensuring you feel confident and well-prepared throughout your journey."
  },

  {
    icon: relationshipsIcon,
    description: "We prioritize maintaining strong relationships with our students and their families, ensuring open communication and support throughout the entire process."
  },

  {
    icon: feedbackIcon,
    description: "We are focused on achieving results and regularly seek feedback from both our partners and customers, allowing us to continuously improve our services and meet your needs effectively."
  },

  {
    icon: trustIcon,
    description: "We believe in transparency. You can trust that there are no hidden fees, information, or surprises—everything is clearly communicated to ensure your peace of mind."
  },

  {
    icon: partnerIcon,
    description: "Choose MAMNUN as your trusted partner in education and travel, and let us help you turn your dreams into reality—ensuring your satisfaction every step of the way!"
  }  
 ]

const AboutSlider = () => {
  return (
    <section className={`${styles.aboutSlider} wrapperWhite`}>
      <div className="container">
        <div className={styles.aboutSlider__slideContainer}> 
        {slideDarta.map(({ icon, description }, index) => (       
          <div className={styles.aboutSlider__slide}> 
            <Svg            
              id={icon}
              className={styles.aboutSlider__icon}
            />
            <p className={styles.aboutSlider__description}>               
              {description}
            </p> 
           </div>
          ))}              
          </div>{/* slide */}             
      </div>      
   </section>  
  );
};

export default AboutSlider; 