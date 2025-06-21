import { logoImage, logoWebpImage } from "../../../assets/images";
import { useFormValue } from "../../../hooks/useFormValue";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import LoaderPopup from "../../layout/LoaderPopup/LoaderPopup";
import MainBtn from "../../layout/MainBtn/MainBtn.jsx";
import styles from "./AdminAuthWrapper.module.scss";

const AdminAuthWrapper = ({
  error,
  loading,
  setError,
  fields,
  submitAction,
  title,
  btnTxt,
  errorTexts,
  renderAdditionalField,
  additionalContent,
}) => {
  const initialState = fields.reduce((acc, cur) => {
    acc[cur.key] = cur.defaultValue || "";
    return acc;
  }, {});

  const { formData, onChange, onChangeSelect, getError } = useFormValue(
    initialState,
    setError,
    error
  );

  const onSubmit = (e) => {
    e.preventDefault();
    submitAction(formData);
  };

  return (
    <section className={styles.authWrapper}>
      <ImageWebp
        src={logoImage}
        srcSet={logoWebpImage}
        alt="logo"
        className={styles.authWrapper__logoImg}
      />
      <h3 className={styles.authWrapper__title}>{title}</h3>
      <form onSubmit={onSubmit} className={styles.authWrapper__form}>
        {fields
          .filter(
            (item) =>
              typeof item.defaultValue === "string" ||
              item.defaultValue === undefined
          )
          .map((item) => {
            const errorkey = item.key;
            const curError = getError(item.key);
            return (
              <div className={styles.authWrapper__inputWrapper}>
                <input
                  value={formData[item.key]}
                  onChange={onChange}
                  name={item.key}
                  type={item.type || "text"}
                  className={styles.authWrapper__input}
                  placeholder={item.name}
                />
                <p
                  className={`${styles.authWrapper__errorTxt} ${
                    curError ? styles.authWrapper__errorTxt_active : ""
                  }`}
                >
                  {(error &&
                    typeof error === "object" &&
                    curError &&
                    errorkey in errorTexts &&
                    curError in errorTexts[errorkey] &&
                    errorTexts[errorkey]?.[curError]) ||
                    ""}
                  &nbsp;
                </p>
              </div>
            );
          })}
        {renderAdditionalField &&
          renderAdditionalField(formData, onChangeSelect)}
        <MainBtn className={`textWhite ${styles.authWrapper__btn}`}>
          {btnTxt}
        </MainBtn>
      </form>
      {additionalContent || null}
      <LoaderPopup show={loading} />
    </section>
  );
};

export default AdminAuthWrapper;
