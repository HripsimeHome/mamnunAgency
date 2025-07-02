import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { adminPagePath } from "../../../router/path";
import { getActiveDayNews } from "../../../store/slices/newsSlice";
import HomeNewsModal from "../../HomePage/HomeAdminContent/HomeNews/HomeNewsModal/HomeNewsModal";

const TodayNewsModal = () => {
  const [open, setOpen] = useState(false);
  const [dayNews, setDayNews] = useState(null);
  const location = useLocation();

  const fetchDayNews = async () => {
    const data = await getActiveDayNews();
    if (data) setDayNews(data);
  };

  useEffect(() => {
    if (!location.pathname.startsWith(adminPagePath)) {
      fetchDayNews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timer = null;
    if (dayNews) {
      timer = setTimeout(() => setOpen(true), 5000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dayNews]);

  if (!dayNews) return null;

  return (
    <HomeNewsModal show={open} onClose={() => setOpen(false)} {...dayNews} />
  );
};

export default TodayNewsModal;
