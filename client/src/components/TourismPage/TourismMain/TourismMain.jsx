import TourismGallery from "./TourismGallery/TourismGallery";
import TourismPackages from "./TourismPackages/TourismPackages";

const TourismMain = () => {
  return (
    <section className="wrapperBlack wrapperPadding">
      <TourismGallery />
      <TourismPackages />
    </section>
  );
};

export default TourismMain;
