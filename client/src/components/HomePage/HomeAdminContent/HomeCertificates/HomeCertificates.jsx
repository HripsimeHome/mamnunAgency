import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";

import styles from "./HomeCertificates.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setImagePath } from "../../../../utils/files";
import { getCertificatesList } from "../../../../store/slices/certificatesSlice";
import { Autoplay } from "swiper/modules";

const HomeCertificates = () => {
  const dispatch = useDispatch();
  const certificates = useSelector((state) => state.certificates.data);

  useEffect(() => {
    dispatch(getCertificatesList(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!certificates || !certificates.length) return null;
  return (
    <div className={`${styles.homeCertificates} container`}>
      <div className={styles.homeCertificates__overlay}></div>
      <Swiper
        slidesPerView={3}
        modules={[Autoplay]}
        className={styles.homeCertificates__slider}
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
                className={styles.homeCertificates__slideImg}
                crossOrigin="anonimus"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HomeCertificates;
