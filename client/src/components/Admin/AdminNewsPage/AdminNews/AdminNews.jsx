import React, { useEffect, useState } from "react";
import styles from "./AdminNews.module.scss";
import MainBtn from "../../../layout/MainBtn/MainBtn";
import PaginationStyled from "../../../layout/PaginationStyled/PaginationStyled";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../../../../store/slices/newsSlice";
import NewsBlogItem from "../../../global/NewsBlogItem/NewsBlogItem";
import DataLoader from "../../../layout/DataLoader/DataLoader";
import { ADMIN_NEWS_PAGE_SIZE } from "../../../../constants/pagination";
import AdminNewsAddEditModal from "../AdminNewsAddEditModal/AdminNewsAddEditModal";
import AdminDeleteModal from "../../AdminDeleteModal/AdminDeleteModal";

const AdminNews = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.data);
  const loading = useSelector((state) => state.news.getLoading);
  const getError = useSelector((state) => state.news.getError);
  const resultCount = useSelector((state) => state.news.resultCount);
  const [addModalOpened, setAddModalOpened] = useState(false);
  const [editModalOpened, setEditModalOpened] = useState(false);
  const [editingItemid, setEditingItemid] = useState(null);
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [deleteingItemid, setDeleteingItemid] = useState(null);
  const [curPage, setCurPage] = useState(1);

  const editingItem = news?.find((item) => item.id === editingItemid);

  useEffect(() => {
    dispatch(getNewsList(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = async (id) => {
    // eslint-disable-next-line no-undef
    await deleteNews(id);

    const page = news.length === 1 && curPage > 1 ? curPage - 1 : curPage;
    dispatch(getNewsList(page));
    setCurPage(page);
  };

  const onEdit = (id) => {
    setEditingItemid(id);
    setEditModalOpened(true);
  };

  return (
    <section className={styles.adminNews}>
      <h3 className={styles.adminNews__title}>News</h3>
      <MainBtn
        onClick={() => setAddModalOpened(true)}
        className={styles.adminNews__addbtn}
        withBg
      >
        Add
      </MainBtn>
      {news && news.length ? (
        <div className={styles.adminNews__list}>
          {news.map((item) => (
            <NewsBlogItem
              {...item}
              key={item.id}
              isAdmin={true}
              onEdit={onEdit}
              onDelete={(id) => {
                setDeleteingItemid(id);
                setDeleteModalOpened(true);
              }}
              onClick={onEdit}
            />
          ))}
        </div>
      ) : (
        <DataLoader
          isLoaded={!!news && !loading}
          show={!news || !news.length}
          text={"Nothing found"}
          error={getError}
        />
      )}
      <PaginationStyled
        onPageChange={(page) => {
          dispatch(getNewsList(page));
          setCurPage(page);
        }}
        totalCount={resultCount}
        pageLimit={ADMIN_NEWS_PAGE_SIZE}
        curPage={curPage}
      />
      {/* add modal */}
      <AdminNewsAddEditModal
        show={addModalOpened}
        fetchData={() => dispatch(getNewsList(curPage))}
        onClose={() => setAddModalOpened(false)}
      />
      {/* edit Modal */}
      {editingItem && (
        <AdminNewsAddEditModal
          show={editModalOpened}
          fetchData={() => dispatch(getNewsList(curPage))}
          onClose={() => setEditModalOpened(false)}
          isEdit
          newsData={editingItem}
        />
      )}
      {deleteingItemid && (
        <AdminDeleteModal
          show={deleteModalOpened}
          onClose={() => setDeleteModalOpened(false)}
          id={deleteingItemid}
          onDelete={onDelete}
          title={"Delete News"}
          confirmText={"Are you sure you want to delete this news item?"}
        />
      )}
    </section>
  );
};

export default AdminNews;
