import HomeNews from "./HomeNews/HomeNews";
import HomeSertificates from "./HomeSertificates/HomeSertificates";

const HomeAdminContent = () => {
  return (
    <section className="wrapperWhite wrapperPadding">
      <div className="container">
        <HomeNews />
        <HomeSertificates />
      </div>
    </section>
  );
};

export default HomeAdminContent;
