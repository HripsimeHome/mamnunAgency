import styles from "./HomeMain.module.scss";
import HomeReasons from "./HomeReasons/HomeReasons";
import HomeServices from "./HomeServices/HomeServices";

const HomeMain = () => {
  return (        
    <section className={`${styles.homeMain} wrapperBlack`}>   
     <div className="container">
      <HomeReasons />      
      <HomeServices /> 
      </div> 
    </section>  
  );
};

export default HomeMain;