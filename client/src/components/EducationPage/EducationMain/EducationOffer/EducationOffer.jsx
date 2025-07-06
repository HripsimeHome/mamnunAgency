import styles from "./EducationOffer.module.scss";

import {
  educationOfferIcon1Image,
  educationOfferIcon1WebpImage,
  educationOfferIcon2Image,
  educationOfferIcon2WebpImage,
  educationOfferIcon3Image,
  educationOfferIcon3WebpImage,
  educationOfferIcon4Image,
  educationOfferIcon4WebpImage,
  educationOfferIcon5Image,
  educationOfferIcon5WebpImage,
  educationOfferIcon6Image,
  educationOfferIcon6WebpImage,
  educationOfferIcon7Image,
  educationOfferIcon7WebpImage,
  educationOfferIcon8Image,
  educationOfferIcon8WebpImage,
} from "../../../../assets/images";
import { useLazy } from "../../../../hooks/useLazy";
import { useEffect, useState } from "react";
import ImageWebp from "../../../layout/ImageWebp/ImageWebp";

const offerData = [
  {
    icon: {
      png: educationOfferIcon1Image,
      webp: educationOfferIcon1WebpImage,
    },
    title: "Summer / Winter Camps",
    description:
      "Our Winter and Summer Camps abroad for children and teenagers aged 8 to 17 are not just holiday experiences; they are the first step towards your child's future! These transformative programs blend fun activities with personal development, cultural immersion, and essential life skills. Enroll your child today to help them build confidence, make lifelong friendships, and prepare for a successful future!",
  },
  {
    icon: {
      png: educationOfferIcon2Image,
      webp: educationOfferIcon2WebpImage,
    },
    title: "Degree Programs",
    description:
      "Our expertise spans a wide range of educational pathways, including Foundation programs that lay the groundwork for future studies, Bachelor’s degrees that provide comprehensive undergraduate education, Master’s programs that offer advanced knowledge and specialized skills, and PhD programs that foster in-depth research and academic excellence.",
  },
  {
    icon: {
      png: educationOfferIcon3Image,
      webp: educationOfferIcon3WebpImage,
    },
    title: "Internships",
    description:
      "Gain real-world experience and take the next step in your career with our internship programs. Designed to bridge the gap between academic learning and professional practice, our programs provide hands-on training in diverse fields and top global organizations. Work alongside industry experts, develop valuable skills, and receive mentorship to confidently navigate your career path.",
  },
  {
    icon: {
      png: educationOfferIcon4Image,
      webp: educationOfferIcon4WebpImage,
    },
    title: "Language Courses",
    description:
      "Enhance your language skills with our comprehensive language courses abroad, available in both short and long-term formats! Whether you're looking to boost your proficiency for travel, work, or personal growth, our experienced instructors provide tailored lessons in immersive environments. Join us and unlock new opportunities through language learning in a vibrant international setting!",
  },
  {
    icon: {
      png: educationOfferIcon5Image,
      webp: educationOfferIcon5WebpImage,
    },
    title: "Au Pair",
    description:
      "Join our Au Pair program and immerse yourself in a unique cultural exchange experience while providing childcare in a welcoming host family environment. This program offers you the opportunity to enhance your language skills, gain valuable life experience, and create lasting memories. Discover more about how you can embark on this enriching journey with us!",
  },
  {
    icon: {
      png: educationOfferIcon6Image,
      webp: educationOfferIcon6WebpImage,
    },
    title: "Short term program",
    description:
      "We help you enhance your skills and broaden your horizons with our short-term academic programs! These courses allow you to gain new skills, earn certificates, overcome your language barriers and immerse yourself in diverse cultures. Participating in these programs not only enhances your academic profile but also boosts your career prospects",
  },
  {
    icon: {
      png: educationOfferIcon7Image,
      webp: educationOfferIcon7WebpImage,
    },
    title: "Work & Travel ",
    description:
      "Embark on an exciting adventure with our Work & Travel program in Germany! This unique opportunity allows you to work during your summer break while experiencing the rich culture and vibrant lifestyle of Germany. Join us to create unforgettable memories and enhance your professional skills in a dynamic international environment!",
  },
  {
    icon: {
      png: educationOfferIcon8Image,
      webp: educationOfferIcon8WebpImage,
    },
    title: "Teacher Training",
    description:
      "Enhance your teaching skills with the comprehensive Teacher Training Programs offered by trusted partners. Designed for educators at all levels, our programs cover innovative teaching strategies, classroom management, curriculum development, and technology integration.",
  },
];

const Panel = ({ index, icon, title, description, setVisited, active }) => {
  const { ref, isInView } = useLazy(0.8);

  useEffect(() => {
    if (isInView) setVisited((prev) => (prev >= index ? prev : index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      className={`${styles.educationOffer__panel} ${
        active ? styles.educationOffer__panel_active : ""
      }`}
      ref={ref}
    >
      <div className={styles.educationOffer__titleBlock}>
        <ImageWebp
          src={icon.png}
          srcSet={icon.webp}
          className={styles.educationOffer__icon}
        />
        <h3 className={styles.educationOffer__title}>{title}</h3>
      </div>
      <p className={styles.educationOffer__description}>{description}</p>
    </div>
  );
};

const EducationOffer = () => {
  const [activePanelIndex, setActivePanelIndex] = useState(0);

  return (
    <section className={`${styles.educationOffer} wrapperWhite`}>
      <h2 className="titleSecondaryH2">
        We&nbsp;
        <span className="titlePrimaryH2">offer</span>
      </h2>

      <div className={styles.educationOffer__container}>
        <div className={styles.educationOffer__col}>
          {offerData.map((offer, index) => (
            <Panel
              {...offer}
              index={index}
              setVisited={setActivePanelIndex}
              active={activePanelIndex >= index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationOffer;
