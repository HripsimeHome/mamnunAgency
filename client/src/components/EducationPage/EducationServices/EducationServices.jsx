import styles from "./EducationServices.module.scss";
import { Link } from "react-router-dom";
import Accordion from "../../layout/Accordion/Accordion";

import { contactsPagePath } from "../../../router/path";

import { meritBasedIcon } from "../../../assets/svg";

const accordionItems = [
  {
    icon: meritBasedIcon,
    title: "CV Preparation",
    content:
      "Tailored to highlight your skills and experience for your chosen program.",
  },

  {
    icon: meritBasedIcon,
    title: "Motivational Letter Writing",
    content:
      "Customized to suit the specific requirements of your program and university.",
  },

  {
    icon: meritBasedIcon,
    title: "Notarial Translation",
    content: "Certified translations of your documents for official use.",
  },

  {
    icon: meritBasedIcon,
    title: "Documentation Delivery",
    content: "Efficient and secure delivery of your important documents.",
  },

  {
    icon: meritBasedIcon,
    title: "Insurance Coverage",
    content:
      "Comprehensive insurance options for your travel and study abroad experience.",
  },

  {
    icon: meritBasedIcon,
    title: "Air Ticket Issuance",
    content: "Assistance with booking your flight to your study destination.",
  },

  {
    icon: meritBasedIcon,
    title: "VIP Assistance",
    content:
      "Personalized support to ensure a smooth and comfortable arrival at your final destination.",
  },
];

const EducationServices = () => {
  return (
    <section className={`${styles.educationServices} wrapperBlack wrapperPadding`}>
      <div className="container">
        <h2 className="titleWhiteH2">
          Additional&nbsp;
          <span className="titlePrimaryH2">Services</span>
          <br />
          <span className="titleWhiteH2">(Available for an Extra Fee)</span>
        </h2>
         <>
           <Accordion 
            accordionItems={accordionItems}          
          />
         </>

        <p className={styles.educationServices__text}>
          For more details or to request any of these services, please
          <Link to={contactsPagePath}>&nbsp;contact us&nbsp;</Link>
          directly.
        </p>
      </div>
    </section>
  );
};

export default EducationServices;
