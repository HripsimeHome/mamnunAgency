import styles from "./HeaderMenu.module.scss";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
import {
  burgerIcon,
  crossIcon,
  arrowThickCloseIcon,
} from "../../../assets/svg";

const allMenuItems = [
  { text: "Home", link: homePagePath, group: null },
  { text: "About us", link: aboutPagePath, group: null },
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
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen((prev) => !prev);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 576;

  const servicesItems = allMenuItems.filter(
    (item) => item.group === "services"
  );

  const mainMenuItems = allMenuItems.filter(
    (item) => item.group !== "services"
  );

  // Check if any services submenu is active
  const isServicesActive = servicesItems.some(
    (item) => location.pathname === item.link
  );
  console.log({ isServicesActive });

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
              : mainMenuItems.map(({ text, link }, i) => {
                  if (text === "Contact us") {
                    return (
                      <div
                        key="dropdown-wrapper"
                        className={styles.headerMenu__servicesWrapper}
                      >
                        <div
                          className={`${styles.headerMenu__dropdown} ${
                            isServicesOpen
                              ? styles.headerMenu__dropdown_active
                              : ""
                          }`}
                          onClick={toggleServices}
                        >
                          <span
                            className={`${styles.headerMenu__menuLink} ${
                              isServicesActive
                                ? styles.headerMenu__menuLink_active
                                : ""
                            }`}
                          >
                            Our Services
                            <Svg
                              id={arrowThickCloseIcon}
                              className={`${styles.headerMenu__arrowIcon} ${
                                isServicesOpen
                                  ? styles.headerMenu__arrowIcon_open
                                  : ""
                              }`}
                            />
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

                        <NavLink
                          to={link}
                          className={({ isActive }) =>
                            isActive && !isServicesActive
                              ? `${styles.headerMenu__menuLink} ${styles.headerMenu__menuLink_active}`
                              : styles.headerMenu__menuLink
                          }
                        >
                          {text}
                        </NavLink>
                      </div>
                    );
                  }

                  return (
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
                  );
                })}
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
