import styles from "./AboutFooter.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { Link } from "react-router-dom";
import { contactsPagePath } from "../../../router/path";

import {
  companyLabelImage,
  companyLabelWebpImage,
} from ".././../../assets/images";
import { useLazy } from "../../../hooks/useLazy";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

const AboutFooter = () => {
  const { ref, isInView } = useLazy(0.4);
  return (
    <section
      ref={ref}
      className={`${styles.aboutFooter} wrapperWhite wrapperPadding`}
    >
      <div className="container">
        <TransitionProvider
          inProp={isInView}
          style={TransitionStyleTypes.bottom}
          className={styles.aboutFooter__textBlock}
        >
          <h2 className={styles.aboutFooter__text}>
            Feel free to&nbsp;
            <Link
              to={contactsPagePath}
              className={styles.aboutFooter__textLink}
            >
              <span className="textPrimary">reach out&nbsp;</span>
            </Link>
            if you have any other questions or need further assistance!
          </h2>

          <div>
            <a href="/" target="_blank">
              <ImageWebp
                src={companyLabelImage}
                srcSet={companyLabelWebpImage}
                alt="MAMNUN Agency"
                className={styles.aboutFooter__img}
                pictureClass={styles.aboutFooter__imgPosition}
              />
            </a>
          </div>
        </TransitionProvider>
      </div>
    </section>
  );
};

export default AboutFooter;
