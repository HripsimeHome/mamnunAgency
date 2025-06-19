import styles from "./EducationOffer.module.scss";
import Svg from "../../../layout/Svg/Svg";

import { starStoryIcon } from "../../../../assets/svg";

const offerData = [
  {
    //iconInActive: {starStoryIcon},
    icon: { starStoryIcon },
    title: "Degree Programs",
    description:
      "Our expertise spans a wide range of educational pathways, including Foundation programs that lay the groundwork for future studies, Bachelor’s degrees that provide comprehensive undergraduate education, Master’s programs that offer advanced knowledge and specialized skills, and PhD programs that foster in-depth research and academic excellence.",
  },

  {
    //iconInActive: {starStoryIcon},
    icon: { starStoryIcon },
    title: "Language Courses",
    description:
      "Enhance your language skills with our comprehensive language courses abroad, available in both short and long-term formats! Whether you're looking to boost your proficiency for travel, work, or personal growth, our experienced instructors provide tailored lessons in immersive environments. Join us and unlock new opportunities through language learning in a vibrant international setting!",
  },

  {
    //iconInActive: {starStoryIcon},
    icon: { starStoryIcon },
    title: "Short term program",
    description:
      "We help you enhance your skills and broaden your horizons with our short-term academic programs! These courses allow you to gain new skills, earn certificates, overcome your language barriers and immerse yourself in diverse cultures. Participating in these programs not only enhances your academic profile but also boosts your career prospects",
  },

  {
    //iconInActive: {starStoryIcon},
    icon: { starStoryIcon },
    title: "Teacher Training",
    description:
      "Enhance your teaching skills with the comprehensive Teacher Training Programs offered by trusted partners. Designed for educators at all levels, our programs cover innovative teaching strategies, classroom management, curriculum development, and technology integration.",
  },

  {
    //iconInActive: {starStoryIcon},
    icon: { starStoryIcon },
    title: "Summer / Winter Camps",
    description:
      "Our Winter and Summer Camps abroad for children and teenagers aged 8 to 17 are not just holiday experiences; they are the first step towards your child's future! These transformative programs blend fun activities with personal development, cultural immersion, and essential life skills. Enroll your child today to help them build confidence, make lifelong friendships, and prepare for a successful future!",
  },

  {
    //iconInActive: {starStoryIcon},
    icon: { starStoryIcon },
    title: "Internships",
    description:
      "Gain real-world experience and take the next step in your career with our internship programs. Designed to bridge the gap between academic learning and professional practice, our programs provide hands-on training in diverse fields and top global organizations. Work alongside industry experts, develop valuable skills, and receive mentorship to confidently navigate your career path.",
  },

  {
    //iconInActive: "languageCoursesIcon",
    icon: "languageCoursesIcon",
    title: "Au Pair",
    description:
      "Join our Au Pair program and immerse yourself in a unique cultural exchange experience while providing childcare in a welcoming host family environment. This program offers you the opportunity to enhance your language skills, gain valuable life experience, and create lasting memories. Discover more about how you can embark on this enriching journey with us!",
  },

  {
    //iconInActive: "languageCoursesIcon",
    icon: { starStoryIcon },
    title: "Work & Travel ",
    description:
      "Embark on an exciting adventure with our Work & Travel program in Germany! This unique opportunity allows you to work during your summer break while experiencing the rich culture and vibrant lifestyle of Germany. Join us to create unforgettable memories and enhance your professional skills in a dynamic international environment!",
  },
];

const EducationOffer = () => {
  return (
    <section className={`${styles.educationOffer} wrapperWhite`}>
      <h2 className="titleSecondaryH2">
        We&nbsp;
        <span className="titlePrimaryH2">offer</span>
      </h2>

      <div className={styles.educationOffer__container}>
        {/* Left column: first 4 items */}
        <div className={styles.educationOffer__leftColumn}>
          {offerData.slice(0, 4).map(({ icon, title, description }, index) => (
            <div className={styles.educationOffer__panel} key={index}>
              <div className={styles.educationOffer__titleBlock}>
                <Svg id={icon} className={styles.educationOffer__icon} />
                <h3 className={styles.educationOffer__title}>{title}</h3>
              </div>
              <p className={styles.educationOffer__description}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className={styles.educationOffer__rightColumn}>
          {offerData.slice(4).map(({ icon, title, description }, index) => (
            <div className={styles.educationOffer__panel} key={index + 4}>
              <div className={styles.educationOffer__titleBlock}>
                <Svg id={icon} className={styles.educationOffer__icon} />
                <h3 className={styles.educationOffer__title}>{title}</h3>
              </div>
              <p className={styles.educationOffer__description}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <h2 className="titleSecondaryH2">Application process and       
           <br />   
          <span className="titlePrimaryH2">requirements             
          </span>
        </h2>  */}
    </section>
  );
};

export default EducationOffer;
