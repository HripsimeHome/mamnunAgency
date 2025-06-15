import styles from "./Checkbox.module.scss";

const Checkbox = ({
  onChange,
  value,
  className,
  labelClass,
  name,
  children,
  checked,
  disableLabel,
}) => {
  return (
    <div className={`${styles.checkbox} ${className ? className : ""}`}>
      <input
        onChange={(e) => onChange(e)}
        value={value}
        id={value + name + "Checkbox"}
        name={name}
        type="checkbox"
        checked={checked}
        className={styles["checkbox__input"]}
      />
      <label
        htmlFor={!disableLabel ? value + name + "Checkbox" : undefined}
        className={`${styles["checkbox__label"]} ${labelClass || ""}`}
      >
        <span>{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
