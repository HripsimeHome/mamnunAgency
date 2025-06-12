import styles from "./HomeHeader.module.scss";

import  {
  homeVideo  
} from "../../../assets/videos"

const HomeHeader = () => {
  return (        
    <section className={styles.homeHeader}>   
        {/* <source src="/videos/home/home.mp4" type="video/mp4" /> */}
      <video 
        controls autoPlay muted loop
        className={styles.homeHeader__video}>     
       
        <source src={homeVideo} />
       Your browser does not support the video tag.
      </video>
      {/* три девиза 
        1. Travel Far горит кнопка Tourism 
        2. Learn Deep горит кнопка Education
        3. Experience True Satisfaction горит кнопка VIP Services  
        */}

      {/* или h1 */}
      {/* 
      <h2 className="titleWhiteh2">
      Travel Far    
      </h2>

      <h2 className="titleWhiteh2">
      Learn Deep    
      </h2>

      <h2 className="titleWhiteh2">
      Experience True Satisfaction    
      </h2> */}


 
    </section>  
  );
};

export default HomeHeader;