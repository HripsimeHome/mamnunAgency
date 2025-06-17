import { useNavigate } from "react-router-dom";
import { leftBurgerIcon, logoutIcon } from "../../../../assets/svg";
import { adminLoginPagePath } from "../../../../router/path";
import { logout } from "../../../../store/slices/userSlice";
import Svg from "../../../layout/Svg/Svg";
import styles from "./AdminTopbar.module.scss";
import { useDispatch } from "react-redux";

const AdminTopbar = ({ openSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate(adminLoginPagePath);
  };

  return (
    <>
      <div className={styles.adminTopbar}>
        <div className={styles.adminTopbar__burgerBtnWrapper}>
          <button
            onClick={openSidebar}
            className={styles.adminTopbar__burgerBtn}
          >
            <Svg
              id={leftBurgerIcon}
              className={styles.adminTopbar__burgerIcon}
            />
          </button>
        </div>
        <div className={styles.adminTopbar__accountBlock}>
          <button onClick={onLogout} className={styles.adminTopbar__logoutBtn}>
            <span className={styles.adminTopbar__txt}>Log out</span>
            <Svg
              id={logoutIcon}
              className={styles.adminTopbar__logoutIcon}
            ></Svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminTopbar;
