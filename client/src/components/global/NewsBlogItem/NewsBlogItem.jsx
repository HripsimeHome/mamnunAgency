import React, { useState } from "react";

import styles from "./NewsBlogItem.module.scss";
import { setImagePath } from "../../../utils/files";
import Svg from "../../layout/Svg/Svg";
import { deleteIcon, editIcon, pinIcon } from "../../../assets/svg";
import { noImage } from "../../../assets/images";
import { useDispatch } from "react-redux";
import { updateActiveDayNews } from "../../../store/slices/newsSlice";
import { openTooltip } from "../../../store/slices/UISlice";

const PinBtn = ({ id, activeDayNews }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handlePin = async (e) => {
    e.stopPropagation();
    try {
      setLoading(true);
      await dispatch(updateActiveDayNews(id)).unwrap();
      dispatch(openTooltip("News Pined successfully"));
    } catch (error) {
      dispatch(openTooltip("Failed to pin news"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handlePin}
      className={`${styles.newsBlogItem__actionBtn} ${
        styles.newsBlogItem__primarySwitcherBtn
      } ${activeDayNews ? styles.newsBlogItem__primarySwitcherBtn_active : ""}`}
    >
      <Svg id={pinIcon} />
    </button>
  );
};

const NewsBlogItem = ({
  id,
  title,
  description,
  image,
  date,
  activeDayNews,
  isAdmin,
  onEdit,
  onClick,
  onDelete,
}) => {
  return (
    <div className={styles.newsBlogItem} onClick={() => onClick(id)}>
      <img
        src={setImagePath(image)}
        alt="News"
        className={styles.newsBlogItem__img}
        crossOrigin="anonymous"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = noImage;
        }}
      />
      <h4 className={styles.newsBlogItem__title}>{title}</h4>
      <p className={styles.newsBlogItem__description}>{description}</p>
      <div className={styles.newsBlogItem__footer}>
        <span className={styles.newsBlogItem__date}>
          {new Date(date)
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
            .replaceAll("/", ".")}
        </span>
        {isAdmin && (
          <>
            <div className={styles.newsBlogItem__actions}>
              {onEdit && (
                <button
                  onClick={() => onEdit(id)}
                  className={`${styles.newsBlogItem__actionBtn} ${styles.newsBlogItem__editBtn}`}
                >
                  <Svg id={editIcon} />
                </button>
              )}
              {onDelete && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(id);
                  }}
                  className={`${styles.newsBlogItem__actionBtn} ${styles.newsBlogItem__deleteBtn}`}
                >
                  <Svg id={deleteIcon} />
                </button>
              )}
              <PinBtn id={id} activeDayNews={activeDayNews} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsBlogItem;
