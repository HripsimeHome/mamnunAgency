import Head from "../components/global/Head/Head";
import TourismHeader from "../components/TourismPage/TourismHeader/TourismHeader";
import TourismBrief from "../components/TourismPage/TourismBrief/TourismBrief";
import TourismMain from "../components/TourismPage/TourismMain/TourismMain";
import TourismServices from "../components/TourismPage/TourismServices/TourismServices";
import TourismDestinations from "../components/TourismPage/TourismDestinations/TourismDestinations";

const TourismPage = () => {
  return (
    <>
      <Head
        keyword={""}
        title={""}
        ogTitle={""}
        description={""}
        ogDescription={""}
      />
      <TourismHeader />
      <TourismBrief />
      <TourismServices />
      <TourismDestinations />
      <TourismMain />
    </>
  );
};

export default TourismPage;
