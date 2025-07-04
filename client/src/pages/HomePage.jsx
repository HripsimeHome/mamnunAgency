import Head from "../components/global/Head/Head";
import HomeHeader from "../components/HomePage/HomeHeader/HomeHeader";
import HomeBrief from "../components/HomePage/HomeBrief/HomeBrief";
import HomeMain from "../components/HomePage/HomeMain/HomeMain";
import HomeAdminContentPage from "../components/HomePage/HomeAdminContent/HomeAdminContent";

const HomePage = () => {
  return (
    <>
      <Head
        keyword={""}
        title={""}
        ogTitle={""}
        description={""}
        ogDescription={""}
      />
      <HomeHeader />
      <HomeBrief />
      <HomeMain />
      <HomeAdminContentPage />
    </>
  );
};

export default HomePage;
