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
        title={"Trusted Study Abroad & Travel Services | MAMNUN Agency"}
        ogTitle={"Trusted Study Abroad & Travel Services | MAMNUN Agency"}
        description={
          "Education consulting, study abroad support, visa processing, and tailored travel services focused on delivering reliable academic and travel solutions."
        }
        ogDescription={
          "Education consulting, study abroad support, visa processing, and tailored travel services focused on delivering reliable academic and travel solutions."
        }
      />
      <HomeHeader />
      <HomeBrief />
      <HomeMain />
      <HomeAdminContentPage />
    </>
  );
};

export default HomePage;
