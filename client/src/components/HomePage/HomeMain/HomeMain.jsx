import styles from "./HomeMain.module.scss";

const HomeMain = () => {
  return (        
    <section className={`${styles.homeMain} wrapperBlack`}>   
     <div className="container">     

      <h2 className="titleWhiteh2">Reasons to&nbsp;
        <span className="titlePurpleh2">Choouse Us             
        </span>
      </h2>

      <br />

      <h2 className="titleWhiteh2">Overview of&nbsp;
        <span className="titlePurpleh2">Our Services             
        </span>
      </h2>

      </div> 
    </section>  
  );
};

export default HomeMain;