import { useEffect, memo } from "react";
import styles from "./Backdrop.module.scss";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import NewPortalProvider from "../../../providers/NewPortalProvider";

const Backdrop = memo(({ inProp, onClose, highZIndex, enableScroll }) => {
  useEffect(() => {
    if (inProp && !enableScroll) document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "visible";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inProp]);
  return (
    <NewPortalProvider>
      <TransitionProvider
        inProp={inProp}
        // eslint-disable-next-line react/style-prop-object
        style={TransitionStyleTypes.opacity}
      >
        <div
          className={`${styles["backdrop"]} ${
            highZIndex ? styles["backdrop_high"] : styles["backdrop_low"]
          }`}
          onClick={onClose}
        ></div>
      </TransitionProvider>
    </NewPortalProvider>
  );
});

export default Backdrop;
