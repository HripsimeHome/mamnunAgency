import HomeNews from "./HomeNews/HomeNews";
import HomeCertificates from "./HomeCertificates/HomeCertificates";

const HomeAdminContent = () => {
  return (
    <section className="wrapperWhite wrapperPadding">
      <div className="container">
        <HomeNews />
        <HomeCertificates />
      </div>
    </section>
  );
};

export default HomeAdminContent;
