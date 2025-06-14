import styles from "./TourismServices.module.scss";
import Svg from "../../layout/Svg/Svg";


import {
  itinerariesIcon,
  museumIcon,
  culinaryIcon,
  eventIcon,
  immersionIcon,
  flightIcon,
  hotelIcon,
  transferIcon,
  visaSupportIcon,
  onTripSupportIcon,
  VIPIcon,
  guidesIcon,
  travelIcon,
  feedbackIcon,
} from "../../../assets/svg";

const servicesData = [
  {
    icon: itinerariesIcon,
    title: "Tailor-Made Itineraries",
    description:
      "Your journey, your pace. We craft fully personalized itineraries based on your interests, travel style, and timeframe.",
  },

  {
    icon: museumIcon,
    title: "Museum & Attraction Tickets",
    description:
      "Skip the lines and let us handle advance bookings for all major historical and cultural sites across Uzbekistan.",
  },

  {
    icon: culinaryIcon,
    title: "Culinary & Cultural Experiences",
    description: 
      <>
       Experience the soul of Uzbekistan through its rich traditions and everyday rituals. From folk performances to artisan workshops, our tours offer authentic insights into the culture’s creative heart.
        <br />
        Witness the making of ancient Samarkand silk paper, observe miniature
        painting and silk carpet weaving, and take part in timeless culinary
        customs
        <br />
        like baking bread and samsa in a tandoor. You may even get a taste
        of sumalak, a sacred springtime dish prepared overnight with love and
        storytelling.
        <br />
        Whether you are learning, tasting, or simply observing — these moments
        connect you deeply with the spirit of the land and its people.
      </>    
  },

  {
    icon: eventIcon,
    title: "Event & Festival Access",
    description: (
      <>
        Celebrate Navruz, the spring New Year, with music, dance, traditional
        games, and festive dishes like sumalak prepared in large community
        gatherings. Throughout the year, enjoy access to seasonal events such as
        melon fairs, craft festivals, and harvest celebrations that reflect the
        country’s deep agricultural and artistic roots. Get insider access to
        local festivals, and unique seasonal experiences you won't find in
        guidebooks.
      </>
    ),
  },

  {
    icon: immersionIcon,
    title: "Traditional Immersion",
    description: "Experience rare cultural events like Tuy (Uzbek weddings), Kelin Salom (bride greeting ceremony), Qovurdoq feasts, and Beshik Töy (cradle ceremonies). These are deeply local traditions usually closed to outsiders — but with us, you are part of the family"
  },

  {
    icon: flightIcon,
    title: "Flight Booking Assistance",
    description: "We help you find the best international and domestic flight options that suit your budget and schedule.",
  },

  {
    icon: hotelIcon,
    title: "Hotel Reservations",
    description: "From boutique guesthouses to luxury hotels, we secure the best accommodations in every city you visit.",
  },

  {
    icon: transferIcon,
    title: "Private Transfers & Transportation",
    description: "Travel comfortably between cities and attractions with private vehicles, trains, or domestic flights — all pre-arranged for your convenience.",
  },

  {
    icon: visaSupportIcon,
    title: "Visa Support & Travel Documents",
    description: "We provide visa assistance and official invitation letters, and we will guide you through all travel requirements.",
  },

  {
    icon: onTripSupportIcon,
    title: "24/7 On-Trip Support",
    description: "Wherever you are in Uzbekistan, our local team is available around the clock for anything you need.",
  },

  {
    icon: VIPIcon,
    title: "VIP assistance at the airport ",
    description: "Experience seamless travel with our VIP assistance at the airport, designed to make your journey as comfortable and efficient as possible. For more details on our exclusive services, please visit our dedicated VIP assistance page.",
  },

  {
    icon: guidesIcon,
    title: "Professional Tour Guides",
    description: "Discover Uzbekistan through the eyes of experienced, multilingual guides who bring history, culture, and legends to life.",
  },

  {
    icon: travelIcon,
    title: "Adventure & Eco Tours",
    description: "Hike the Nurata mountains, ride camels across the Kyzylkum Desert, or spend a night in a traditional yurt under the stars.",
  },

  {
    icon: feedbackIcon,
    title: "Exclusive Travel Tips",
    description: "We also offer exclusive travel tips, local secrets, and off-the-beaten-path experiences available only on request. Let us show you the hidden gems of Uzbekistan — places that even many locals don’t know!",
  },
];

const TourismServices = () => {
  return (
    <section className={`${styles.tourismServices} wrapperBlack`}>
      <div className="container">
        <h2 className="titleWhiteh2">
          Services&nbsp;
          <span className="titlePurpleh2">we provide</span>
        </h2>

        <div className={styles.tourismServices__titleBlock}>

         <div className={styles.tourismServices__linePosition}>
            <span className={styles.tourismServices__arrowLine}></span>
            <Svg
              id={feedbackIcon}              
              className={styles.tourismServices__arrowIcon}
            />
          </div>

          

           <h3 className={styles.tourismServices__sectionTitle}>
            Travel & Culture
           </h3>
        </div>
        {/* titleBLock */}










        <div className={styles.tourismServices__panelContainer}>
          {servicesData.map(({ icon, title, description }, index) => (

          <div
            key={index}
            className={styles.tourismServices__panel}
          >
            <div>
              <Svg
                id={icon}
                className={styles.tourismServices__icon}
              />
            </div>

            <div className={styles.tourismServices__content}>
              <h4 className={styles.tourismServices__title}>
                {title}
              </h4>
              <p className={styles.tourismServices__description}>
                {description}
              </p>
            </div>
            {/* content */}
          </div>
          ))}
        {/* panel */}
        </div>
        {/* panelContainer */}
      </div>
    </section>
  );
};

export default TourismServices;