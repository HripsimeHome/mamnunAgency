import EducationHeader from "../components/EducationPage/EducationHeader/EducationHeader";
import EducationStudying from "../components/EducationPage/EducationStudying/EducationStudying";
import EducationStudyingAbroad from "../components/EducationPage/EducationStudyingAbroad/EducationStudyingAbroad";
import EducationOffer from "../components/EducationPage/EducationOffer/EducationOffer";
import EducationScholarships from "../components/EducationPage/EducationScholarships/EducationScholarships";
import EducationJourney from "../components/EducationPage/EducationJourney/EducationJourney";
import EducationServices from "../components/EducationPage/EducationServices/EducationServices";
import EducationStories from "../components/EducationPage/EducationStories/EducationStories";
import EducationFAQ from "../components/EducationPage/EducationFAQ/EducationFAQ";

const EducationPage = () => {
  return (
    <>
      <EducationHeader />
      <EducationStudying />
      <EducationStudyingAbroad />
      <EducationOffer />
      <EducationScholarships />
      <EducationJourney />
      <EducationServices />
      <EducationStories />
      <EducationFAQ />
    </>
  );
};

export default EducationPage;