import styles from "./EducationStudyingAbroad.module.scss";
import Accordion from "../../layout/Accordion/Accordion";

import { meritBasedIcon } from "../../../assets/svg";

const accordionItems = [
  {
    icon: meritBasedIcon,
    title: "Real-World Experience",
    content:
      "Teachers often have firsthand experience in their respective fields, providing students with relevant knowledge and practical applications of the subject matter.",
  },

  {
    icon: meritBasedIcon,
    title: "Collaborative Learning Environment",
    content:
      "Studying abroad provides the advantage of learning from educators who foster a friendly and approachable atmosphere. This supportive environment encourages open communication, making students feel comfortable engaging with the material and enhancing their overall educational experience.",
  },

  {
    icon: meritBasedIcon,
    title: "Cultural Exposure",
    content:
      "Students gain exposure to diverse cultures, perspectives, and ideas, enriching their understanding of the world.",
  },

  {
    icon: meritBasedIcon,
    title: "Language Skills",
    content:
      "Immersion in a foreign language environment helps improve language proficiency and communication skills",
  },

  {
    icon: meritBasedIcon,
    title: "Personal Growth",
    content:
      "Living and studying in a new country fosters independence, adaptability, and resilience.",
  },

  {
    icon: meritBasedIcon,
    title: "Global Networking",
    content:
      "Students have the opportunity to build an international network of friends and professional contacts.",
  },

  {
    icon: meritBasedIcon,
    title: "Enhanced Career Opportunities",
    content:
      "International experience can make graduates more attractive to employers in a global job market",
  },

  // МИнусы
  {
    icon: meritBasedIcon,
    title: "Homesickness",
    content:
      "Being away from family and friends can lead to feelings of isolation and longing for home.",
  },

  {
    icon: meritBasedIcon,
    title: "Language Barriers",
    content:
      "Difficulty in communication other than used to speak can create challenges in both academic and social settings.",
  },

  {
    icon: meritBasedIcon,
    title: "Cultural Adjustment",
    content:
      "Adapting to new social norms and practices can be overwhelming and stressful.",
  },

  {
    icon: meritBasedIcon,
    title: "Academic Pressure",
    content:
      "The expectations in a new academic environment may lead to increased stress and anxiety.",
  },

  {
    icon: meritBasedIcon,
    title: "Visa and Legal Issues",
    content:
      "Navigating visa requirements and understanding foreign regulations can be complex and time-consuming.",
  },

  {
    icon: meritBasedIcon,
    title: "Healthcare Access",
    content:
      "Adjusting to different healthcare systems may pose challenges, especially for those with specific health needs.",
  },
];

const EducationStudyingAbroad = () => {
  return (
    <section className={`${styles.educationStudyingAbroad} wrapperBlack`}>
      <div className="container">
        <h2 className="titleWhiteH2">
          Pros and Cons of studying&nbsp;
          <span className="titlePrimaryH2">abroad</span>
        </h2>

         <>
          <Accordion 
            accordionItems={accordionItems} 
            className={styles.educationStudyingAbroad__accordionContainer}
          />
        </>
        <p className={styles.educationStudyingAbroad__text}>
          At MAMNUN, we are here to guide you through these considerations,
          ensuring you have all the information you need to make the best
          decision for your future. Let us help you navigate your educational
          journey with clarity and confidence. Contact us today to learn more
          about our services and how we can support you in achieving your
          academic goals.
        </p>
      </div>
    </section>
  );
};

export default EducationStudyingAbroad;
