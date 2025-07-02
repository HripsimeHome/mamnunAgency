import React, { useEffect, useRef, useState } from "react";
import Svg from "../Svg/Svg";
import { selectArrowIcon } from "../../../assets/svg";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";

import styles from "./Select.module.scss";

const Select = ({
  placeholder,
  options,
  disabled,
  multiSelect,
  onChange,
  isInvalid,
  selectedValue,
}) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  // For multiSelect, selectedValue should be an array
  const selectedValues = multiSelect
    ? Array.isArray(selectedValue)
      ? selectedValue
      : []
    : selectedValue;
  const selectedValueItems = multiSelect
    ? options.filter((item) => selectedValues.includes(item.value))
    : options.find((item) => item.value === selectedValue);
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

  // Helper for multiSelect: toggle value in array
  const handleMultiSelect = (value) => {
    let newSelected;
    if (selectedValues.includes(value)) {
      newSelected = selectedValues.filter((v) => v !== value);
    } else {
      newSelected = [...selectedValues, value];
    }

    console.log({ newSelected });

    onChange(newSelected);
  };

  // Helper for rendering selected names
  const renderSelectedNames = () => {
    if (multiSelect) {
      if (!selectedValueItems.length) return placeholder;
      return selectedValueItems.map((item) => item.name).join(", ");
    } else {
      return selectedValueItems?.name || placeholder;
    }
  };

  return (
    <div className={styles.select} ref={selectedRef}>
      <button
        disabled={disabled}
        className={`${styles.select__dropdownBtn} ${
          isInvalid ? styles.select__dropdownBtn_invalid : ""
        } ${dropdownOpened ? styles.select__dropdownBtn_opened : ""} ${
          (multiSelect && selectedValueItems?.length) || selectedValueItems
            ? styles.select__dropdownBtn_selected
            : ""
        }`}
        onClick={() => setDropdownOpened((prev) => !prev)}
        type="button"
      >
        <span>{renderSelectedNames()}</span>
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
              if (multiSelect) {
                handleMultiSelect(item.value);
                // Do not close dropdown in multiSelect
              } else {
                onChange(item.value);
                setDropdownOpened(false);
              }
            }}
            key={item.value}
            className={`${styles.select__dropdownContentBtn} ${
              (multiSelect && selectedValues.includes(item.value)) ||
              selectedValueItems?.value === item.value
                ? styles.select__dropdownContentBtn_selected
                : ""
            }`}
          >
            {item.name}
          </button>
        ))}
      </TransitionProvider>
    </div>
  );
};

export default Select;
