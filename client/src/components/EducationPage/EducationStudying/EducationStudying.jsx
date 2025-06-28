import styles from "./EducationStudying.module.scss";
import Accordion from "../../layout/Accordion/Accordion";

import {
  educationImage,
  educationWebpImage,
  accessibilityBLack1Image,
  accessibilityBLack1WebpImage,
  accessibilityWhite1Image,
  accessibilityWhite1WebpImage,
  accessibilityBLack1_5Image,
  accessibilityBLack1_5WebpImage,
  accessibilityWhite1_5Image,
  accessibilityWhite1_5WebpImage,
} from "../../../assets/images";

const accordionItems = [
  // Плюсы
  {
    image: accessibilityBLack1Image,
    webpImage: accessibilityBLack1WebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Accessibility black 1",
    content:
      "Education is compulsory and free for 11 years for locals, ensuring that a significant portion of the population has access to basic education.",
  },

  {
    image: accessibilityBLack1_5Image,
    webpImage: accessibilityBLack1_5WebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Curriculum Reform black 1.5",
    content:
      "Recent reforms are making strides to modernize the curriculum by incorporating new subjects and teaching methods, aligning with global educational standards, and these initiatives are in the early stages of implementation, promising exciting developments for the future of education in Uzbekistan.",
  },

  {
    image: accessibilityWhite1Image,
    webpImage: accessibilityWhite1WebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Technological Integration white 1",
    content:
      "Efforts are underway to introduce computer technology into educational institutions, enhancing teaching methods and resources. While these initiatives are still in the early stages, they hold great promise for transforming the learning experience in Uzbekistan.",
  },

  // {
  //   image: ,
  //   webpImage: ,
  //   title: "Moral and Ethical Education",
  //   content: 'The education system emphasizes instilling morals and ethics in students from early childhood. Quotations often used in schools, such as "Family is your little country," "Your teacher should be respected as your father," and "Water is everything—appreciate it," help shape students' character and values, guiding them on the qualities that define a respectful and caring individual.'
  // },

  {
    image: accessibilityWhite1_5Image,
    webpImage: accessibilityWhite1_5WebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Cultural Familiarity white 1.5",
    content:
      "Studying in your home country allows you to remain close to family and friends, providing a support system during your educational journey",
  },

  {
    image: educationImage,
    webpImage: educationWebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Heritage Skills",
    content:
      "Uzbekistan offers unique classes that pass down traditional skills from generation to generation, such as handcrafting, silk fabric making, carpet weaving, and pottery. These programs not only preserve cultural heritage but also provide practical skills that can be valuable in various careers.",
  },

  // Минусы
  {
    image: educationImage,
    webpImage: educationWebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Lack of Practical Experience",
    content:
      "Many teachers in Uzbekistan lack real-life experience in the subjects they teach. As a result, students often receive only theoretical knowledge, which can lead to a weak practical understanding. This gap can be stressful for graduates when applying for jobs, as they may feel unprepared for the workforce.",
  },

  {
    image: educationImage,
    webpImage: educationWebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Boring Lectures",
    content:
      "The emphasis on theoretical learning, combined with outdated programs, can make lectures monotonous and disengaging for students, reducing their motivation and interest in the subject matter.",
  },

  {
    image: educationImage,
    webpImage: educationWebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Rigid Curriculum",
    content:
      "Although reforms are underway, the curriculum remains somewhat rigid, with limited flexibility for institutions to tailor their programs to specific needs",
  },

  {
    image: educationImage,
    webpImage: educationWebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Digital Learning Challenges",
    content:
      "The transition to digital learning has been gradual, and many universities have faced difficulties in maintaining standards during the pandemic. As a result, the educational experience for students has been impacted, and the system has not yet reached the level of digital integration seen in many foreign countries.",
  },

  {
    image: educationImage,
    webpImage: educationWebpImage,
    // activeImage: educationImage,
    // activeWebpImage: educationWebpImage,
    title: "Limited Teacher Supply",
    content:
      "The expansion of curricula, including new languages and subjects, has placed additional stress on the already limited supply of qualified teachers.",
  },
];

const EducationStudying = () => {
  return (
    <section
      className={`${styles.educationStudying} wrapperBlack wrapperPadding`}
    >
      <div className="container">
        <h2 className="titleSecondaryH2">
          Pros and Cons of studying{" "}
          <span className="titlePrimaryH2">
            in
            <br />
            Uzbekistan
          </span>
        </h2>
        <>
          <Accordion
            accordionItems={accordionItems}
            className={styles.educationStudying__accordionContainer}
          />
        </>
      </div>
    </section>
  );
};

export default EducationStudying;
