import styles from "./EducationScholarships.module.scss";
import { Link } from "react-router-dom";
import Svg from "../../layout/Svg/Svg";


import {  
  contactsPagePath 
} from "../../../router/path";


import {
  starStoryIcon 
} from "../../../assets/svg";

const EducationScholarships = () => {
  return (    
    <section className={`${styles.sducationScholarships} wrapperBlack`}>
      <div className="container"> 
        <h2 className="titleWhiteh2">Scholarships and&nbsp;          
          <span className="titlePurpleh2">Financial Aid             
          </span>
        </h2>  
        <p className={styles.sducationScholarships__text}> 
          Universities worldwide offer a variety of scholarships and financial aid options to support students in their academic pursuits. Let’s look through the
        </p>





        
          <div className={styles.sducationScholarships__title}>
            <span className={styles.sducationScholarships__whiteText}>
              Types of Scholarships              
            </span>
            <span className={styles.sducationScholarships__greyText}>
             Financial Aid Options
            </span>
          </div>





         <div className={styles.sducationScholarships__container}> 

         </div>


        <p className={styles.sducationScholarships__text}> 
          It is important to note that the availability and types of scholarships and financial aid can vary significantly from university to university. Each institution has its own policies, funding sources, and criteria for awarding financial support. If you wish to get ore detailed information, feel free to contact us to          
         </p>

         <Link 
          to={contactsPagePath}>          
          get free consultation
         </Link>
 
















      </div>      
    </section>  
  );
};

export default EducationScholarships;