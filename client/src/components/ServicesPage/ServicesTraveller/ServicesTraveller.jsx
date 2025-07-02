import styles from "./ServicesTraveller.module.scss";
import { useNavigate } from "react-router-dom";
import MainBtn from "../../layout/MainBtn/MainBtn.jsx";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";
import { useLazy } from "../../../hooks/useLazy";

import { contactsPagePath } from "../../../router/path";

import {
  businessTravelersImage,
  businessTravelersWebpImage,
  seniorTravelersImage,
  seniorTravelersWebpImage,
  familiesTravelingImage,
  familiesTravelingWebpImage,
  unaccompaniedMinorsImage,
  unaccompaniedMinorsWebpImage,
  luxuryVacationersImage,
  luxuryVacationerssWebpImage,
  corporateGroupsImage,
  corporateGroupsWebpImage,
  agentsAgenciesImage,
  agentsAgenciesWebpImage,
  eventAttendeesImage,
  eventAttendeesWebpImage,
  travelEnthusiastssImage,
  travelEnthusiastsWebpImage,
  wellnessTravelersImage,
  wellnessTravelersWebpImage,
} from "../../../assets/images";
import TransitionProvider, {
  TransitionStyleTypes,
} from "../../../providers/TransitionProvider.jsx";

const cards = [
  {
    title: "Business Travelers",
    image: businessTravelersImage,
    webpImage: businessTravelersWebpImage,
    backDescription:
      "At MAMNUN, we provide VIP ground handling and fast track services that allow busy professionals to skip the lines and arrive at their meetings stress-free. With personalized assistance at every step, you can focus on what matters most—making an impact in your business endeavors.",
  },
  {
    title: "Senior Travelers",
    image: seniorTravelersImage,
    webpImage: seniorTravelersWebpImage,
    backDescription:
      "We prioritize the comfort and safety of our senior travelers. With personalized extra care support, including wheelchair assistance and dedicated escorts, we make sure that every journey is smooth and worry-free.",
  },
  {
    title: "Families Traveling with Children",
    image: familiesTravelingImage,
    webpImage: familiesTravelingWebpImage,
    backDescription:
      "Traveling with kids can be challenging, but our dedicated meet and assist services make it easy. From stroller assistance to priority boarding, we ensure that families can navigate the airport with ease and enjoy their trip together.",
  },

  {
    title: "Unaccompanied Minors",
    image: unaccompaniedMinorsImage,
    webpImage: unaccompaniedMinorsWebpImage,
    backDescription:
      "Ensure your child's journey is safe and enjoyable with our VIP services for unaccompanied minors, featuring personalized escorts and priority boarding. With our dedicated team overseeing every detail, you can travel with peace of mind knowing your young traveler is in caring hands.",
  },

  {
    title: "Luxury Vacationers",
    image: luxuryVacationersImage,
    webpImage: luxuryVacationerssWebpImage,
    backDescription:
      "If you seek a high-end travel experience, we offer exclusive services such as private terminal access, luxury vehicle rentals, and customized itineraries that elevate your journey to new heights of comfort and sophistication.",
  },

  {
    title: "Corporate Groups and Incentive Travel",
    image: corporateGroupsImage,
    webpImage: corporateGroupsWebpImage,
    backDescription:
      "We specialize in organizing seamless travel arrangements for corporate groups. Our comprehensive services, including group bookings and dedicated coordinators, ensure that your team can focus on what matters most.",
  },

  {
    title: "Travel Agents and Agencies",
    image: agentsAgenciesImage,
    webpImage: agentsAgenciesWebpImage,
    backDescription:
      "As a trusted partner for travel professionals, we offer reliable solutions that enhance your clients’ experiences. By collaborating with us, you can provide exceptional VIP services that set you apart.",
  },
  {
    title: "Event Attendees",
    image: eventAttendeesImage,
    webpImage: eventAttendeesWebpImage,
    backDescription:
      "Whether you are attending a conference, wedding, or special event, our tailored services ensure that you arrive on time and can fully enjoy the occasion without the stress of logistics.",
  },
  {
    title: "Travel Enthusiasts and Adventurers",
    image: travelEnthusiastssImage,
    webpImage: travelEnthusiastsWebpImage,
    backDescription:
      "If you are looking for unique experiences, our customized itineraries and local immersion opportunities provide authentic adventures that go beyond the ordinary, allowing you to explore new cultures and destinations.",
  },
  {
    title: "Health and Wellness Travelers",
    image: wellnessTravelersImage,
    webpImage: wellnessTravelersWebpImage,
    backDescription:
      "For those traveling for medical treatments or wellness retreats, we provide personalized support and transportation to ensure a smooth and stress-free experience during your health journey.",
  },
];

const ServicesTraveller = () => {
  const navigate = useNavigate();
  const { ref, isInView } = useLazy(0.6);
  return (
    <section
      className={`${styles.servicesTraveller} wrapperWhite wrapperPadding`}
    >
      <div className="container">
        <h2 className="titleSecondaryH2">
          Every Traveler&nbsp;
          <span className="titlePrimaryH2">is Unique</span>
        </h2>
        <p className="ptLg pbXlg">
          We customize our services to perfectly align with your individual
          needs.
        </p>

        <div className={styles.servicesTraveller__cardContainer} ref={ref}>
          {cards.map(({ title, image, webpImage, backDescription }, index) => (
            <TransitionProvider
              inProp={isInView}
              style={TransitionStyleTypes.zoomIn}
              delay={index * 100}
              key={index}
              className={styles.servicesTraveller__card}
            >
              <div className={styles.servicesTraveller__cardInner}>
                <div
                  className={`${styles.servicesTraveller__cardFront} ${
                    index % 2
                      ? styles.servicesTraveller__cardFront_reversed
                      : ""
                  }`}
                >
                  <ImageWebp
                    src={image}
                    srcSet={webpImage}
                    alt={title}
                    //onLoad={() => setLoading(false)}
                    className={styles.servicesTraveller__img}
                  />
                  <h3 className={styles.servicesTraveller__cardFrontTitle}>
                    {title}
                  </h3>
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

                    <MainBtn
                      onClick={() => navigate(contactsPagePath)}
                      className={styles.authWrapper__btn}
                    >
                      Learn more
                    </MainBtn>
                  </div>
                </div>
                {/* Back */}
              </div>
            </TransitionProvider>
          ))}
          {/* Card */}
        </div>
        {/* flipCardContainer */}
      </div>
    </section>
  );
};

export default ServicesTraveller;
