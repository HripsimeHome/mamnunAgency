import Header from "../../global/Header/Header";

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
      subtitle="We offer exclusive VIP ground handling services, Meet and Assist Fast
          Track options, and seamless transfer solutions at over 900 airports
          worldwide."
    />
  );
};

export default ServicesHeader;
