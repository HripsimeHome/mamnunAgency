import styles from "./TourismMain.module.scss";
import TourismGallery from "./TourismGallery/TourismGallery";
import TourismPackages from "./TourismPackages/TourismPackages";

const TourismMain = () => {
  return (
    <section className={`${styles.tourismMain} wrapperBlack`}>
      <TourismGallery />
      <TourismPackages />
    </section>
  );
};

export default TourismMain;
