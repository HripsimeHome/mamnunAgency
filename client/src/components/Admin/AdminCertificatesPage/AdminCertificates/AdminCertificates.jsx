import React, { useEffect, useState } from "react";
import styles from "./AdminCertificates.module.scss";
import PaginationStyled from "../../../layout/PaginationStyled/PaginationStyled";
import { useDispatch, useSelector } from "react-redux";
import { getCertificatesList } from "../../../../store/slices/certificatesSlice";
import DataLoader from "../../../layout/DataLoader/DataLoader";
import { ADMIN_CERTIFICATES_PAGE_SIZE } from "../../../../constants/pagination";
import AdminDeleteModal from "../../AdminDeleteModal/AdminDeleteModal";
import { deleteCertificates } from "../../../../store/slices/certificatesSlice";
import Svg from "../../../layout/Svg/Svg";
import { attachIcon } from "../../../../assets/svg";
import { setImagePath } from "../../../../utils/files";
import { addCertificate } from "../../../../store/slices/certificatesSlice";
import { openTooltip } from "../../../../store/slices/UISlice";

const Addbtn = ({ onAdd }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFileUpload = (e) => {
    const files = e.target.files;
    if (!files || !files.length) return;
    if (files[0].size > 6 * 1024 * 1024) {
      // eslint-disable-next-line no-undef
      dispatch(openTooltip("File size must be less than 6MB"));
      return;
    }

    setFile(files[0]);
  };

  const onClickUploadImg = (e) => {
    e.target.value = "";
  };

  const onCreate = async () => {
    try {
      setLoading(true);
      await dispatch(addCertificate(file));
      dispatch(openTooltip("Certificate added successfully"));
      setFile(null);
      onAdd();
    } catch (error) {
      dispatch(openTooltip("Failed to add certificate. Please try again"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${styles.adminCertificates__card} ${
        file ? styles.adminCertificates__card_save : ""
      }`}
    >
      <div className={styles.adminCertificates__imgWrapper}>
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="certificate"
            className={styles.adminCertificates__cardImg}
          />
        ) : (
          <Svg id={attachIcon} />
        )}
      </div>
      {!file ? (
        <label className={styles.adminCertificates__addBtn}>
          <input
            onChange={onFileUpload}
            onClick={onClickUploadImg}
            type="file"
            className={styles.adminCertificates__fileInput}
          />
          Add
        </label>
      ) : (
        <button
          onClick={onCreate}
          disabled={loading}
          className={`${styles.adminCertificates__addBtn} ${styles.adminCertificates__addBtn_save}`}
        >
          {loading ? "Saving" : "Save"}
        </button>
      )}
    </div>
  );
};

const AdminCertificates = () => {
  const dispatch = useDispatch();
  const certificates = useSelector((state) => state.certificates.data);
  const loading = useSelector((state) => state.certificates.getLoading);
  const getError = useSelector((state) => state.certificates.getError);
  const resultCount = useSelector((state) => state.certificates.resultCount);
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [deleteingItemid, setDeleteingItemid] = useState(null);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    dispatch(getCertificatesList(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = async (id) => {
    await deleteCertificates(id);

    const page =
      certificates.length === 1 && curPage > 1 ? curPage - 1 : curPage;
    dispatch(getCertificatesList(page));
    setCurPage(page);
  };

  return (
    <section className={styles.adminCertificates}>
      <h3 className={styles.adminCertificates__title}>Certificates</h3>
      <Addbtn onAdd={() => dispatch(getCertificatesList(curPage))} />
      {certificates && certificates.length ? (
        <div className={styles.adminCertificates__list}>
          {certificates.map((item) => (
            <div className={styles.adminCertificates__card} key={item.id}>
              <div className={styles.adminCertificates__imgWrapper}>
                <img
                  src={setImagePath(item.image)}
                  alt="certificate"
                  className={styles.adminCertificates__cardImg}
                  crossOrigin="anonymous"
                />
              </div>
              <button
                className={styles.adminCertificates__deleteBtn}
                onClick={() => {
                  setDeleteingItemid(item.id);
                  setDeleteModalOpened(true);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <DataLoader
          isLoaded={!!certificates && !loading}
          show={!certificates || !certificates.length}
          text={"Nothing found"}
          error={getError}
        />
      )}
      <PaginationStyled
        onPageChange={(page) => {
          dispatch(getCertificatesList(page));
          setCurPage(page);
        }}
        totalCount={resultCount}
        pageLimit={ADMIN_CERTIFICATES_PAGE_SIZE}
        curPage={curPage}
      />

      {deleteingItemid && (
        <AdminDeleteModal
          show={deleteModalOpened}
          onClose={() => setDeleteModalOpened(false)}
          id={deleteingItemid}
          onDelete={onDelete}
          title={"Delete Certificate"}
          confirmText={"Are you sure you want to delete this certificate?"}
        />
      )}
    </section>
  );
};

export default AdminCertificates;
