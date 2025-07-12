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
      imgPosition={"top"}
      alt="Education and Careers"
      title="Education and Careers"
      subtitle="We believe that every student deserves the opportunity to make informed decisions about their education and future."
    />
  );
};

export default EducationHeader;
