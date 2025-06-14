import styles from "./ServicesTraveller.module.scss";
import { Link } from "react-router-dom";

import { contactsPagePath } from "../../../router/path";

const cards = [
  {
    title: "Business Travelers",
    frontDescription: "First",
    backDescription:
      "At MAMNUN, we provide VIP ground handling and fast track services that allow busy professionals to skip the lines and arrive at their meetings stress-free. With personalized assistance at every step, you can focus on what matters most—making an impact in your business endeavors.",
  },
  {
    title: "Senior Travelers",
    frontDescription: "Frst",
    backDescription:
      "We prioritize the comfort and safety of our senior travelers. With personalized extra care support, including wheelchair assistance and dedicated escorts, we make sure that every journey is smooth and worry-free.",
  },
  {
    title: "Families Traveling with Children",
    frontDescription: "First",
    backDescription:
      "Traveling with kids can be challenging, but our dedicated meet and assist services make it easy. From stroller assistance to priority boarding, we ensure that families can navigate the airport with ease and enjoy their trip together.",
  },
  {
    title: "Unaccompanied Minors",
    frontDescription: "Third",
    backDescription:
      "Ensure your child's journey is safe and enjoyable with our VIP services for unaccompanied minors, featuring personalized escorts and priority boarding. With our dedicated team overseeing every detail, you can travel with peace of mind knowing your young traveler is in caring hands.",
  },
  {
    title: "Corporate Groups and Incentive Travel",
    frontDescription: "Third",
    backDescription:
      "We specialize in organizing seamless travel arrangements for corporate groups. Our comprehensive services, including group bookings and dedicated coordinators, ensure that your team can focus on what matters most.",
  },
  {
    title: "Luxury Vacationers",
    frontDescription: "Test",
    backDescription:
      "If you seek a high-end travel experience, we offer exclusive services such as private terminal access, luxury vehicle rentals, and customized itineraries that elevate your journey to new heights of comfort and sophistication.",
  },
  {
    title: "Travel Agents and Agencies",
    frontDescription: "test",
    backDescription:
      "As a trusted partner for travel professionals, we offer reliable solutions that enhance your clients’ experiences. By collaborating with us, you can provide exceptional VIP services that set you apart.",
  },
  {
    title: "Event Attendees",
    frontDescription: "",
    backDescription:
      "Whether you are attending a conference, wedding, or special event, our tailored services ensure that you arrive on time and can fully enjoy the occasion without the stress of logistics.",
  },
  {
    title: "Travel Enthusiasts and Adventurers",
    frontDescription: "First",
    backDescription:
      "If you are looking for unique experiences, our customized itineraries and local immersion opportunities provide authentic adventures that go beyond the ordinary, allowing you to explore new cultures and destinations.",
  },
  {
    title: "Health and Wellness Travelers",
    frontDescription: "First",
    backDescription:
      "For those traveling for medical treatments or wellness retreats, we provide personalized support and transportation to ensure a smooth and stress-free experience during your health journey.",
  },
];

const ServicesTraveller = () => {
  return (
    <section className={`${styles.servicesTraveller} wrapperWhite`}>
      <div className="container">
        <h2 className="titleBlackh2">
          Every Traveler&nbsp;
          <span className="titlePurpleh2">is Unique</span>
        </h2>
        <p className={styles.ervicesTraveller__text}>
          We customize our services to perfectly align with your individual
          needs.
        </p>

        <div className={styles.servicesTraveller__cardContainer}>
          {cards.map(({ title, frontDescription, backDescription }, index) => (
            <div className={styles.servicesTraveller__card} key={index}>
              <div className={styles.servicesTraveller__cardInner}>
                <div
                  key={index}
                  className={styles.servicesTraveller__cardFront}
                >
                  <h3>{title}</h3>
                  <p>{frontDescription}</p>
                </div>
                {/* cardFront */}

                <div key={index} className={styles.servicesTraveller__cardBack}>
                  <h3 className={styles.servicesTraveller__cardBackTitle}>
                    {title}
                  </h3>
                  <div className={styles.servicesTraveller__cardBackTextBlock}>
                    <p className={styles.servicesTraveller__cardBackText}>
                      {backDescription}
                    </p>

                    <Link to={contactsPagePath} className="btnPrimary">
                      Learn more
                    </Link>
                  </div>
                </div>
                {/* Back */}
              </div>
            </div>
          ))}
          {/* Card */}
        </div>
        {/* flipCardContainer */}
      </div>
    </section>
  );
};

export default ServicesTraveller;
