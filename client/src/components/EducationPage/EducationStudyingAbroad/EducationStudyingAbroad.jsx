import styles from "./EducationStudyingAbroad.module.scss";
import Accordion from "../../layout/Accordion/Accordion";

import {
  worldBlackImage,
  worldBlackWebpImage,
  worldWhiteImage,
  worldWhitekWebpImage,
  teacherBlackImage,
  teacherBlackWebpImage,
  teacherWhiteImage,
  teacherWhiteWebpImage,
  familliarityBLackImage,
  familliarityBLackWebpImage,
  familliarityWhiteImage,
  familliarityWhiteWebpImage,
  languageSkillsBLackImage,
  languageSkillsBLackWebpImage,
  languageSkillsWhiteImage,
  languageSkillsWhiteWebpImage,
  growthBLackImage,
  growthBLackWebpImage,
  growthWhiteImage,
  growthWhitekWebpImage,
  networkingBlackImage,
  networkingBlackWebpImage,
  networkingWhiteImage,
  networkingWhiteWebpImage,
  careerBLackImage,
  careerBLackWebpImage,
  careerWhiteImage,
  careerWhiteWebpImage,
  homesicknessBlackImage,
  homesicknessBlackWebpImage,
  homesicknessWhiteImage,
  homesicknessWhiteWebpImage,
  barriersBlackImage,
  barriersBlackWebpImage,
  barriersWhiteImage,
  barriersWhitekWebpImage,
  adjustmentBlackImage,
  adjustmentBlackeWebpImage,
  adjustmentWhiteImage,
  adjustmentWhiteWebpImage,
  pressureBlackImage,
  pressureBlackWebpImage,
  pressureWhiteImage,
  pressureWhiteWebpImage,
  issuesBlackImage,
  issuesBlackeWebpImage,
  issuesWhiteImage,
  issuesWhiteWebpImage,
  accessBlackImage,
  accessBlackeWebpImage,
  accessWhiteImage,
  accessWhiteWebpImage,
} from "../../../assets/images";

const accordionItems = [
  {
    image: worldWhiteImage,
    webpImage: worldWhitekWebpImage,
    activeImage: worldBlackImage,
    activeWebpImage: worldBlackWebpImage,
    title: "Real-World Experience",
    content:
      "Teachers often have firsthand experience in their respective fields, providing students with relevant knowledge and practical applications of the subject matter.",
  },

  {
    image: teacherWhiteImage,
    webpImage: teacherWhiteWebpImage,
    activeImage: teacherBlackImage,
    activeWebpImage: teacherBlackWebpImage,
    title: "Collaborative Learning Environment",
    content:
      "Studying abroad provides the advantage of learning from educators who foster a friendly and approachable atmosphere. This supportive environment encourages open communication, making students feel comfortable engaging with the material and enhancing their overall educational experience.",
  },

  {
    image: familliarityWhiteImage,
    webpImage: familliarityWhiteWebpImage,
    activeImage: familliarityBLackImage,
    activeWebpImage: familliarityBLackWebpImage,
    title: "Cultural Exposure",
    content:
      "Students gain exposure to diverse cultures, perspectives, and ideas, enriching their understanding of the world.",
  },

  {
    image: languageSkillsWhiteImage,
    webpImage: languageSkillsWhiteWebpImage,
    activeImage: languageSkillsBLackImage,
    activeWebpImage: languageSkillsBLackWebpImage,
    title: "Language Skills",
    content:
      "Immersion in a foreign language environment helps improve language proficiency and communication skills",
  },

  {
    image: growthWhiteImage,
    webpImage: growthWhitekWebpImage,
    activeImage: growthBLackImage,
    activeWebpImage: growthBLackWebpImage,
    title: "Personal Growth",
    content:
      "Living and studying in a new country fosters independence, adaptability, and resilience.",
  },

  {
    image: networkingWhiteImage,
    webpImage: networkingWhiteWebpImage,
    activeImage: networkingBlackImage,
    activeWebpImage: networkingBlackWebpImage,
    title: "Global Networking",
    content:
      "Students have the opportunity to build an international network of friends and professional contacts.",
  },

  {
    image: careerWhiteImage,
    webpImage: careerWhiteWebpImage,
    activeImage: careerBLackImage,
    activeWebpImage: careerBLackWebpImage,
    title: "Enhanced Career Opportunities",
    content:
      "International experience can make graduates more attractive to employers in a global job market",
  },

  // МИнусы
  {
    image: homesicknessWhiteImage,
    webpImage: homesicknessWhiteWebpImage,
    activeImage: homesicknessBlackImage,
    activeWebpImage: homesicknessBlackWebpImage,
    title: "Homesickness",
    content:
      "Being away from family and friends can lead to feelings of isolation and longing for home.",
  },

  {
    image: barriersWhiteImage,
    webpImage: barriersWhitekWebpImage,
    activeImage: barriersBlackImage,
    activeWebpImage: barriersBlackWebpImage,
    title: "Language Barriers",
    content:
      "Difficulty in communication other than used to speak can create challenges in both academic and social settings.",
  },

  {
    image: adjustmentWhiteImage,
    webpImage: adjustmentWhiteWebpImage,
    activeImage: adjustmentBlackImage,
    activeWebpImage: adjustmentBlackeWebpImage,
    title: "Cultural Adjustment",
    content:
      "Adapting to new social norms and practices can be overwhelming and stressful.",
  },

  {
    image: pressureWhiteImage,
    webpImage: pressureWhiteWebpImage,
    activeImage: pressureBlackImage,
    activeWebpImage: pressureBlackWebpImage,
    title: "Academic Pressure",
    content:
      "The expectations in a new academic environment may lead to increased stress and anxiety.",
  },

  {
    image: issuesWhiteImage,
    webpImage: issuesWhiteWebpImage,
    activeImage: issuesBlackImage,
    activeWebpImage: issuesBlackeWebpImage,
    title: "Visa and Legal Issues",
    content:
      "Navigating visa requirements and understanding foreign regulations can be complex and time-consuming.",
  },

  {
    image: accessWhiteImage,
    webpImage: accessWhiteWebpImage,
    activeImage: accessBlackImage,
    activeWebpImage: accessBlackeWebpImage,
    title: "Healthcare Access",
    content:
      "Adjusting to different healthcare systems may pose challenges, especially for those with specific health needs.",
  },
];

const EducationStudyingAbroad = () => {
  return (
    <section
      className={`${styles.educationStudyingAbroad} wrapperBlack wrapperPadding`}
    >
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
