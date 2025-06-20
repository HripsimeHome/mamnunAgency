import styles from "./EducationRequirements.module.scss";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";

import {
  relationshipBlackImage,
  relationshipBlackWebpImage,
} from "../../../../assets/images";

const requirementsData = [
  {
    step: "1",
    title: "Fill the form",
    // image: ,
    // webpImage:
  },

  {
    step: "2",
    title: "Get free consultation ",
    // image: ,
    // webpImage:
  },

  {
    step: "3",
    title: "Sign an Agreement and make the service fee",
    // image: ,
    // webpImage:
  },

  {
    step: "4",
    title: "Send us the required package of documents",
    // image: ,
    // webpImage:
  },

  {
    step: "5",
    title: "We will take care of the further process and keep you updated",
    // image: ,
    // webpImage:
  },
];

function EducationRequirements() {
  return (
    <section className={styles.educationRequirements}>
      <h2 className="titleSecondaryH2">
        Application process andg&nbsp;
        <br />
        <span className="titlePrimaryH2">requirements</span>
      </h2>

      <div className={styles.educationRequirements__stepContainer}>
        <ImageWebp
          src={relationshipBlackImage}
          srcSet={relationshipBlackWebpImage}
          alt="Application process and requirements"
          className={styles.educationRequirements__icon}
        />
      </div>
    </section>
  );
}

export default EducationRequirements;
