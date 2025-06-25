import styles from "./AboutFooter.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {
  companyLabelImage,
  companyLabelWebpImage,
} from ".././../../assets/images";

const AboutFooter = () => {
  return (
    <section className={`${styles.aboutFooter} wrapperWhite wrapperPadding`}>
      <div className="container">
        <div className={styles.aboutFooter__textBlock}>
          <h2 className="titleSecondaryH2">
            Feel free to&nbsp;
            <span className="titlePrimaryH2">reach out&nbsp;</span>
            if you have any other questions or need further assistance!
          </h2>

          <div>
            <a href="#" target="_blank">
              <ImageWebp
                src={companyLabelImage}
                srcSet={companyLabelWebpImage}
                alt="MAMNUN Agency"
                className={styles.aboutFooter__img}
                pictureClass={styles.aboutFooter__imgPosition}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFooter;
