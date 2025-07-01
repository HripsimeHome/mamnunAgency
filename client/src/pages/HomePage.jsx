import HomeHeader from "../components/HomePage/HomeHeader/HomeHeader";
import HomeBrief from "../components/HomePage/HomeBrief/HomeBrief";
import HomeMain from "../components/HomePage/HomeMain/HomeMain";
import HomeAdminContentPage from "../components/HomePage/HomeAdminContent/HomeAdminContent";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <HomeBrief />
      <HomeMain />
      <HomeAdminContentPage />
    </>
  );
};

export default HomePage;
