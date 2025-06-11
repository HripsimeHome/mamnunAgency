import { useState } from "react";
import styles from "./Accordion.module.scss";
import Svg from "../../layout/Svg/Svg";

const Accordion = ({ title, content, icon, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordion}>
      <button
        className={styles.accordion__header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div>
          <Svg 
          id={icon}
          className={styles.accordion__iconTest}
          />           
          <span>{title}</span>
        </div>
          
        <span className={styles.accordion__icon}>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && <div className={styles.accordion__content}>{content}</div>}
    </div>
  );
};

export default Accordion;
