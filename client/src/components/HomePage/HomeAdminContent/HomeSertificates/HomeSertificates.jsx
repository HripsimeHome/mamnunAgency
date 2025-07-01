import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";

import styles from "./HomeSertificates.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setImagePath } from "../../../../utils/files";
import { getCertificatesList } from "../../../../store/slices/certificatesSlice";
import { Autoplay } from "swiper/modules";

const HomeSertificates = () => {
  const dispatch = useDispatch();
  const certificates = useSelector((state) => state.certificates.data);

  useEffect(() => {
    dispatch(getCertificatesList(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!certificates || !certificates.length) return null;
  return (
    <div className={`${styles.homeSertificates} container`}>
      <div className={styles.homeSertificates__overlay}></div>
      <Swiper
        slidesPerView={3}
        modules={[Autoplay]}
        className={styles.homeSertificates__slider}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          576: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {certificates &&
          certificates?.length &&
          certificates.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={setImagePath(item.image)}
                key={index}
                alt="certificate"
                className={styles.homeSertificates__slideImg}
                crossOrigin="anonimus"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HomeSertificates;
