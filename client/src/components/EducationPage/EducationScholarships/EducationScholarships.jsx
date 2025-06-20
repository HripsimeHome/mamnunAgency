import styles from "./EducationScholarships.module.scss";
import { useNavigate } from "react-router-dom";
import Tabs from "../../layout/Tabs/Tabs";
import MainBtn from "../../layout/MainBtn/MainBtn.jsx";

import { contactsPagePath } from "../../../router/path";

import {
  meritBasedIcon,
  needBasedIcon,
  specificScholarshipsIcon,
  diversityScholarshipsIcon,
  internationalScholarshipsIcon,
  governmentGrantsIcon,
  grantsIcon,
  workStudyIcon,
  loansIcon,
} from "../../../assets/svg";

const tabHeaders = ["Types of Scholarships", "Financial Aid Options"];

const tabContentGroups = [
  [
    {
      icon: meritBasedIcon,
      title: "Merit-Based Scholarships:",
      description:
        "These are awarded based on academic, artistic, or athletic achievements. Students with high GPAs, test scores, or exceptional talents may qualify for these scholarships.",
    },

    {
      icon: needBasedIcon,
      title: "Need-Based Scholarships:",
      description:
        "Designed to assist students who demonstrate financial need, these scholarships often require applicants to submit financial information to determine eligibility.",
    },

    {
      icon: specificScholarshipsIcon,
      title: "Field-Specific Scholarships:",
      description:
        "Many scholarships are targeted towards students pursuing specific fields of study, such as STEM, arts, or humanities. These scholarships encourage students to enter professions that may be in high demand.",
    },

    {
      icon: diversityScholarshipsIcon,
      title: "Diversity Scholarships:",
      description:
        "Aimed at promoting diversity within educational institutions, these scholarships support students from underrepresented backgrounds, including racial and ethnic minorities, LGBTQ+ individuals, and first-generation college students.",
    },

    {
      icon: internationalScholarshipsIcon,
      title: "International Scholarships:",
      description:
        "These are specifically for students from outside the host country, helping them cover tuition and living expenses while studying abroad. ",
    },

    {
      icon: governmentGrantsIcon,
      title: "Government and Institutional Grants:",
      description:
        "Many governments and universities provide grants that do not need to be repaid. These can be based on merit, need, or specific criteria set by the institution.",
    },
  ],

  [
    {
      icon: grantsIcon,
      title: "Grants:",
      description:
        "Unlike loans, grants do not need to be repaid. They are often awarded based on financial need and can come from federal, state, or institutional sources.",
    },

    {
      icon: workStudyIcon,
      title: "Work-Study Programs:",
      description:
        "These programs allow students to work part-time while attending school, helping them earn money to pay for their education. Positions may be on-campus or with approved off-campus employers.",
    },

    {
      icon: loansIcon,
      title: "Loans:",
      description:
        "While loans must be repaid with interest, they can provide necessary funding for students who need additional financial support. Federal student loans often have lower interest rates and more flexible repayment options compared to private loans.",
    },
  ],
];

const EducationScholarships = () => {
  const navigate = useNavigate();
  return (
    <section
      className={`${styles.educationScholarships} wrapperBlack wrapperPadding`}
    >
      <div className="container">
        <h2 className="titleWhiteH2">
          Scholarships and&nbsp;
          <span className="titlePrimaryH2">Financial Aid</span>
        </h2>
        <p className={styles.educationScholarships__text}>
          Universities worldwide offer a variety of scholarships and financial
          aid options to support students in their academic pursuits. Let’s look
          through the
        </p>

        <Tabs tabHeaders={tabHeaders} tabContentGroups={tabContentGroups} />

        <div className={styles.educationScholarships__test}>
          <p className={styles.educationScholarships__text}>
            It is important to note that the availability and types of
            scholarships and financial aid can vary significantly from
            university to university. Each institution has its own policies,
            funding sources, and criteria for awarding financial support. If you
            wish to get ore detailed information, feel free to contact us to
          </p>

          <MainBtn
            onClick={() => navigate(contactsPagePath)}
            className={`
         
              ${styles.authWrapper__btn} 
              ${styles.educationScholarships__btn}
              `}
            withWhite
          >
            Get free consultation
          </MainBtn>
        </div>
      </div>
    </section>
  );
};

export default EducationScholarships;
