import { useEffect, useRef, useState } from "react";
import Sidebar from "./AdminSidebar/AdminSidebar";
import Topbar from "./AdminTopbar/AdminTopbar";

import { isMobile } from "../../../constants/globals";
import { useSelector } from "react-redux";

const AdminNavbar = () => {
  const token = useSelector((state) => state.user.token);
  const [sidebarOpened, setSidebarOpened] = useState(!isMobile);
  const sidebarOpenedref = useRef(sidebarOpened);

  useEffect(() => {
    sidebarOpenedref.current = sidebarOpened;
  }, [sidebarOpened]);

  useEffect(() => {
    const onResize = () => {
      const isMobile = window.innerWidth < 576;
      if (isMobile && sidebarOpenedref.current) setSidebarOpened(false);
      else if (!isMobile && !sidebarOpenedref.current) setSidebarOpened(true);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  if (!token) return null;

  return (
    <>
      <Topbar openSidebar={openSidebar} />
      <Sidebar show={sidebarOpened} onClose={closeSidebar} />
    </>
  );
};

export default AdminNavbar;
