import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import { footerMenuItems, paymentsData } from "../../../constants/footerInfo";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {
  companyLabelImage,
  companyLabelWebpImage,
} from ".././../../assets/images";

import {
  homePagePath,
  privacyPolicyPagePath,
  cookiePolicyPagePath,
} from "../../../router/path";

import { logoBlackImage, logoBlackWebpImage } from "../../../assets/images";
import { Fragment } from "react";

// import {
//   emailAddress
// } from "../../../constants/contacts";

const Footer = () => {
  return (
    <footer className={`${styles.footer} wrapperWhite wrapperPadding`}>
      <div className="container">
        <div className={styles.footer__container}>
          <div className={styles.footer__logoBlock}>
            <Link to={homePagePath}>
              <ImageWebp
                src={logoBlackImage}
                srcSet={logoBlackWebpImage}
                alt="Logo"
                className={styles.footer__logoImg}
                pictureClass={styles.footer__logoImgPosition}
              />
            </Link>
            MAMNUN Agency
          </div>

          {footerMenuItems.map((menu, index) => (
            <div key={index} className={styles.footer__menuItem}>
              <h3 className={styles.footer__menuTitle}>{menu.title}</h3>
              <nav className={styles.footer__menu}>
                {menu.items.map((item, i) => {
                  const LinkTag = item.isOutLink ? "a" : NavLink;

                  return (
                    <Fragment key={i}>
                      {item.link ? (
                        <LinkTag
                          {...(item.isOutLink
                            ? { href: item.link }
                            : { to: item.link })}
                          to={item.link}
                          target={item.target ? item.target : "_self"}
                          rel={
                            item.target === "_blank" ? "noreferrer" : undefined
                          }
                          className={
                            item.isOutLink
                              ? styles.footer__menuLink
                              : ({ isActive }) =>
                                  isActive
                                    ? `${styles.footer__menuLink} ${styles.footer__menuLink_active}`
                                    : styles.footer__menuLink
                          }
                        >
                          {item.text}
                        </LinkTag>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </Fragment>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
        {/* menuContainer */}
        <div className={styles.footer__info}>
          <div className={styles.footer__sociaBlock}>
            <h4 className={styles.footer__sociaBlockTItle}>
              Our social media channels:
            </h4>

            <SocialIcons />
          </div>{" "}
          {/* socialMedia */}
          <div className={styles.footer__feedback}>
            <h4>Leave Your feedback Trustpilot</h4>
            <a href="#" target="_blank">
              <ImageWebp
                src={companyLabelImage}
                srcSet={companyLabelWebpImage}
                alt="MAMNUN Agency"
                className={styles.footer__img}
                pictureClass={styles.footer__imgPosition}
              />
            </a>
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
          <div className={styles.footer__col}></div>
          {/* Need Empty div */}

          <div className={styles.footer__col}>
            <p className={styles.footer__copyright}>
              Copyright &copy; {new Date().getFullYear()} MG Elektro LLC. All
              rights reserved.
              <br />
              Designed & Created by{" "}
              <a href="https://webscover.com/" target="_blank" rel="noreferrer">
                webscover.com.
              </a>
            </p>
          </div>

          <div className={styles.footer__col}>
            <div className={styles.footer__privacyBlock}>
              <Link to={privacyPolicyPagePath}>Privacy Policy</Link>
              <Link to={cookiePolicyPagePath}>Cookie Policy</Link>
            </div>
          </div>
        </div>
        {/* copyrightContainer */}
      </div>
    </footer>
  );
};

export default Footer;
