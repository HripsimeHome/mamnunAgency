import { useEffect, useRef, useState } from "react";
import { crossIcon } from "../../../assets/svg";
import Svg from "../Svg/Svg";

import NewPortalProvider from "../../../providers/NewPortalProvider";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import { closeTooltip } from "../../../store/slices/UISlice";
import styles from "./Tooltip.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Tooltip = () => {
  const dispatch = useDispatch();
  const tooltipTxt = useSelector((state) => state.ui.tooltipTxt);
  const tooltipshowing = useSelector((state) => state.ui.tooltipshowing);
  const tooltipUpdateCount = useSelector(
    (state) => state.ui.tooltipUpdateCount
  );
  const timeOutRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (tooltipshowing) {
      if (timeOutRef.current) {
        if (isAnimated) setIsAnimated(false);
        setTimeout(() => {
          setIsAnimated(true);
        }, 100);
        clearTimeout(timeOutRef.current);
        timeOutRef.current = null;
      }
      timeOutRef.current = setTimeout(() => {
        dispatch(closeTooltip());
        timeOutRef.current = null;
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tooltipUpdateCount]);

  const onClose = () => {
    dispatch(closeTooltip());
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
      timeOutRef.current = null;
    }
  };

  return (
    <NewPortalProvider>
      <TransitionProvider
        inProp={tooltipshowing}
        style={TransitionStyleTypes.top}
        className={styles.tooltip}
      >
        <div className={styles.tooltip__main}>
          <span className={styles.tooltip__txt}>{tooltipTxt}</span>
          <button className={styles.tooltip__closeBtn} onClick={onClose}>
            <Svg className={styles.tooltip__crossIcon} id={crossIcon} />
          </button>
        </div>
      </TransitionProvider>
    </NewPortalProvider>
  );
};

export default Tooltip;
