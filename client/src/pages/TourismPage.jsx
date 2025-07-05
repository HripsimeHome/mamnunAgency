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
        keyword={
          "Uzbekistan custom tours, Uzbekistan cultural travel, Uzbekistan adventure trips, private tours Uzbekistan, tailored Uzbekistan itineraries, cultural experiences Uzbekistan, VIP travel Uzbekistan, Uzbekistan travel packages, Silk Road tours Uzbekistan, personalized Uzbekistan travel, Uzbekistan group tours, Uzbekistan local guides, Uzbekistan festival tours"
        }
        title={"Travel to Uzbekistan, Custom Tours & Culture | MAMNUN Agency"}
        ogTitle={"Travel to Uzbekistan, Custom Tours & Culture | MAMNUN Agency"}
        description={
          "MAMNUN Agency offers custom tours, cultural experiences, adventure trips, and full travel support across Uzbekistan with 24/7 support and VIP service"
        }
        ogDescription={
          "MAMNUN Agency offers custom tours, cultural experiences, adventure trips, and full travel support across Uzbekistan with 24/7 support and VIP service"
        }
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
