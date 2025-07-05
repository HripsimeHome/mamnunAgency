import Header from "../../global/Header/Header";
import styles from "./ServicesHeader.module.scss";

import {
  servicesHeaderImage,
  servicesHeaderWebpImage,
} from "../../../assets/images";

const ServicesHeader = () => {
  return (
    <Header
      image={servicesHeaderImage}
      webpImage={servicesHeaderWebpImage}
      alt="Extra VIP Services"
      title="Extra VIP Services"
      subtitle={
        <span className={styles.servicesHeader__subtitle}>
          <span className={styles.servicesHeader__subtitleMain}>
            At MAMNUN, we understand that your travel experience should be
            nothing short of exceptional.
          </span>
          <span className={styles.servicesHeader__subtitleExtra}>
            That’s why we offer exclusive VIP ground handling services, Meet and
            Assist Fast Track options, and seamless transfer solutions at over
            900 airports worldwide. Whether you are traveling for business or
            leisure, our dedicated team is here to ensure that every aspect of
            your journey is smooth, comfortable, and tailored to your needs.
          </span>
        </span>
      }
    />
  );
};

export default ServicesHeader;
