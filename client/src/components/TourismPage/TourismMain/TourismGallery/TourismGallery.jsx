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
  gallerySlide10Image,
  gallerySlide10WebpImage,
  gallerySlide11Image,
  gallerySlide11WebpImage,
  gallerySlide12Image,
  gallerySlide12WebpImage,
  gallerySlide13Image,
  gallerySlide13WebpImage,
  gallerySlide14Image,
  gallerySlide14WebpImage,
  gallerySlide15Image,
  gallerySlide15WebpImage,
  gallerySlide16Image,
  gallerySlide16WebpImage,
  gallerySlide17Image,
  gallerySlide17WebpImage,
  gallerySlide18Image,
  gallerySlide18WebpImage,
  gallerySlide19Image,
  gallerySlide19WebpImage,
  gallerySlide20Image,
  gallerySlide20WebpImage,
  gallerySlide21Image,
  gallerySlide21WebpImage,
  gallerySlide22Image,
  gallerySlide22WebpImage,
  gallerySlide23Image,
  gallerySlide23WebpImage,
  gallerySlide24Image,
  gallerySlide24WebpImage,
  gallerySlide25Image,
  gallerySlide25WebpImage,
  gallerySlide26Image,
  gallerySlide26WebpImage,
  gallerySlide27Image,
  gallerySlide27WebpImage,
  gallerySlide28Image,
  gallerySlide28WebpImage,
  gallerySlide29Image,
  gallerySlide29WebpImage,
  gallerySlide30Image,
  gallerySlide30WebpImage,
  gallerySlide31Image,
  gallerySlide31WebpImage,
  gallerySlide32Image,
  gallerySlide32WebpImage,
  gallerySlide33Image,
  gallerySlide33WebpImage,
  gallerySlide34Image,
  gallerySlide34WebpImage,
} from "../../../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
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
  {
    image: gallerySlide10Image,
    webp: gallerySlide10WebpImage,
  },
  {
    image: gallerySlide11Image,
    webp: gallerySlide11WebpImage,
  },
  {
    image: gallerySlide12Image,
    webp: gallerySlide12WebpImage,
  },
  {
    image: gallerySlide13Image,
    webp: gallerySlide13WebpImage,
  },
  {
    image: gallerySlide14Image,
    webp: gallerySlide14WebpImage,
  },
  {
    image: gallerySlide15Image,
    webp: gallerySlide15WebpImage,
  },
  {
    image: gallerySlide16Image,
    webp: gallerySlide16WebpImage,
  },
  {
    image: gallerySlide17Image,
    webp: gallerySlide17WebpImage,
  },
  {
    image: gallerySlide18Image,
    webp: gallerySlide18WebpImage,
  },
  {
    image: gallerySlide19Image,
    webp: gallerySlide19WebpImage,
  },
  {
    image: gallerySlide20Image,
    webp: gallerySlide20WebpImage,
  },
  {
    image: gallerySlide21Image,
    webp: gallerySlide21WebpImage,
  },
  {
    image: gallerySlide22Image,
    webp: gallerySlide22WebpImage,
  },
  {
    image: gallerySlide23Image,
    webp: gallerySlide23WebpImage,
  },
  {
    image: gallerySlide24Image,
    webp: gallerySlide24WebpImage,
  },
  {
    image: gallerySlide25Image,
    webp: gallerySlide25WebpImage,
  },
  {
    image: gallerySlide26Image,
    webp: gallerySlide26WebpImage,
  },
  {
    image: gallerySlide27Image,
    webp: gallerySlide27WebpImage,
  },
  {
    image: gallerySlide28Image,
    webp: gallerySlide28WebpImage,
  },
  {
    image: gallerySlide29Image,
    webp: gallerySlide29WebpImage,
  },
  {
    image: gallerySlide30Image,
    webp: gallerySlide30WebpImage,
  },
  {
    image: gallerySlide31Image,
    webp: gallerySlide31WebpImage,
  },
  {
    image: gallerySlide32Image,
    webp: gallerySlide32WebpImage,
  },
  {
    image: gallerySlide33Image,
    webp: gallerySlide33WebpImage,
  },
  {
    image: gallerySlide34Image,
    webp: gallerySlide34WebpImage,
  },
];

const TourismGallery = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tumbnails = !isMobile
    ? galleryImages
    : galleryImages.slice(
        Math.max(
          0,
          activeIndex - (activeIndex === galleryImages.length - 1 ? 2 : 1)
        ),
        Math.min(galleryImages.length, activeIndex + (activeIndex ? 2 : 3))
      );

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
