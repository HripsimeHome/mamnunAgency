import styles from "./TourismGallery.module.scss";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";

import {
  gallerySlide1Image,
  gallerySlide1WebpImage,
  gallerySlide2Image,
  gallerySlide2WebpImage,
  gallerySlide3Image,
  gallerySlide3WebpImage,
  gallerySlide4Image,
  gallerySlide4WebpImage,
  gallerySlide5Image,
  gallerySlide5WebpImage,
  gallerySlide6Image,
  gallerySlide6WebpImage,
  gallerySlide7Image,
  gallerySlide7WebpImage,
  gallerySlide8Image,
  gallerySlide8WebpImage,
  gallerySlide9Image,
  gallerySlide9WebpImage,
} from "../../../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import Svg from "../../../layout/Svg/Svg";
import { tourismGallerySliderArrowIcon } from "../../../../assets/svg";

const galleryImages = [
  {
    image: gallerySlide1Image,
    webp: gallerySlide1WebpImage,
  },
  {
    image: gallerySlide2Image,
    webp: gallerySlide2WebpImage,
  },
  {
    image: gallerySlide3Image,
    webp: gallerySlide3WebpImage,
  },
  {
    image: gallerySlide4Image,
    webp: gallerySlide4WebpImage,
  },
  {
    image: gallerySlide5Image,
    webp: gallerySlide5WebpImage,
  },
  {
    image: gallerySlide6Image,
    webp: gallerySlide6WebpImage,
  },
  {
    image: gallerySlide7Image,
    webp: gallerySlide7WebpImage,
  },
  {
    image: gallerySlide8Image,
    webp: gallerySlide8WebpImage,
  },
  {
    image: gallerySlide9Image,
    webp: gallerySlide9WebpImage,
  },
];

const TourismGallery = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = window.innerWidth < 576;

  const tumbnails = !isMobile
    ? galleryImages
    : galleryImages.slice(
        Math.max(
          0,
          activeIndex - (activeIndex === galleryImages.length - 1 ? 2 : 1)
        ),
        Math.min(galleryImages.length, activeIndex + (activeIndex ? 2 : 3))
      );

  console.log({ tumbnails });

  return (
    <section className={`container ${styles.tourismGallery}`}>
      <div className={styles.tourismGallery__gridWrapper}>
        <div className={styles.tourismGallery__bigImage}>
          <Swiper
            slidesPerView={1}
            className={styles.tourismGallery__slider}
            spaceBetween={0}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
              if (typeof swiper.params.navigation === "object") {
                swiper.params.navigation.nextEl = nextButtonRef.current;
                swiper.params.navigation.prevEl = prevButtonRef.current;
              }
            }}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            initialSlide={activeIndex}
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <ImageWebp src={image.image} webp={image.webp} alt="Preview" />
              </SwiperSlide>
            ))}
            <div>
              <button
                ref={prevButtonRef}
                className={`${styles.tourismGallery__sliderNavBtn} ${styles.tourismGallery__sliderNavBtn_left} `}
              >
                <Svg id={tourismGallerySliderArrowIcon} />
              </button>
              <button
                ref={nextButtonRef}
                className={`${styles.tourismGallery__sliderNavBtn} ${styles.tourismGallery__sliderNavBtn_right} `}
              >
                <Svg id={tourismGallerySliderArrowIcon} />
              </button>
            </div>
          </Swiper>
        </div>
        {/* Thumbnails */}
        {tumbnails.map((img, index) => (
          <button
            key={index}
            className={`${styles.tourismGallery__tumbnailBtn} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => {
              setActiveIndex(index);
              if (swiperRef.current) {
                swiperRef.current.slideTo(index);
              }
            }}
            type="button"
            aria-label={`Show gallery image ${index + 1}`}
          >
            <ImageWebp
              src={img.image}
              webp={img.webp}
              className={styles.tourismGallery__tumbnailImage}
              pictureClass={styles.tourismGallery__tumbnailPicture}
              alt={`Gallery image ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default TourismGallery;
