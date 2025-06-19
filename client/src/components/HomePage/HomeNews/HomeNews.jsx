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
import { newsImage } from "../../../assets/images";

const dummyData = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `News Title ${i + 1}`,
  description: `This is a sample description for news item ${i + 1}.`,
  image: newsImage,
  date: `2024-06-${String(i + 1).padStart(2, "0")}`,
}));

const HomeNews = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.data);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const paginationContainerRef = useRef(null);
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const data = dummyData;
  useEffect(() => {
    dispatch(getNewsList(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedItem =
    data && data.length
      ? data.find((item) => item.id === selectedNewsId)
      : null;

  return (
    <TransitionProvider
      inProp={!!(data && data.length)}
      style={TransitionStyleTypes.height}
      height={700}
      className={`${styles.homeNews} wrapperWhite wrapperPadding`}
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
            {data &&
              data?.length &&
              data.map((item, index) => (
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
