import EducationOffer from "./EducationOffer/EducationOffer";
import EducationRequirements from "./EducationRequirements/EducationRequirements";

function EducationMain() {
  return (
    <section className="wrapperWhite wrapperPadding">
      <div className="container">
        <EducationOffer />
        <EducationRequirements />
      </div>
    </section>
  );
}

export default EducationMain;
