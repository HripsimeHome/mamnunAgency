import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import { footerMenuItems, paymentsData } from "../../../constants/footerInfo";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {
  homePagePath,
  privacyPolicyPagePath,
  cookiePolicyPagePath,
} from "../../../router/path";

import { 
  logoBlackImage, 
  logoBlackWebpImage 
} from "../../../assets/images";

// import {
//   emailAddress
// } from "../../../constants/contacts";

const Footer = () => {
  return (
    <footer className={`${styles.footer} wrapperWhite`}>
      <div className="container">
        <div className={styles.footer__container}>
          <div className={styles.footer__logoBlock}>
            <Link to={homePagePath}>
              <ImageWebp
                src={logoBlackImage}
                srcSet={logoBlackWebpImage}
                alt="Logo"
                className={styles.footer__logoImg}
                //pictureClass={styles.footer__logoImgPosition} 
              />
              MAMNUN Agency
            </Link>
          </div>

          <div className={styles.footer__menuContainer}>
            {footerMenuItems.map((menu, index) => (
              <div key={index}>
                <h3 className={styles.footer__menuTitle}>{menu.title}</h3>
                <nav className={styles.footer__menu}>
                  {menu.items.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.link}
                      target={item.target ? item.target : "_self"}
                      rel={item.target === "_blank" ? "noreferrer" : undefined}
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.footer__menuLink} ${styles.footer__menuLink_active}`
                          : styles.footer__menuLink
                      }
                    >
                      {item.text}
                    </NavLink>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>{/* menuContainer */}

        <div className={styles.footer__info}>
          <div className={styles.footer__sociaBlock}>
            <h4>Our social media channels:</h4>

            <SocialIcons />
          </div>{" "}
          {/* socialMedia */}
          <div className={styles.footer__feedback}>
            <h4>Leave Your feedback Trustpilot</h4>
            <h5>MAMNUN Agency</h5>
          </div>{" "}
          {/* feedback */}
          <div className={styles.footer__paymentsBLock}>
            <h4>We accept:</h4>

            <div className={styles.footer__paymentsCard}>
              {paymentsData.map(({ image, webpImage, alt }, index) => (
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
        </div>{" "}
        {/* footer__info */}
        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            Copyright &copy; {new Date().getFullYear()} MG Elektro LLC. All
            rights reserved.
            <br />
            Designed & Created by{" "}
            <a href="https://webscover.com/" target="_blank" rel="noreferrer">
              webscover.com.
            </a>
          </p>

          <div className={styles.footer__privacyBlock}>
            <Link to={privacyPolicyPagePath}>Privacy Policy</Link>

            <Link to={cookiePolicyPagePath}>Cookie Policy</Link>
          </div>
        </div>
        {/* copyrightContainer */}
      </div>
    </footer>
  );
};

export default Footer;
