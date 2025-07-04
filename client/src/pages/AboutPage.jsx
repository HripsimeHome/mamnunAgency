import Head from "../components/global/Head/Head";
import AboutHeader from "../components/AboutPage/AboutHeader/AboutHeader";
import AboutSlider from "../components/AboutPage/AboutSlider/AboutSlider";
import AboutMain from "../components/AboutPage/AboutMain/AboutMain";
import AboutFooter from "../components/AboutPage/AboutFooter/AboutFooter";

const AboutPage = () => {
  return (
    <>
      <Head
        keyword={""}
        title={""}
        ogTitle={""}
        description={""}
        ogDescription={""}
      />
      <AboutHeader />
      <AboutSlider />
      <AboutMain />

      <AboutFooter />
    </>
  );
};

export default AboutPage;
