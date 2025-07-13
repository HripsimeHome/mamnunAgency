import styles from "./AboutFooter.module.scss";
import { Link } from "react-router-dom";
import { contactsPagePath } from "../../../router/path";

import { useLazy } from "../../../hooks/useLazy";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import TrustPilotLink from "../../global/TrustPilotLink/TrustPilotLink";

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
            <TrustPilotLink
              className={styles.aboutFooter__img}
              pictureClass={styles.aboutFooter__imgPosition}
            />
          </div>
        </TransitionProvider>
      </div>
    </section>
  );
};

export default AboutFooter;
