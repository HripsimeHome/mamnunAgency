 
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

      </div>

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
//   





//           <Link
//             to={imprintPagePath}>
//             Impirit
//           </Link>
//           <br /> 

