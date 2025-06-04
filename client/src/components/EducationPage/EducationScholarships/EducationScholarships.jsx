import styles from "./EducationScholarships.module.scss";

const EducationScholarships = () => {
  return (    
    <section className={`${styles.sducationScholarships} wrapperBlack`}>
      <div className="container"> 
        <h2 className="titleWhiteh2">Scholarships and&nbsp;          
          <span className="titlePurpleh2">Financial Aid             
          </span>
        </h2>  
        <p className={styles.sducationScholarships__subTitle}> 
          Universities worldwide offer a variety of scholarships and financial aid options to support students in their academic pursuits. Let’s look through the

        </p>
      </div>      
    </section>  
  );
};

export default EducationScholarships;