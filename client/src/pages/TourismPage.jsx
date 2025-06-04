
import TourismHeader from "../components/TourismPage/TourismHeader/TourismHeader";
import TourismBrief from "../components/TourismPage/TourismBrief/TourismBrief";
import TourismMain from "../components/TourismPage/TourismMain/TourismMain";
import TourismServices from "../components/TourismPage/TourismServices/TourismServices";
import TourismDestinations from "../components/TourismPage/TourismDestinations/TourismDestinations";
import TourismPackages from "../components/TourismPage/TourismPackages/TourismPackages";

const TourismPage = () => {
  return (
    <>
      <TourismHeader />
      <TourismBrief />
      <TourismMain />  
      <TourismServices />    
      <TourismDestinations />
      <TourismPackages />
    </>
  );
};

export default TourismPage;