import Head from "../components/global/Head/Head";
import EducationHeader from "../components/EducationPage/EducationHeader/EducationHeader";

import EducationStudying from "../components/EducationPage/EducationStudying/EducationStudying";

import EducationStudyingAbroad from "../components/EducationPage/EducationStudyingAbroad/EducationStudyingAbroad";

import EducationMain from "../components/EducationPage/EducationMain/EducationMain";

import EducationScholarships from "../components/EducationPage/EducationScholarships/EducationScholarships";

import EducationJourney from "../components/EducationPage/EducationJourney/EducationJourney";

import EducationServices from "../components/EducationPage/EducationServices/EducationServices";

import EducationStories from "../components/EducationPage/EducationStories/EducationStories";
import EducationFAQ from "../components/EducationPage/EducationFAQ/EducationFAQ";

const EducationPage = () => {
  return (
    <>
      <Head
        keyword={""}
        title={""}
        ogTitle={""}
        description={""}
        ogDescription={""}
      />
      <EducationHeader />
      <EducationStudying />
      <EducationStudyingAbroad />
      <EducationMain />
      <EducationScholarships />
      <EducationJourney />
      <EducationServices />
      <EducationStories />
      <EducationFAQ />
    </>
  );
};

export default EducationPage;
