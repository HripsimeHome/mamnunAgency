import styles from "./EducationFAQ.module.scss";
import Accordion from "../../layout/Accordion/Accordion";

const accordionItems = [
  {
    title:
      "1. What services does MAMNUN provide for students looking to study abroad? ",
    content:
      "At MAMNUN, we offer a range of services, including assistance with university applications, visa processing, scholarship information, and guidance on educational pathways such as degree programs, short-term courses, internships, and teacher training",
  },

  {
    title:
      "2. What types of scholarships are available for international students?",
    content:
      "Scholarships for international students include merit-based scholarships, need-based scholarships, field-specific scholarships, diversity scholarships, and international scholarships specifically designed to support students studying abroad.",
  },

  {
    title: "3. How can I apply for a scholarship through MAMNUN?",
    content:
      "We provide information on various scholarships available at different universities. To apply, you can fill out our inquiry form, and we will guide you through the application process, including the necessary documentation and deadlines.",
  },

  {
    title: "4. How can I apply for studying abroad?",
    content:
      "The application process involves filling out a form, receiving a free consultation, signing an agreement, submitting required documents, and then allowing us to manage the rest of the process while keeping you updated.",
  },

  {
    title: "5. Are there financial aid options available for studying abroad?",
    content:
      "Yes, there are various financial aid options, including grants, work-study programs, and loans. We can help you explore these options to find the best financial support for your education.",
  },

  {
    title: "6. Are there financial aid options available for studying abroad? ",
    content:
      "Yes, there are various financial aid options, including grants, work-study programs, and loans. We can help you explore these options to find the best financial support for your education.",
  },

  {
    title: "7. How do I choose the right university for my studies?  ",
    content:
      "Choosing the right university depends on various factors, including your academic interests, career goals, budget, and preferred location. Our consultants can help you evaluate your options and find a university that aligns with your aspirations.",
  },

  {
    title:
      "8. What are the advantages of studying in Uzbekistan compared to studying abroad?",
    content:
      "Studying in Uzbekistan offers accessibility to free education, cultural familiarity, and unique heritage skills. In contrast, studying abroad provides real-world experience, cultural exposure, and enhanced career opportunities.",
  },

  {
    title:
      "9. What is the difference between merit-based and need-based scholarships?",
    content:
      "Merit-based scholarships are awarded based on academic or extracurricular achievements, while need-based scholarships are granted to students who demonstrate financial need.",
  },

  {
    title: "10. How can internships enhance my educational experience?",
    content:
      "Internships provide hands-on experience in your field of study, allowing you to apply theoretical knowledge in real-world settings, develop valuable skills, and build a professional network.",
  },

  {
    title: "11. What challenges might I face when studying abroad?",
    content:
      "Common challenges include homesickness, language barriers, cultural adjustment, academic pressure, and navigating visa and legal issues. We provide support to help you overcome these challenges.",
  },

  {
    title: "12.What should I include in my application documents?",
    content:
      "Application documents typically include academic transcripts, letters of recommendation, a personal statement, and proof of language proficiency. We can help you prepare these documents effectively.",
  },

  {
    title: "13. Can I work while studying abroad?",
    content:
      "Many countries allow international students to work part-time while studying. We can provide information on work-study programs and regulations specific to your chosen destination",
  },

  {
    title: "14. How do I prepare for cultural adjustment when studying abroad?",
    content:
      "Preparing for cultural adjustment involves researching the culture of your host country, connecting with other international students, and being open to new experiences. We offer resources and support to help you adapt.",
  },

  {
    title: "15. What are the benefits of teacher training programs?",
    content:
      "Teacher training programs enhance your teaching skills, introduce innovative strategies, and provide professional development opportunities, making you a more effective educator.",
  },
];

const leftItems = accordionItems.filter((_, index) => index % 2 === 0);
const rightItems = accordionItems.filter((_, index) => index % 2 === 1);

const EducationFAQ = () => {
  return (
    <section className={`${styles.educationFAQ} wrapperBlack wrapperPadding`}>
      <div className="container">
        <h1 className="titlePrimaryH2 pbXlg">FAQ</h1>
        <div className={styles.educationFAQ__columns}>
          <div className={styles.educationFAQ__column}>
            <Accordion accordionItems={leftItems} />
          </div>
          <div className={styles.educationFAQ__column}>
            <Accordion accordionItems={rightItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationFAQ;
