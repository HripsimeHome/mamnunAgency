import React from "react";
import styles from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import NewPortalProvider from "../../../providers/NewPortalProvider";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import Loader from "../Loader/Loader";
import Svg from "../Svg/Svg";
import { crossIcon } from "../../../assets/svg";
const Modal = ({ show, onClose, title, children, className, loading }) => {
  return (
    <>
      <Backdrop highZIndex inProp={show} onClose={onClose} />
      <NewPortalProvider>
        <TransitionProvider
          inProp={show}
          style={TransitionStyleTypes.opacity}
          className={`${styles.modal} ${className || ""}`}
        >
          <button className={styles.modal__closBtn} onClick={onClose}>
            <Svg id={crossIcon} />
          </button>
          {title && <h5 className={styles.modal__title}>{title}</h5>}
          {children}
          <TransitionProvider
            inProp={loading}
            style={TransitionStyleTypes.opacity}
            className={styles.modal__loader}
          >
            <Loader />
          </TransitionProvider>
        </TransitionProvider>
      </NewPortalProvider>
    </>
  );
};

export default Modal;
