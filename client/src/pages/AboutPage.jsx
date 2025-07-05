import Head from "../components/global/Head/Head";
import AboutHeader from "../components/AboutPage/AboutHeader/AboutHeader";
import AboutSlider from "../components/AboutPage/AboutSlider/AboutSlider";
import AboutMain from "../components/AboutPage/AboutMain/AboutMain";
import AboutFooter from "../components/AboutPage/AboutFooter/AboutFooter";

const AboutPage = () => {
  return (
    <>
      <Head
        keyword={
          "education abroad specialists, study abroad guidance, cultural travel experts, VIP ground handling, personalized travel support, international education consultants, tailored travel experiences, education consulting abroad, travel specialists, VIP airport services"
        }
        title={"Specialists in Education Abroad and Travel | MAMNUN Agency"}
        ogTitle={"Specialists in Education Abroad and Travel | MAMNUN Agency"}
        description={
          "MAMNUN Agency specialists guide education abroad, design unique cultural travel, coordinate VIP ground handling, and provide tailored travel support."
        }
        ogDescription={
          "MAMNUN Agency specialists guide education abroad, design unique cultural travel, coordinate VIP ground handling, and provide tailored travel support."
        }
      />
      <AboutHeader />
      <AboutSlider />
      <AboutMain />

      <AboutFooter />
    </>
  );
};

export default AboutPage;
