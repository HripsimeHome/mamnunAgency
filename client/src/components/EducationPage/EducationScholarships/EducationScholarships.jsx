import styles from "./EducationScholarships.module.scss";
import { Link } from "react-router-dom";
import Svg from "../../layout/Svg/Svg";

import {  
  contactsPagePath 
} from "../../../router/path";

import {   
   meritBasedIcon,
   needBasedIcon,
   specificScholarshipsIcon,
   diversityScholarshipsIcon, 
   internationalScholarshipsIcon,
   governmentGrantsIcon,
   grantsIcon, 
   workStudyIcon, 
   loansIcon
     
} from "../../../assets/svg";
 

const tabData = [
  {
    icon: meritBasedIcon,
    title: "Merit-Based Scholarships:",
    description: "These are awarded based on academic, artistic, or athletic achievements. Students with high GPAs, test scores, or exceptional talents may qualify for these scholarships.",
  },

  {
    icon: needBasedIcon,
    title: "Need-Based Scholarships:",
    description: "Designed to assist students who demonstrate financial need, these scholarships often require applicants to submit financial information to determine eligibility.",
  },

  {
    icon: specificScholarshipsIcon,
    title: "Field-Specific Scholarships:",
    description: "Many scholarships are targeted towards students pursuing specific fields of study, such as STEM, arts, or humanities. These scholarships encourage students to enter professions that may be in high demand."
  },

  {
    icon: diversityScholarshipsIcon,
    title: "Diversity Scholarships:",
    description: "Aimed at promoting diversity within educational institutions, these scholarships support students from underrepresented backgrounds, including racial and ethnic minorities, LGBTQ+ individuals, and first-generation college students."    
  },

  {
    icon: internationalScholarshipsIcon,
    title: "International Scholarships:",
    description: "These are specifically for students from outside the host country, helping them cover tuition and living expenses while studying abroad. "
  },

  {
    icon: governmentGrantsIcon,
    title: "Government and Institutional Grants:",
    description: "Many governments and universities provide grants that do not need to be repaid. These can be based on merit, need, or specific criteria set by the institution."
  },

  // TFinancial Aid Options
  {
    icon: grantsIcon,
    title: "Grants:",
    description: "Unlike loans, grants do not need to be repaid. They are often awarded based on financial need and can come from federal, state, or institutional sources."
  }, 

  {
    icon: workStudyIcon,
    title: "Work-Study Programs:",
    description: "These programs allow students to work part-time while attending school, helping them earn money to pay for their education. Positions may be on-campus or with approved off-campus employers."
  },

  {
    icon: loansIcon,
    title: "Loans:",
    description: "While loans must be repaid with interest, they can provide necessary funding for students who need additional financial support. Federal student loans often have lower interest rates and more flexible repayment options compared to private loans."
  },
 
]

const EducationScholarships = () => {
  return (    
    <section className={`${styles.educationScholarships} wrapperBlack`}>
      <div className="container"> 
        <h2 className="titleWhiteh2">Scholarships and&nbsp;          
          <span className="titlePurpleh2">Financial Aid             
          </span>
        </h2>  
        <p className={styles.educationScholarships__text}> 
          Universities worldwide offer a variety of scholarships and financial aid options to support students in their academic pursuits. Let’s look through the
        </p>

        {/* //Tab title */}
        <div className={styles.educationScholarships__tabTitleContainer}>          
          <span className={styles.educationScholarships__whiteText}>
            Types of Scholarships              
          </span>
          <span className={styles.educationScholarships__greyText}>
            Financial Aid Options
          </span>     
        </div>
        {/* tabTitleContainer */}

         
        {tabData.map(({ icon, title, description }, index) => (           
          <div className={styles.educationScholarships__tabContent}>           
            <div 
              key={index} 
              className={styles.educationScholarships__titleBlock}>
              <Svg
                id={icon} 
                className={styles.educationScholarships__icon} 
              />
              <h3 className={styles.educationScholarships__title}>
              {title}
              </h3>
            </div>
            <div className={styles.educationScholarships__description}>
              {description}                      
            </div>        
          </div> 
        ))}
        {/* tabContent */}
 


        <p className={styles.educationScholarships__text}> 
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