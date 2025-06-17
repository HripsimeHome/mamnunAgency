import styles from "./HeaderMenu.module.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

// import TransitionProvider, {
//   TransitionStyleTypes,
// } from "../../../providers/TransitionProvider";

// import { useLazy } from "../../../hooks/useLazy";


import {
  homePagePath,
  aboutPagePath,
  tourismPagePath,
  educationPagePath,
  servicesPagePath,
  contactsPagePath,
} from "../../../router/path";

// import { 
//   headerMenuItems
//  } from "../../../constants/menuItems";

 import {
   logoImage,
   logoWebpImage
 } from "../../../assets/images";

import {   
   burgerIcon,
   crossIcon 
} from "../../../assets/svg";

const headerMenuItems = [
  {
    text: "Home",
    link: homePagePath,
  },
  {
    text: "About us",
    link: aboutPagePath,
  },
  {
    text: "Travel to Uzbekistan",
    link: tourismPagePath,
  },
  {
    text: "Study Abroad Consulting",
    link: educationPagePath,
  },
  {
    text: "Extra VIP Services",
    link: servicesPagePath,
  },
  {
    text: "Contact us",
    link: contactsPagePath,
  },
];



const HeaderMenu = () => {

 // const { isInView, ref } = useLazy(0.8);
  const [ isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerMenu}>
      <div className={`${styles.headerMenu__container} container`}>
        {/* Left Block */}        
        <div>        
          <Link 
            to={homePagePath}>            
              <ImageWebp 
                src={logoImage} 
                srcSet={logoWebpImage}
                alt="MAMNUN Agency"                 
                className={styles.headerMenu__logoImg} />             
          </Link> 
          </div>
             
            <div>       
            <nav className={`
              ${styles.headerMenu__menu}
              ${isMenuOpen ? styles.headerMenu__menu_open : ""}`}>
              {isMenuOpen && (
                
                <>           
                 
                  <button 
                    className={styles.headerMenu__btnClose} 
                    onClick={toggleMenu}>
                    <Svg 
                      id={crossIcon} 
                      className={styles.headerMenu__crossIcon} />
                  </button>                
                </>              
              )}

              {headerMenuItems.map(({ text, link }, index) => (
                
                <NavLink
                  to={link}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.headerMenu__menuLink} ${styles.headerMenu__menuLink_active}`
                      : styles.headerMenu__menuLink
                  }
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  {text}
                </NavLink>              
              ))}         
                        
            </nav>  
             <button 
            className={styles.headerMenu__btnBurger} 
            onClick={toggleMenu}>
            <Svg 
              id={burgerIcon} 
              className={styles.headerMenu__burgerIcon} />
          </button>
              </div>       
         

        {/* Right Block */}
           
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && 
        <div 
          className={styles.headerMenu__overlay} 
          onClick={toggleMenu} />}
    </div>
  );
};

export default HeaderMenu;