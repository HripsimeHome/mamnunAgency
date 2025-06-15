 
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
  logoImage,
  logoWebpImage
} from "../../../assets/images";

import {
  //moneyIcon,
 
} from "../../../assets/svg";
 

// import {  
//   emailAddress  
// } from "../../../constants/contacts";


const Footer = () => {
  return (
    <footer className={`${styles.footer} wrapperWhite`}>      
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__logoBlock}>
          <Link 
            to={homePagePath}              
            >
            <ImageWebp  
              src={logoImage}
              srcSet={logoWebpImage}
              alt="Logo" 
              className={styles.footer__logoImg}
              pictureClass={styles.footer__logoImgPosition}
              />
          </Link>
          <p className={styles.footer__copyright}>
            Copyright &copy; {new Date().getFullYear()} MG Elektro LLC. All rights reserved.
            <br />
            Designed & Created by <a href="https://webscover.com/" target="_blank" rel="noreferrer">webscover.com.</a>
          </p>  


          <Link
            to={imprintPagePath}>
            Impirit
          </Link>
          <br /> 

          <Link
            to={privacyPolicyPagePath}>
            Privacy Policy
          </Link>
           <br /> 

              <Link
            to={cookiePolicyPagePath}>
            Cookie Policy
          </Link>



        </div>        
      </div>      
    </footer>
  );
};

export default Footer;
//   