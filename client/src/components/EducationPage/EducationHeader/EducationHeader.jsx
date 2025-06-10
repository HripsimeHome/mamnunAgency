import Header from "../../global/Header/Header";

import {
  educationHeaderImage,
  educationHeaderWebpImage,
} from "../../../assets/images";

const EducationHeader = () => {
  return (
    <Header
      image={educationHeaderImage}
      webpImage={educationHeaderWebpImage}
      title="Education and Careers"
      subtitle="We believe that every student deserves the opportunity to make informed decisions about their education and future. As a transparent consultancy agency, we are dedicated to offering you a balanced perspective on studying both in Uzbekistan and abroad. So let’s look through together both advantages and disadvantages to study in our home country and abroad, empowering you to make one of the most important decisions of your life:"
    />
  );
};

export default EducationHeader;
