import styles from "./EducationStories.module.scss";

const EducationStories = () => {
  return (
   <section className={`${styles.educationStories} wrapperWhite`}>
    <div className="container">
      <h2 className="titleBlackh2">Success stories of the&nbsp;          
        <span className="titlePurpleh2">students placed abroad             
        </span>
      </h2>  
       
    </div>      
   </section>  
  );
};

export default EducationStories;