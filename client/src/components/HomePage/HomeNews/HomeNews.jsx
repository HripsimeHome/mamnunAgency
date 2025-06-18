import { useDispatch, useSelector } from "react-redux";
import styles from "./HomeNews.module.scss";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider";
import NewsBlogItem from "../../global/NewsBlogItem/NewsBlogItem";
import { useEffect, useRef, useState } from "react";
import { getNewsList } from "../../../store/slices/newsSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Svg from "../../layout/Svg/Svg";
import { sliderArrowLeftIcon, sliderArrowRightIcon } from "../../../assets/svg";
import "swiper/css/pagination";
import "./sliderDots.scss";
import HomeNewsModal from "./HomeNewsModal/HomeNewsModal";

const HomeNews = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.data);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const paginationContainerRef = useRef(null);
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    dispatch(getNewsList(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedItem =
    news && news.length
      ? news.find((item) => item.id === selectedNewsId)
      : null;

  return (
    <TransitionProvider
      inProp={!!(news && news.length)}
      style={TransitionStyleTypes.height}
      height={700}
      className={`${styles.homeNews} wrapperWhite`}
    >
      <div className="container">
        <h2 className="titleSecondaryH2">
          News&nbsp;
          <span className="titlePrimaryH2">Blog</span>
        </h2>

        <div className={styles.homeNews__slideContainer}>
          <Swiper
            slidesPerView={1}
            className={styles.homeNews__slider}
            spaceBetween={0}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}">${index + 1}</span>`,
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation === "object") {
                swiper.params.navigation.nextEl = nextButtonRef.current;
                swiper.params.navigation.prevEl = prevButtonRef.current;
              }
            }}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1.8,
                spaceBetween: 30,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 83,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
              },
            }}
          >
            {news &&
              news?.length &&
              news.map((item, index) => (
                <SwiperSlide key={index}>
                  <NewsBlogItem
                    {...item}
                    className={styles.homeNews__slide}
                    onClick={(id) => {
                      setSelectedNewsId(id);
                      setModalOpened(true);
                    }}
                  />
                </SwiperSlide>
              ))}
            <div className={styles.homeNews__sliderNavigation}>
              <button
                ref={prevButtonRef}
                className={styles.homeNews__sliderNavBtn}
              >
                <Svg id={sliderArrowLeftIcon} />
              </button>
              <div
                className={styles.homeNews__pagination}
                ref={paginationContainerRef}
              ></div>
              <button
                ref={nextButtonRef}
                className={styles.homeNews__sliderNavBtn}
              >
                <Svg id={sliderArrowRightIcon} />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
      {selectedItem && (
        <HomeNewsModal
          show={modalOpened}
          onClose={() => setModalOpened(false)}
          {...selectedItem}
        />
      )}
    </TransitionProvider>
  );
};

export default HomeNews;
