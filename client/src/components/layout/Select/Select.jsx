import { useDropdownSelect } from "../../../hooks/useDropdownSelect";
import TransitionProvider from "../../../providers/TransitionProvider";
import styles from "./Select.module.scss";
import Svg from "../Svg/Svg";
import { arrowSelectIcon } from "../../../assets/svg";

function Select({
  name,
  valuesArr,
  className,
  attributes,
  disableState,
  selectedValueProp,
  onChange,
}) {
  const {
    selectedRef,
    dropDownOpened,
    disabled,
    onToggleDropdowns,
    onChangeSelectValues,
    sortedContentArr,
    selectedValue,
    btnText,
  } = useDropdownSelect({
    selectedValueProp,
    valuesArr,
    disableState,
    name,
    onChange,
  });

  return (
    <div
      title={name && typeof name === "string" ? name : ""}
      ref={selectedRef}
      className={`${styles["select"]} ${
        disabled ? styles["select_disabled"] : ""
      }`}
    >
      <div
        className={
          `${styles["select__dropDownBtn"]} ` + `${className ? className : ``} `
        }
        onClick={onToggleDropdowns}
      >
        <div className={styles["select__dropDownBtnContent"]}>
          <p className={`${styles["select__selectDropdownBtnText"]} ${!selectedValue ? styles["select__selectDropdownBtnText_placeholder"] : ""}`}>{btnText}</p>
          {!disabled && (
            <Svg
              className={`${styles["select__arrowDownIcon"]} ${
                dropDownOpened ? styles["select__arrowDownIcon_active"] : ""
              }`}
              id={arrowSelectIcon}
            />
          )}
        </div>
      </div>
      <TransitionProvider
        inProp={dropDownOpened}
        style="opacity"
        duration={100}
        className={styles["select__dropdownContent"]}
      >
        <div
          className={`${styles["select__dropdownContentItems"]} scrollbarDef`}
        >
          {sortedContentArr.map((item, index) => {
            const itemContent = item.item;
            const itemValue = item?.value !== undefined ? item?.value : item;
            return (
              <div
                {...attributes}
                key={index}
                className={styles["select__dropdownItem"]}
                onClickCapture={() => onChangeSelectValues(itemValue)}
              >
                <span>{itemContent}</span>
              </div>
            );
          })}
        </div>
      </TransitionProvider>
    </div>
  );
}

export default Select;