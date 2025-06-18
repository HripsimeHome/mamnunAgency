import { useSelector } from "react-redux";
import AdminFooter from "../AdminFooter/AdminFooter";
import styles from "./AdminWrapper.module.scss";

const AdminWrapper = ({ children }) => {
  const token = useSelector((state) => state.user.token);

  return (
    <main
      className={`${styles.appWrapper} ${
        token ? styles.appWrapper_active : styles.appWrapper_pasive
      }`}
    >
      <div className={styles.appWrapper__container}>{children}</div>
      <AdminFooter />
    </main>
  );
};

export default AdminWrapper;
