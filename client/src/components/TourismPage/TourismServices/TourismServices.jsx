import styles from "./TourismServices.module.scss";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {
  arrowLineImage,
  arrowLineWebpImage,
  itinerariesImage,
  itinerariesWebpImage,
  museumImage,
  museumsWebpImage,
  culinaryImage,
  culinaryWebpImage,
  evetsBlackImage,
  evetsBlackWebpImage,
  immersionImage,
  immersionWebpImage,
  flightImage,
  flightWebpImage,
  hotelImage,
  hotelWebpImage,
  transferImage,
  transferWebpImage,
  visaSUpportImage,
  visaSUpportWebpImage,
  onTripSupportImage,
  onTripSupportWebpImage,
  VIPBlackImage,
  VIPBlackWebpImage,
  guidesImage,
  guidesWebpImage,
  tourImage,
  tourWebpImage,
  feedbackImage,
  feedbackWebpImage,
} from "../../../assets/images";

const serviceSections = [
  {
    title: "Travel & Culture",
    items: [
      {
        image: itinerariesImage,
        webpImage: itinerariesWebpImage,
        title: "Tailor-Made Itineraries",
        description:
          "Your journey, your pace. We craft fully personalized itineraries based on your interests, travel style, and timeframe.",
      },
      {
        image: museumImage,
        webpImage: museumsWebpImage,
        title: "Museum & Attraction Tickets",
        description:
          "Skip the lines and let us handle advance bookings for all major historical and cultural sites across Uzbekistan.",
      },
      {
        image: culinaryImage,
        webpImage: culinaryWebpImage,
        title: "Culinary & Cultural Experiences",
        description: (
          <>
            Experience the soul of Uzbekistan through its rich traditions and
            everyday rituals. From folk performances to artisan workshops, our
            tours offer authentic insights into the culture’s creative heart.
            <br />
            Witness the making of ancient Samarkand silk paper,
            observe miniature painting and silk carpet weaving, and take part in
            timeless culinary customs
            <br />
            like baking bread and samsa in a tandoor. You may even get a taste
            of sumalak, a sacred springtime dish prepared overnight with love
            and storytelling.
            <br />
            Whether you are learning, tasting, or simply observing — these
            moments connect you deeply with the spirit of the land and its
            people.
          </>
        ),
      },
      {
        image: evetsBlackImage,
        webpImage: evetsBlackWebpImage,
        title: "Event & Festival Access",
        description: (
          <>
            Celebrate Navruz, the spring New Year, with music, dance,
            traditional games, and festive dishes like sumalak prepared in large
            community gatherings. Throughout the year, enjoy access to seasonal
            events such as melon fairs, craft festivals, and harvest
            celebrations that reflect the country’s deep agricultural and
            artistic roots. Get insider access to local festivals, and unique
            seasonal experiences you won't find in guidebooks.
          </>
        ),
      },
      {
        image: immersionImage,
        webpImage: immersionWebpImage,
        title: "Traditional Immersion",
        description:
          "Experience rare cultural events like Tuy (Uzbek weddings), Kelin Salom (bride greeting ceremony), Qovurdoq feasts, and Beshik Töy (cradle ceremonies). These are deeply local traditions usually closed to outsiders — but with us, you are part of the family",
      },
    ],
  },
  {
    title: "Transport & Logistics",
    items: [
      {
        image: flightImage,
        webpImage: flightWebpImage,
        title: "Flight Booking Assistance",
        description:
          "We help you find the best international and domestic flight options that suit your budget and schedule.",
      },
      {
        image: hotelImage,
        webpImage: hotelWebpImage,
        title: "Hotel Reservations",
        description:
          "From boutique guesthouses to luxury hotels, we secure the best accommodations in every city you visit.",
      },
      {
        image: transferImage,
        webpImage: transferWebpImage,
        title: "Private Transfers & Transportation",
        description:
          "Travel comfortably between cities and attractions with private vehicles, trains, or domestic flights — all pre-arranged for your convenience.",
      },
      {
        image: visaSUpportImage,
        webpImage: visaSUpportWebpImage,
        title: "Visa Support & Travel Documents",
        description:
          "We provide visa assistance and official invitation letters, and we will guide you through all travel requirements.",
      },
      {
        image: onTripSupportImage,
        webpImage: onTripSupportWebpImage,
        title: "24/7 On-Trip Support",
        description:
          "Wherever you are in Uzbekistan, our local team is available around the clock for anything you need.",
      },
      {
        image: VIPBlackImage,
        webpImage: VIPBlackWebpImage,
        title: "VIP assistance at the airport ",
        description:
          "Experience seamless travel with our VIP assistance at the airport, designed to make your journey as comfortable and efficient as possible. For more details on our exclusive services, please visit our dedicated VIP assistance page.",
      },
    ],
  },
  {
    title: "Experiences & Adventure",
    items: [
      {
        image: guidesImage,
        webpImage: guidesWebpImage,
        title: "Professional Tour Guides",
        description:
          "Discover Uzbekistan through the eyes of experienced, multilingual guides who bring history, culture, and legends to life.",
      },
      {
        image: tourImage,
        webpImage: tourWebpImage,
        title: "Adventure & Eco Tours",
        description:
          "Hike the Nurata mountains, ride camels across the Kyzylkum Desert, or spend a night in a traditional yurt under the stars.",
      },
      {
        image: feedbackImage,
        webpImage: feedbackWebpImage,
        title: "Exclusive Travel Tips",
        description:
          "We also offer exclusive travel tips, local secrets, and off-the-beaten-path experiences available only on request. Let us show you the hidden gems of Uzbekistan — places that even many locals don’t know!",
      },
    ],
  },
];

const TourismServices = () => {
  return (
    <section
      className={`${styles.tourismServices} wrapperBlack wrapperPadding`}
    >
      <div className="container">
        <h2 className="titleWhiteH2">
          Services&nbsp;
          <span className="titlePrimaryH2">we provide</span>
        </h2>

        {serviceSections.map((section, index) => (
          <div key={index}>
            <div
              className={`${styles.tourismServices__titleBlock} ${
                !(index % 2) ? styles.tourismServices__titleBlock_reversed : ""
              }`}
            >
              <h3 className={styles.tourismServices__sectionTitle}>
                {section.title}
              </h3>

              <ImageWebp
                src={arrowLineImage}
                srcSet={arrowLineWebpImage}
                alt="Arrow"
                pictureClass={styles.tourismServices__arrowPicture}
                className={`${styles.tourismServices__arrowLine} ${
                  index % 2 ? styles.tourismServices__arrowLine_reversed : ""
                }`}
              />
            </div>

            <div className={styles.tourismServices__panelContainer}>
              {section.items.map(
                ({ image, webpImage, title, description }, idx) => (
                  <div key={idx} className={styles.tourismServices__panel}>
                    <div>
                      <ImageWebp
                        src={image}
                        srcset={webpImage}
                        className={styles.tourismServices__img}
                      />
                    </div>
                    <div className={styles.tourismServices__content}>
                      <h4 className={styles.tourismServices__title}>{title}</h4>
                      <p className={styles.tourismServices__description}>
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourismServices;
