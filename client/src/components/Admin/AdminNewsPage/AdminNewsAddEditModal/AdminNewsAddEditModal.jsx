import React, { useEffect, useState } from "react";
import Modal from "../../../layout/Modal/Modal";
import MainInput from "../../../layout/MainInput/MainInput";
import styles from "./AdminNewsAddEditModal.module.scss";
import Svg from "../../../layout/Svg/Svg";
import { attachIcon } from "../../../../assets/svg";
import MainBtn from "../../../layout/MainBtn/MainBtn";
import { useFormValue } from "../../../../hooks/useFormValue";
import {
  addNews,
  editNews,
  setCreateError,
  setEditError,
} from "../../../../store/slices/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { setImagePath } from "../../../../utils/files";
import { openTooltip } from "../../../../store/slices/UISlice";
import { noImage } from "../../../../assets/images";

const AdminNewsAddEditModal = ({
  show,
  onClose,
  isEdit,
  newsData,
  fetchData,
}) => {
  const dispatch = useDispatch();
  const initialState = {
    title: newsData?.title || "",
    description: newsData?.description || "",
    image: newsData?.image || "",
    date: newsData?.date
      ? new Date(newsData?.date).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
  };
  const error = useSelector(
    (state) => state.news[isEdit ? "editError" : "createError"]
  );
  const setError = isEdit ? setEditError : setCreateError;
  const {
    formData,
    onChange,
    onChangeSelect,
    getError,
    onResetForm,
    setFormData,
  } = useFormValue(initialState, setError, error);
  const submitAction = isEdit ? editNews : addNews;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!show) {
      onResetForm();
    } else {
      if (newsData) {
        setFormData({
          title: newsData?.title || "",
          description: newsData?.description || "",
          image: newsData?.image || "",
          date: newsData?.date
            ? new Date(newsData?.date).toISOString().split("T")[0]
            : new Date().toISOString().split("T")[0],
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const onFileUpload = (e) => {
    const files = e.target.files;
    if (!files || !files.length) return;
    if (files[0].size > 6 * 1024 * 1024) {
      dispatch(openTooltip("File size must be less than 6MB"));
      return;
    }

    onChangeSelect("image", files[0]);
  };

  const onClickUploadImg = (e) => {
    e.target.value = "";
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(
        submitAction(isEdit ? { ...formData, id: newsData.id } : formData)
      ).unwrap();
      dispatch(openTooltip(`News ${isEdit ? "Edited" : "Added"}`));
      await fetchData();
      onClose();
    } catch (error) {
      dispatch(openTooltip("Submission failed"));
    }
    setLoading(false);
  };

  return (
    <Modal
      show={show}
      onClose={onClose}
      title={`${isEdit ? "Edit" : "Add"} News`}
      className={styles.adminNewsAddEditModal}
      loading={loading}
    >
      <form onSubmit={onSubmit} className={styles.adminNewsAddEditModal__form}>
        <div
          className={`${styles.adminNewsAddEditModal__col} ${styles.adminNewsAddEditModal__col_fields}`}
        >
          <label
            crossOrigin={"anonymous"}
            className={`${styles.adminNewsAddEditModal__attachFile} ${
              formData.image
                ? styles.adminNewsAddEditModal__attachFile_attached
                : ""
            } ${
              getError("image")
                ? styles.adminNewsAddEditModal__attachFile_invalid
                : ""
            }`}
          >
            {formData.image && (
              <img
                src={
                  typeof formData.image === "string"
                    ? setImagePath(formData.image)
                    : URL.createObjectURL(formData.image)
                }
                crossOrigin="anonimus"
                alt="attached file"
                className={styles.adminNewsAddEditModal__fileImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = noImage;
                }}
              />
            )}
            <input
              type="file"
              name="image"
              className={styles.adminNewsAddEditModal__fileInput}
              onChange={onFileUpload}
              onClick={onClickUploadImg}
            />
            <Svg id={attachIcon} />
          </label>
          <div className={styles.adminNewsAddEditModal__formMain}>
            <MainInput
              placeholder="Title"
              value={formData.title}
              name={"title"}
              onChange={onChange}
              isInvalid={getError("title")}
            />
            <MainInput
              placeholder="Description"
              isTextArea
              className={`thinScrollbar ${styles.adminNewsAddEditModal__textArea}`}
              value={formData.description}
              name={"description"}
              onChange={onChange}
              isInvalid={getError("description")}
            />
            <MainInput
              placeholder="Date"
              type={"date"}
              value={formData.date}
              name={"date"}
              onChange={onChange}
              isInvalid={getError("date")}
            />
          </div>
        </div>
        <div className={styles.adminNewsAddEditModal__col}>
          <MainBtn className={"textWhite"}>Cancel</MainBtn>
          <MainBtn className={"textWhite"} withBg>
            Save
          </MainBtn>
        </div>
      </form>
    </Modal>
  );
};

export default AdminNewsAddEditModal;
