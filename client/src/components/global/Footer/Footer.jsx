 
import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
//import { footerMenuItems } from "../../../constants/menuItems"
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
//import Svg from "../../layout/Svg/Svg";

import {    
  homePagePath
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
    <footer className={styles.footer}>      
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
            &copy; {new Date().getFullYear()} Deepsu.ai. All rights reserved.
          </p>          
        </div>        
      </div>      
    </footer>
  );
};

export default Footer;