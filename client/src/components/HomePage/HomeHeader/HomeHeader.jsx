import styles from "./HomeHeader.module.scss";

const HomeHeader = () => {
  return (
    <section className={styles.homeHeader}>
      {process.env.NODE_ENV !== "development" && (
        <video autoPlay muted loop className={styles.homeHeader__video}>
          Your browser does not support the video tag.
          <source src="/videos/home/home.mp4" type="video/mp4" />
        </video>
      )}

      {/* три девиза 
        1. Travel Far горит кнопка Tourism 
        2. Learn Deep горит кнопка Education
        3. Experience True Satisfaction горит кнопка VIP Services  
        */}

      {/* или h1 */}
      {/* 
      <h2 className="titleWhiteH2">
      Travel Far    
      </h2>

      <h2 className="titleWhiteH2">
      Learn Deep    
      </h2>

      <h2 className="titleWhiteH2">
      Experience True Satisfaction    
      </h2> */}
    </section>
  );
};

export default HomeHeader;
