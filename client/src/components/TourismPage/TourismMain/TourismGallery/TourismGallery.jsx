import styles from "./TourismGallery.module.scss";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";

import {
  previewImage,
  previewWebpImage,
  thumbnailImage,
  thumbnailwWebpImage,
} from "../../../../assets/images";

const TourismGallery = () => {
  return (
    <section className={styles.tourismGallery}>
      <div className="container">
        <div className={styles.gridWrapper}>
          {/* Big Preview Image */}
          <div className={styles.bigImage}>
            <ImageWebp src={previewImage} webp={previewWebpImage} alt="Preview" />
          </div>

          {/* 3 Right-side small images in a column */}
          <div className={styles.rightColumn}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className={styles.rightImage}>
                <ImageWebp
                  src={thumbnailImage}
                  webp={thumbnailwWebpImage}
                  alt={`Right ${i + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Bottom row with 6 images spaced by 48px */}
          <div className={styles.bottomRow}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.bottomImage}>
                <ImageWebp
                  src={thumbnailImage}
                  webp={thumbnailwWebpImage}
                  alt={`Bottom ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismGallery;