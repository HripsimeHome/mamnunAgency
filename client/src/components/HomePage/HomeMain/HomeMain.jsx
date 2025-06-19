import HomeReasons from "./HomeReasons/HomeReasons";
import HomeServices from "./HomeServices/HomeServices";

const HomeMain = () => {
  return (
    <section className="wrapperBlack wrapperPadding">
      <div className="container">
        <HomeReasons />
        <HomeServices />
      </div>
    </section>
  );
};

export default HomeMain;
