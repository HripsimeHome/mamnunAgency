import { useEffect, Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import { adminLoginPagePath, adminPagePath, routes } from "../../router/path";
import { checkIsLoggedIn, checkToken } from "../../store/slices/userSlice";
import AdminNavbar from "../Admin/AdminNavbar/AdminNavbar";
import AdminWrapper from "../Admin/AdminWrapper/AdminWrapper";
import Footer from "../global/Footer/Footer";
import Tooltip from "../layout/Tooltip/Tooltip";
import { useDispatch } from "react-redux";
import HeaderMenu from "../global/HeaderMenu/HeaderMenu";
import TodayNewsModal from "../global/TodayNewsModal/TodayNewsModal";
import { scrollTop } from "../../utils/scrollTop";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdmin = location.pathname.startsWith(adminPagePath);
  const [userLoginChecked, setUserLoginChecked] = useState(false);

  useEffect(() => {
    dispatch(checkIsLoggedIn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollTop();

    const curPath = routes.find(
      (item) => item.path === location.pathname && item.private
    );
    if (!userLoginChecked && curPath) {
      (async () => {
        try {
          await dispatch(checkToken()).unwrap();
        } catch (error) {
          navigate(adminLoginPagePath);
        } finally {
          setUserLoginChecked(true);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const Wrapper = isAdmin ? AdminWrapper : Fragment;
  return (
    <>
      {isAdmin ? <AdminNavbar /> : <HeaderMenu />}
      <Wrapper>
        <AppRouter />
      </Wrapper>

      {!isAdmin && <Footer />}
      <Tooltip />
      {process.env.NODE_ENV === "production" && <TodayNewsModal />}

      {/* <TodayNewsModal /> */}
    </>
  );
}

export default App;
