import styles from "./TourismServices.module.scss";

const TourismServices = () => {
  return (        
    <section className={`${styles.tourismServices} wrapperBlack`}>
      <div className="container">  
        <h2 className="titleWhiteh2">Services&nbsp;           
          <span className="titlePurpleh2">we provide          
          </span>
        </h2>  
      </div>      
    </section>  
  );
};

export default TourismServices;