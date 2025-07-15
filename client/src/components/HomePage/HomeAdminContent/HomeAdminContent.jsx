import HomeNews from "./HomeNews/HomeNews";
import HomeCertificates from "./HomeCertificates/HomeCertificates";
import HomeSocialCard from "../HomeSocialCard/HomeSocialCard";

const HomeAdminContent = () => {
  return (
    <section className="wrapperWhite wrapperPadding">
      <div className="container">
        <HomeNews />
        <HomeSocialCard />
        <HomeCertificates />
      </div>
    </section>
  );
};

export default HomeAdminContent;
