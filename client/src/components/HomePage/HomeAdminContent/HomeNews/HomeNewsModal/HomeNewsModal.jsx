import Modal from "../../../../layout/Modal/Modal";
import styles from "./HomeNewsModal.module.scss";
import { setImagePath } from "../../../../../utils/files";
import { noImage } from "../../../../../assets/images";
import { formatDate } from "../../../../../utils/formatDate";

const HomeNewsModal = ({ show, onClose, image, title, description, date }) => {
  return (
    <Modal show={show} onClose={onClose} className={styles.homeNewsModal}>
      <div className={styles.homeNewsModal__main}>
        <div className={styles.homeNewsModal__col}>
          <div className={styles.homeNewsModal__imgWrapper}>
            <img
              src={setImagePath(image)}
              crossOrigin="anonimus"
              alt="news"
              className={styles.homeNewsModal__img}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = noImage;
              }}
            />
          </div>

          <div className={styles.homeNewsModal__info}>
            <h4 className={styles.homeNewsModal__title}>{title}</h4>
            <p
              dangerouslySetInnerHTML={{ __html: description || "" }}
              className={`quilText ${styles.homeNewsModal__description} thinScrollbar`}
            ></p>
            <p className={styles.homeNewsModal__date}>{formatDate(date)}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HomeNewsModal;
