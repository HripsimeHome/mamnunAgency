import styles from "./TourismHeader.module.scss";
import Header from "../../global/Header/Header";

import {
  tourismHeaderImage,
  tourismHeaderWebpImage,
} from "../../../assets/images";

const TourismHeader = () => {
  return (
    <Header
      image={tourismHeaderImage}
      webpImage={tourismHeaderWebpImage}
      backgroundClass={styles.banner}
      title="Travel To Uzbekistan "
      subtitle="Our travel services to Uzbekistan are designed to offer a seamless and unforgettable experience."
    />
  );
};

export default TourismHeader;
