import { useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import { adminPagePath } from "../../router/path";
import { checkIsLoggedIn } from "../../store/slices/userSlice";
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
  const dispatch = useDispatch();
  const isAdmin = location.pathname.startsWith(adminPagePath);

  useEffect(() => {
    dispatch(checkIsLoggedIn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollTop();
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
    </>
  );
}

export default App;
