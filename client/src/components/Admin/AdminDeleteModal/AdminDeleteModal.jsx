import React, { useState } from "react";
import Modal from "../../layout/Modal/Modal";

import styles from "./AdminDeleteModal.module.scss";
import MainBtn from "../../layout/MainBtn/MainBtn";
import { useDispatch } from "react-redux";
import { openTooltip } from "../../../store/slices/UISlice";
const AdminDeleteModal = ({
  show,
  onClose,
  title,
  confirmText,
  id,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      onDelete(id);
      onClose();
      dispatch(openTooltip("News deleted successfully"));
    } catch (error) {
      dispatch(openTooltip("Failed to delete news"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      onClose={onClose}
      title={title}
      className={styles.adminDeleteModal}
      loading={loading}
    >
      <div className={styles.adminDeleteModal__main}>
        <p className={styles.adminDeleteModal__confirmText}>{confirmText}</p>
        <div className={styles.adminDeleteModal__actions}>
          <MainBtn onClick={onClose}>Cancel</MainBtn>
          <MainBtn isNegative onClick={handleDelete}>
            Delete
          </MainBtn>
        </div>
      </div>
    </Modal>
  );
};

export default AdminDeleteModal;
