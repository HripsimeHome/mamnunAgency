import { useSelector } from "react-redux";
import styles from "./AdminFooter.module.scss";

const AdminFooter = () => {
  const token = useSelector((state) => state.user.token);
  return (
    <footer
      className={`${styles.adminFooter} ${
        !token ? styles.adminFooter_light : ""
      }`}
    >
      <div className={styles.adminFooter__copirightBlock}>
        <h6 className={styles.adminFooter__copyrightTxt}>
          © Copyright {new Date().getFullYear()}{" "}
          <a target="_blank" rel="noreferrer" href="https://realitybulgaria.pl">
            MAMNUN Agency.
          </a>
          <span>&nbsp;All rights reserved.</span>
        </h6>
      </div>
    </footer>
  );
};

export default AdminFooter;
