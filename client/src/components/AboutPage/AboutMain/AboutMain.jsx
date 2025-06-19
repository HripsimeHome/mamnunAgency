import AboutVideo from "./AboutVideo/AboutVideo";
import AboutMap from "./AboutMap/AboutMap";
import AboutFAQ from "./AboutFAQ/AboutFAQ";

function AboutMain() {
  return (
    <section className="wrapperBlack wrapperPadding">
      <div className="container">
        <AboutVideo />
        <AboutMap />
        <AboutFAQ />
      </div>
    </section>
  );
}

export default AboutMain;
