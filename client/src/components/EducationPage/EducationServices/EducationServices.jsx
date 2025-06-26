import styles from "./EducationServices.module.scss";
import { Link } from "react-router-dom";
import Accordion from "../../layout/Accordion/Accordion";
import { contactsPagePath } from "../../../router/path";

import {
  CVPreparationBLackImage,
  CVPreparationBLackWebpImage,
  CVPreparationWhiteImage,
  CVPreparationWhiteWebpImage,
  motivationalLetterBlackImage,
  motivationalLetterBlackWebpImage,
  motivationalLetterWhitemage,
  motivationalLetterWhitekWebpImage,
  notarialBLackImage,
  notarialBLackWebpImage,
  notarialWhiteImage,
  notarialWhitekWebpImage,
  docDeliveryBlackImage,
  docDeliveryBlackWebpImage,
  docDeliveryWhiteImage,
  docDeliveryWhiteWebpImage,
  ticketIssuanceWhiteImage,
  ticketIssuanceWhiteWebpImage,
  ticketIssuanceBLackImage,
  ticketIssuanceBLackWebpImage,
  partnersWhiteImage,
  partnersWhiteWebpImage,
  partnersBlackWebpImage,
  partnersBlackImage,
  VIPBlackImage,
  VIPBlackWebpImage,
  VIPWhiteImage,
  VIPWhiteWebpImage,
} from "../../../assets/images";

const accordionItems = [
  {
    image: CVPreparationWhiteImage,
    webpImage: CVPreparationWhiteWebpImage,
    activeImage: CVPreparationBLackImage,
    activeWebpImage: CVPreparationBLackWebpImage,
    title: "CV Preparation",
    content:
      "Tailored to highlight your skills and experience for your chosen program.",
  },

  {
    image: motivationalLetterWhitemage,
    webpImage: motivationalLetterWhitekWebpImage,
    activeImage: motivationalLetterBlackImage,
    activeWebpImage: motivationalLetterBlackWebpImage,
    title: "Motivational Letter Writing",
    content:
      "Customized to suit the specific requirements of your program and university.",
  },

  {
    image: notarialWhiteImage,
    webpImage: notarialWhitekWebpImage,
    activeImage: notarialBLackImage,
    activeWebpImage: notarialBLackWebpImage,
    title: "Notarial Translation",
    content: "Certified translations of your documents for official use.",
  },

  {
    image: docDeliveryWhiteImage,
    webpImage: docDeliveryWhiteWebpImage,
    activeImage: docDeliveryBlackImage,
    activeWebpImage: docDeliveryBlackWebpImage,
    title: "Documentation Delivery",
    content: "Efficient and secure delivery of your important documents.",
  },

  {
    title: "Insurance Coverage",
    image: partnersWhiteImage,
    webpImage: partnersWhiteWebpImage,
    activeImage: partnersBlackImage,
    activeWebpImage: partnersBlackWebpImage,
    content:
      "Comprehensive insurance options for your travel and study abroad experience.",
  },

  {
    image: ticketIssuanceWhiteImage,
    webpImage: ticketIssuanceWhiteWebpImage,
    activeImage: ticketIssuanceBLackImage,
    activeWebpImage: ticketIssuanceBLackWebpImage,
    title: "Air Ticket Issuance",
    content: "Assistance with booking your flight to your study destination.",
  },

  {
    image: VIPWhiteImage,
    webpImage: VIPWhiteWebpImage,
    activeImage: VIPBlackImage,
    activeWebpImage: VIPBlackWebpImage,
    title: "VIP Assistance",
    content:
      "Personalized support to ensure a smooth and comfortable arrival at your final destination.",
  },
];

const EducationServices = () => {
  return (
    <section
      className={`${styles.educationServices} wrapperBlack wrapperPadding`}
    >
      <div className="container">
        <h2 className="titleWhiteH2">
          Additional&nbsp;
          <span className="titlePrimaryH2">Services</span>
          <br />
          <span className="titleWhiteH2">(Available for an Extra Fee)</span>
        </h2>
        <p className="textWhite">
          We offer a range of additional services to support your journey
          abroad. These services are available at an extra cost:
        </p>
        <>
          <Accordion accordionItems={accordionItems} />
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
