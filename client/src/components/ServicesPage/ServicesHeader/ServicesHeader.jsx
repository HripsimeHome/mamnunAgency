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
      subtitle="At MAMNUN, we understand that your travel experience should be nothing short of exceptional. That’s why we offer exclusive VIP ground handling services, Meet and Assist Fast Track options, and seamless transfer solutions at over 900 airports worldwide. Whether you are traveling for business or leisure, our dedicated team is here to ensure that every aspect of your journey is smooth, comfortable, and tailored to your needs."
    />
  );
};

export default ServicesHeader;
