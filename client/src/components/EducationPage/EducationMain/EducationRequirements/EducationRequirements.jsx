import styles from "./EducationRequirements.module.scss";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";

import {
  relationshipBlackImage,
  relationshipBlackWebpImage,
  folderImage,
  folderWebpImage,
} from "../../../../assets/images";

const requirementsData = [
  {
    step: "1",
    title: "Fill the form",
    image: folderImage,
    webpImage: folderWebpImage,
  },

  {
    step: "2",
    title: "Get free consultation ",
    image: relationshipBlackImage,
    webpImage: relationshipBlackWebpImage,
  },

  {
    step: "3",
    title: "Sign an Agreement and make the service fee",
    image: folderImage,
    webpImage: folderWebpImage,
  },

  {
    step: "4",
    title: "Send us the required package of documents",
    image: folderImage,
    webpImage: folderWebpImage,
  },

  {
    step: "5",
    title: "We will take care of the further process and keep you updated",
    image: folderImage,
    webpImage: folderWebpImage,
  },
];

function EducationRequirements() {
  return (
    <section className={styles.educationRequirements}>
      <h2 className="titleSecondaryH2">
        Application process and&nbsp;
        <br />
        <span className="titlePrimaryH2">requirements</span>
      </h2>

      <div className={styles.educationRequirements__test}>
  {requirementsData.map(({ step, title, image, webpImage }, index) => (
    <div key={index} className={styles.educationRequirements__stepContainer}>
      <div className={styles.educationRequirements__circle}>
        <div className={styles.educationRequirements__flipInner}>
          <div className={styles.educationRequirements__front}>
            <span className={styles.educationRequirements__step}>{step}</span>
          </div>
          <div className={styles.educationRequirements__back}>
            <ImageWebp
              src={image}
              srcSet={webpImage}
              alt="Step icon"
              className={styles.educationRequirements__icon}
            />
          </div>
        </div>
      </div>
      <span className={styles.educationRequirements__title}>{title}</span>
    </div>
  ))}
</div>

    </section>
  );
}

export default EducationRequirements;
