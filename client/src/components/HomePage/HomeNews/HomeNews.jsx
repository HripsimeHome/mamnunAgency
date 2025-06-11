import styles from "./HomeNews.module.scss";

const HomeNews = () => {
  return (        
    <section className={`${styles.homeNews} wrapperWhite`}>
      <div className="container">
        <h2 className="titleBlackh2">News&nbsp;
          <span className="titlePurpleh2">Blog             
          </span>
        </h2>  

        <div className={styles.homeNews__slideContainer}>

          <div>1</div>
          <div>2</div>
          <div>3</div>


        </div>



      </div>   
    </section>  
  );
};

export default HomeNews;