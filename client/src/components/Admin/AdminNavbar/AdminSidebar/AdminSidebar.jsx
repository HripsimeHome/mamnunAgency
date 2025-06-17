import { NavLink } from "react-router-dom";
import Svg from "../../../layout/Svg/Svg";

import { logoImage, logoWebpImage } from "../../../../assets/images";
import { crossIcon } from "../../../../assets/svg";
import { isMobile } from "../../../../constants/globals";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../../providers/TransitionProvider";
import {
  adminCertificatesPagePath,
  adminNewsPagePath,
  adminSettingsPagePath,
} from "../../../../router/path";
import Backdrop from "../../../layout/Backdrop/Backdrop";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";
import styles from "./AdminSidebar.module.scss";

const AdminSidebar = ({ show, onClose }) => {
  const setActiveNavLinkClass = () => {
    return ({ isActive }) =>
      isActive
        ? `${styles.adminSidebar__menuItem} ${styles.adminSidebar__menuItem_active}`
        : styles.adminSidebar__menuItem;
  };

  const activeNavLinks = setActiveNavLinkClass();

  return (
    <>
      {isMobile && <Backdrop inProp={show} onClose={onClose} />}{" "}
      <TransitionProvider
        inProp={show}
        style={TransitionStyleTypes.left}
        className={styles.adminSidebar}
      >
        <button className={styles.adminSidebar__crossBtn} onClick={onClose}>
          <Svg id={crossIcon} className={styles.adminSidebar__crossIcon} />
        </button>
        <ImageWebp
          src={logoImage}
          srcSet={logoWebpImage}
          alt="logo"
          className={styles.adminSidebar__logo}
        />
        <nav className={styles.adminSidebar__menu}>
          <NavLink
            onClick={() => {
              if (isMobile) onClose();
            }}
            to={adminNewsPagePath}
            className={activeNavLinks}
          >
            News
          </NavLink>
          <NavLink
            onClick={() => {
              if (isMobile) onClose();
            }}
            to={adminCertificatesPagePath}
            className={activeNavLinks}
          >
            Certificates
          </NavLink>
          <NavLink
            onClick={() => {
              if (isMobile) onClose();
            }}
            to={adminSettingsPagePath}
            className={activeNavLinks}
          >
            Settings
          </NavLink>
        </nav>
      </TransitionProvider>
    </>
  );
};

export default AdminSidebar;
