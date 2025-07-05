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
        keyword={
          "study in Uzbekistan, study abroad, education in Uzbekistan, degree programs Uzbekistan, international degree programs, scholarships for students, internships abroad, language courses abroad, summer camps for students, winter camps for students, short-term study programs, work and travel Germany, au pair programs, teacher training abroad, career support for students"
        }
        title={"Education & Careers | Study in Uzbekistan or Abroad"}
        ogTitle={"Education & Careers | Study in Uzbekistan or Abroad"}
        description={
          "Get expert guidance on studying in Uzbekistan and abroad with MAMNUN Agency. Explore degree programs, scholarships, internships, language courses."
        }
        ogDescription={
          "Get expert guidance on studying in Uzbekistan and abroad with MAMNUN Agency. Explore degree programs, scholarships, internships, language courses."
        }
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
