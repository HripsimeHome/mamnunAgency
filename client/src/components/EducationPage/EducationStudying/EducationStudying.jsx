import styles from "./EducationStudying.module.scss";
import Accordion from "../../layout/Accordion/Accordion";
 

import {   
   meritBasedIcon,   
     
} from "../../../assets/svg";


const accordionItems = [
  // Плюсы
  {
    icon: meritBasedIcon,
    title: "Accessibility",
    content: "Education is compulsory and free for 11 years for locals, ensuring that a significant portion of the population has access to basic education."
  },

  {
    icon: meritBasedIcon,
    title: "Curriculum Reform",
    content: "Recent reforms are making strides to modernize the curriculum by incorporating new subjects and teaching methods, aligning with global educational standards, and these initiatives are in the early stages of implementation, promising exciting developments for the future of education in Uzbekistan."
  },
  
  {
    icon: meritBasedIcon,
    title: "Technological Integration",
    content: "Efforts are underway to introduce computer technology into educational institutions, enhancing teaching methods and resources. While these initiatives are still in the early stages, they hold great promise for transforming the learning experience in Uzbekistan."
  },
  
  // {
  //   icon: meritBasedIcon,
  //   title: "Moral and Ethical Education",
  //   content: 'The education system emphasizes instilling morals and ethics in students from early childhood. Quotations often used in schools, such as "Family is your little country," "Your teacher should be respected as your father," and "Water is everything—appreciate it," help shape students' character and values, guiding them on the qualities that define a respectful and caring individual.'
  // },
  
  {
    icon: meritBasedIcon,
    title: "Cultural Familiarity",
    content: "Studying in your home country allows you to remain close to family and friends, providing a support system during your educational journey"
  },
  
  {
    icon: meritBasedIcon,
    title: "Heritage Skills",
    content: "Uzbekistan offers unique classes that pass down traditional skills from generation to generation, such as handcrafting, silk fabric making, carpet weaving, and pottery. These programs not only preserve cultural heritage but also provide practical skills that can be valuable in various careers."
  },


  // Минусы
  {
    icon: meritBasedIcon,
    title: "Lack of Practical Experience",
    content: "Many teachers in Uzbekistan lack real-life experience in the subjects they teach. As a result, students often receive only theoretical knowledge, which can lead to a weak practical understanding. This gap can be stressful for graduates when applying for jobs, as they may feel unprepared for the workforce."
  },

  {
    icon: meritBasedIcon,
    title: "Boring Lectures",
    content: "The emphasis on theoretical learning, combined with outdated programs, can make lectures monotonous and disengaging for students, reducing their motivation and interest in the subject matter."
  },

  {
    icon: meritBasedIcon,
    title: "Rigid Curriculum",
    content: "Although reforms are underway, the curriculum remains somewhat rigid, with limited flexibility for institutions to tailor their programs to specific needs"
  },

  {
    icon: meritBasedIcon,
    title: "Digital Learning Challenges",
    content: "The transition to digital learning has been gradual, and many universities have faced difficulties in maintaining standards during the pandemic. As a result, the educational experience for students has been impacted, and the system has not yet reached the level of digital integration seen in many foreign countries."
  }, 

  {
    icon: meritBasedIcon,
    title: "Limited Teacher Supply",
    content: "The expansion of curricula, including new languages and subjects, has placed additional stress on the already limited supply of qualified teachers."
  }   
]

const EducationStudying = () => {
  return (        
    <section className={`${styles.educationStudying} wrapperWhite`}>
      <div className="container"> 
        <h2 className="titleBlackh2">Pros and Cons of studying&nbsp;
          <br />
          <span className="titlePurpleh2">in Uzbekistan             
          </span>
        </h2>  

        <div className={styles.educationStudying__accordionContainer}>       
          {accordionItems.map(({ icon, title, content }, index) => (  
          <Accordion
            key={index}
            icon={icon}
            title={title}
            content={content}
          />
          ))}        
        </div>
      </div>        
    </section>  
  );
};

export default EducationStudying;