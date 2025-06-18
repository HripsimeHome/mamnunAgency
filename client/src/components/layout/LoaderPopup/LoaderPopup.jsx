import NewPortalProvider from "../../../providers/NewPortalProvider";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import Backdrop from "../Backdrop/Backdrop";
import Loader from "../Loader/Loader";

import styles from "./LoaderPopup.module.scss";

const LoaderPopup = ({ show }) => {
  return (
    <>
      <Backdrop inProp={show} onClose={() => {}} />
      <NewPortalProvider>
        <TransitionProvider
          inProp={show}
          style={TransitionStyleTypes.opacity}
          className={styles.loaderPopup}
        >
          <Loader />
        </TransitionProvider>
      </NewPortalProvider>
    </>
  );
};

export default LoaderPopup;
