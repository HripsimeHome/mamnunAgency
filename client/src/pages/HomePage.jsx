//import HomeHeader from "../components/HomePage/HomeHeader/HomeHeader";
import HomeBrief from "../components/HomePage/HomeBrief/HomeBrief";
import HomeMain from "../components/HomePage/HomeMain/HomeMain";
import HomeNews from "../components/HomePage/HomeNews/HomeNews";
//
// import HomeSertificates from "../components/HomePage/HomeSertificates/HomeSertificates"; <HomeSertificates />
 

const HomePage = () => {
  return (
    <>
      {/* <HomeHeader /> */}
       <HomeBrief />
       <HomeMain /> 
       <HomeNews />       
       
    </>
  );
};

export default HomePage;