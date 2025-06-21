import React, { useEffect, useRef, useState } from "react";
import Svg from "../Svg/Svg";
import { selectArrowIcon } from "../../../assets/svg";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

import styles from "./Select.module.scss";

const Select = ({ placeholder, options,disabled, onChange,isInvalid, selectedValue }) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const selectedValueItem = options.find(
    (item) => item.value === selectedValue
  );
  const selectedRef = useRef();
  const ref = [selectedRef];
  const dropdownOpenedRef = useRef(dropdownOpened);

  useEffect(() => {
    dropdownOpenedRef.current = dropdownOpened;
  }, [dropdownOpened]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      const el = e.target;
      const isRef = ref.every(
        (value) => value.current && !value.current.contains(el)
      );

      if (dropdownOpenedRef.current && isRef) {
        setDropdownOpened(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.select} ref={selectedRef}>
      <button
      disabled={disabled}
        className={`${styles.select__dropdownBtn} ${isInvalid ?  styles.select__dropdownBtn_invalid : ""} ${
          dropdownOpened ? styles.select__dropdownBtn_opened : ""
        } ${selectedValueItem ? styles.select__dropdownBtn_selected : ""}`}
        onClick={() => setDropdownOpened(true)}
        type="button"
      >
        <span>{selectedValueItem?.name || placeholder}</span>
        <Svg id={selectArrowIcon} />
      </button>
      <TransitionProvider
        inProp={dropdownOpened}
        style={TransitionStyleTypes.opacity}
        className={styles.select__dropdownContent}
      >
        {options.map((item) => (
          <button
            type="button"
            onClick={() => {
              onChange(item.value);
              setDropdownOpened(false);
            }}
            key={item.value}
            className={styles.select__dropdownContentBtn}
          >
            {item.name}
          </button>
        ))}
      </TransitionProvider>
    </div>
  );
};

export default Select;
