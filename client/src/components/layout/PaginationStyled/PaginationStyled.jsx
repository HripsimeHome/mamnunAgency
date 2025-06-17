import Pagination from "react-js-pagination";
import { sliderArrowLeftIcon, sliderArrowRightIcon } from "../../../assets/svg";
import Svg from "../Svg/Svg";

import styles from "./PaginationStyled.module.scss";
import { scrollTop } from "../../../utils/scrollTop";

const PaginationStyled = ({
  onPageChange,
  totalCount,
  curPage,
  pageLimit = 9,
}) => {
  return (
    <>
      {(totalCount || 0) > pageLimit && (
        <Pagination
          activePage={curPage}
          itemsCountPerPage={pageLimit}
          totalItemsCount={totalCount || 0}
          pageRangeDisplayed={6}
          onChange={(page) => {
            scrollTop();
            onPageChange(page);
          }}
          hideFirstLastPages={true}
          prevPageText={
            <Svg
              id={sliderArrowLeftIcon}
              className={styles.paginationStyled__arrow}
            />
          }
          nextPageText={
            <Svg
              id={sliderArrowRightIcon}
              className={styles.paginationStyled__arrow}
            />
          }
          itemClass={styles.paginationStyled__item}
          linkClass={styles.paginationStyled__link}
          disabledClass={styles.paginationStyled__item_disabled}
          activeClass={styles.paginationStyled__item_active}
          innerClass={styles.paginationStyled}
        />
      )}
    </>
  );
};

export default PaginationStyled;
