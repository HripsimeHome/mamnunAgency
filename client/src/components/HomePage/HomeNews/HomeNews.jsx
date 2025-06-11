import styles from "./HomeNews.module.scss";

import {
  newsImage
} from  "../../../assets/images"

const newsData = [
  {
    image: newsImage, 
    title: "News blog 1",
    description: "We are a proud family-owned company dedicated to delivering exceptional education and travel services customized just for you.",
    date: "01.05.2025"
  },

  {
    image: newsImage, 
    title: "News blog 1",
    description: "We are a proud family-owned company dedicated to delivering exceptional education and travel services customized just for you.",
    date: "01.05.2025"
  },

  {
    image: newsImage, 
    title: "News blog 1",
    description: "We are a proud family-owned company dedicated to delivering exceptional education and travel services customized just for you.",
    date: "01.05.2025"
  },

  {
    image: newsImage, 
    title: "News blog 1",
    description: "We are a proud family-owned company dedicated to delivering exceptional education and travel services customized just for you.",
    date: "01.05.2025"
  },

  {
    image: newsImage, 
    title: "News blog 1",
    description: "We are a proud family-owned company dedicated to delivering exceptional education and travel services customized just for you.",
    date: "01.05.2025"
  }
]


const HomeNews = () => {
  return (        
    <section className={`${styles.homeNews} wrapperWhite`}>
      <div className="container">
        <h2 className="titleBlackh2">News&nbsp;
          <span className="titlePurpleh2">Blog             
          </span>
        </h2>  

        <div className={styles.homeNews__slideContainer}>
          {newsData.map(( {image, title, description, date}, index) => (
          <div 
            key={index}
            className={styles.homeNews__slide}
            // onClick={}
          > 
            <img 
              src={image}
              alt="News"
              className={styles.homeNews__img}
            />
            <h4 className={styles.homeNews__title}>
              {title}
            </h4>
            <p className={styles.homeNews__description}>
              {description}
            </p>
            <span className={styles.homeNews__date}>
              {date}
            </span>
          </div>
          ))}
          {/* slide */}         
       </div>
      </div>   
    </section>  
  );
};

export default HomeNews;