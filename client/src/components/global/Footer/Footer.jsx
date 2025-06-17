 
import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
//import { footerMenuItems } from "../../../constants/menuItems"
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
//import Svg from "../../layout/Svg/Svg";

import {    
  homePagePath,
  aboutPagePath,
  tourismPagePath,
  educationPagePath,  
  servicesPagePath,
  contactsPagePath, 
  imprintPagePath,
  privacyPolicyPagePath,
  cookiePolicyPagePath
} from "../../../router/path";

import {
  logoBlackImage,
  logoBlackWebpImage,

  uzcardImage,
  uzcardWebpImage,

  humoImage,
  humoWebpImage,

  mastercardImage,
  mastercardWebpImage,

  visaImage,
  mvisaWebpImage,
} from "../../../assets/images";

import {
  //moneyIcon,
 
} from "../../../assets/svg";
 

// import {  
//   emailAddress  
// } from "../../../constants/contacts";

const paymentsData = [
  {
    image: uzcardImage,
    webpImage: uzcardWebpImage,  
    alt: "UZCARD",     
  }, 

  {
    image: humoImage,
    webpImage: humoWebpImage,    
    alt: "HUMO",    
  },

  {
    image: mastercardImage,
    webpImage: mastercardWebpImage, 
    alt: "Visa",       
  }, 

  {
    image: visaImage,
    webpImage: mvisaWebpImage,    
    alt: "Mastercard",    
  }, 
]


const Footer = () => {
  return (
    <footer className={`${styles.footer} wrapperWhite`}>  
     <div className="container">  
      <div className={styles.footer__menuContainer}>
        <div className={styles.footer__logoBlock}>
          <Link 
            to={homePagePath}              
            >
            <ImageWebp  
              src={logoBlackImage}
              srcSet={logoBlackWebpImage}
              alt="Logo" 
              className={styles.footer__logoImg}
              pictureClass={styles.footer__logoImgPosition}
              />              
              MAMNUN Agency
          </Link>           
        </div>  

        <div>
          Menu
        </div>
        {/* Menu */}
      </div> 
      {/* menuContainer */}


      <div className={styles.footer__bottom}>
        <div className={styles.footer__socialMedia}>
          <h4>
            Our social media channels:
          </h4>
          icons
        </div>

        <div className={styles.footer__feedback}>
          <h4>
            Leave Your feedback Trustpilot
          </h4>
          <h5>
            MAMNUN Agency
          </h5>       
        </div>

        <div className={styles.footer__payments}>
         <h4>
          We accept:
          </h4>
          
          <div lassName={styles.footer__paymentsCard}>
          {paymentsData.map(({image, webpImage, alt}, index) => (
          <ImageWebp 
            key={index}
            src={image} 
            srcSet={webpImage}
            alt={alt}                
            className={styles.footer__paymentsImg} 
          /> 
          ))}
          </div>
        </div>
      </div>
      {/* footer__bottom */}


      <div className={styles.footer__copyrightContainer}>
        <p className={styles.footer__copyright}>
          Copyright &copy; {new Date().getFullYear()} MG Elektro LLC. All rights reserved.
          <br />
          Designed & Created by <a href="https://webscover.com/" target="_blank" rel="noreferrer">webscover.com.</a>
        </p>  

        <div>
          <Link
            to={privacyPolicyPagePath}>
            Privacy Policy
          </Link>       

          <Link
            to={cookiePolicyPagePath}>
            Cookie Policy
          </Link>
        </div>
      </div>
      {/* copyrightContainer */}     

      </div>      
    </footer>
  );
};

export default Footer;


//           <Link
//             to={imprintPagePath}>
//             Impirit
//           </Link>
//           <br /> 

