import styles from "./HeaderMenu.module.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import Svg from "../../layout/Svg/Svg";

import {
  homePagePath,
  aboutPagePath,
  tourismPagePath,
  educationPagePath,
  servicesPagePath,
  contactsPagePath,
} from "../../../router/path";

import { logoImage, logoWebpImage } from "../../../assets/images";
import { burgerIcon, crossIcon } from "../../../assets/svg";

// Your full menu in order, with 'group' for service submenu items
const allMenuItems = [
  { text: "Home", link: homePagePath, group: null },
  { text: "About us", link: aboutPagePath, group: null },
  // services grouped items
  { text: "Travel to Uzbekistan", link: tourismPagePath, group: "services" },
  {
    text: "Study Abroad Consulting",
    link: educationPagePath,
    group: "services",
  },
  { text: "Extra VIP Services", link: servicesPagePath, group: "services" },
  { text: "Contact us", link: contactsPagePath, group: null },
];

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  // Separate items for desktop menu rendering with order preserved:
  // Main menu items excluding services
  const mainMenuItems = allMenuItems.filter(
    (item) => item.group !== "services"
  );

  // Services submenu items
  const servicesItems = allMenuItems.filter(
    (item) => item.group === "services"
  );

  return (
    <div className={styles.headerMenu}>
      <div className={`${styles.headerMenu__container} container`}>
        <div>
          <Link to={homePagePath}>
            <ImageWebp
              src={logoImage}
              srcSet={logoWebpImage}
              alt="MAMNUN Agency"
              className={styles.headerMenu__logoImg}
            />
          </Link>
        </div>

        <div>
          <nav
            className={`${styles.headerMenu__menu} ${
              isMenuOpen ? styles.headerMenu__menu_open : ""
            }`}
          >
            {isMenuOpen && (
              <button
                className={styles.headerMenu__btnClose}
                onClick={toggleMenu}
              >
                <Svg id={crossIcon} className={styles.headerMenu__crossIcon} />
              </button>
            )}

            {isMobile
              ? allMenuItems.map(({ text, link }, index) => (
                  <NavLink
                    key={index}
                    to={link}
                    className={styles.headerMenu__menuLink}
                    onClick={toggleMenu}
                  >
                    {text}
                  </NavLink>
                ))
              : mainMenuItems.map(({ text, link }, i) =>
                  // When rendering "Contact us" on desktop,
                  // insert the Services dropdown just before it
                  text === "Contact us" ? (
                    <div
                      key="services-dropdown"
                      className={styles.headerMenu__dropdown}
                    >
                      <span className={styles.headerMenu__menuLink}>
                        Services
                      </span>
                      <div className={styles.headerMenu__dropdownContent}>
                        {servicesItems.map(({ text, link }, j) => (
                          <NavLink
                            key={j}
                            to={link}
                            className={({ isActive }) =>
                              isActive
                                ? `${styles.headerMenu__menuLink} ${styles.headerMenu__menuLink_active}`
                                : styles.headerMenu__menuLink
                            }
                          >
                            {text}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={i}
                      to={link}
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.headerMenu__menuLink} ${styles.headerMenu__menuLink_active}`
                          : styles.headerMenu__menuLink
                      }
                    >
                      {text}
                    </NavLink>
                  )
                )}
            {/* Render Contact us link last */}
            {!isMobile && (
              <NavLink
                to={contactsPagePath}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.headerMenu__menuLink} ${styles.headerMenu__menuLink_active}`
                    : styles.headerMenu__menuLink
                }
                key="contact-desktop"
              >
                Contact us
              </NavLink>
            )}
          </nav>

          <button className={styles.headerMenu__btnBurger} onClick={toggleMenu}>
            <Svg id={burgerIcon} className={styles.headerMenu__burgerIcon} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.headerMenu__overlay} onClick={toggleMenu} />
      )}
    </div>
  );
};

export default HeaderMenu;
