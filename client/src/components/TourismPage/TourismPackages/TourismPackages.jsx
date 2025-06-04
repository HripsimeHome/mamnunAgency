import styles from "./TourismPackages.module.scss";

const TourismPackages = () => {
  return (        
    <section className={`${styles.tourismPackages} wrapperBlack`}>
      <div className="container">  
        <h2 className="titleWhiteh2">Travel packages + Cultural&nbsp;           
          <span className="titlePurpleh2">tips and recommendations         
          </span>
        </h2>  
      </div>      
    </section>  
  );
};

export default TourismPackages;