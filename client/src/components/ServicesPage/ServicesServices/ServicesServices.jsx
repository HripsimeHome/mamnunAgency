import styles from "./ServicesServices.module.scss";
import MainBtn from "../../layout/MainBtn/MainBtn.jsx";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {
  VIPServicesImage,
  VIPServicesWebpImage,
  fastServicesImage,
  fastServicesWebpImage,
  transferServicesImage,
  transferServicessWebpImage,
  railwayStationsImage,
  railwayStationsWebpImage,
} from "../../../assets/images";
import { useState } from "react";
import ServicesServicesModal from "./ServicesServicesModal/ServicesServicesModal.jsx";

const cards = [
  {
    title: "Full VVIP Services",
    stepNumber: "01",
    image: VIPServicesImage,
    webpImage: VIPServicesWebpImage,
    backDescription:
      "Experience unparalleled luxury and convenience with our Full VIP options, designed to elevate every aspect of your travel journey. With our Full VIP options for Arrival, Departure and Transit, you can travel with confidence, knowing that every detail is taken care of, allowing you to focus on what truly matters.",
    arrival: `Upon landing, you will be met directly at the aircraft by our professional team, who will assist you with tarmac transportation to the VIP lounge. All required formalities, including immigration and customs clearance, will be managed privately in the lounge, allowing you to avoid the hustle and bustle of the main terminal. Your luggage will be collected and brought directly to your driver, ensuring a smooth and hassle-free arrival experience. Enjoy the luxury of private transportation waiting to take you to your destination, allowing you to relax and unwind after your flight.`,
    departure:
      "From the moment you arrive at the airport, our dedicated team will provide personalized assistance to ensure a seamless experience. Enjoy expedited check-in and security clearance, allowing you to bypass long lines and start your journey stress-free. You will have access to exclusive lounges where all necessary formalities will be handled privately. Our staff will escort you to your gate in a timely manner, and with our tarmac transportation service, you will be transported directly to the aircraft, ensuring a smooth transition from the VIP lounge.",
    transit:
      "From the moment you arrive at the airport, our dedicated team will provide personalized assistance to ensure a seamless experience. Enjoy expedited check-in and security clearance, allowing you to bypass long lines and start your journey stress-free. You will have access to exclusive lounges where all necessary formalities will be handled privately. Our staff will escort you to your gate in a timely manner, and with our tarmac transportation service, you will be transported directly to the aircraft, ensuring a smooth transition from the VIP lounge.",
    benefits: [
      [
        "Time-Saving",
        `Enjoy expedited check-in and security processes, significantly reducing wait times and allowing you to start your journey without delays.`,
      ],
      [
        "Comfort and Privacy",
        `Access to exclusive lounges provides a tranquil environment away from the hustle and bustle of the airport, allowing you to relax before / after your flight.`,
      ],
      [
        "Enhanced Security",
        `Enjoy a heightened level of security and privacy throughout your journey, with dedicated staff managing all formalities away from the main terminal, ensuring a discreet and secure travel experience.`,
      ],
      [
        "Baggage Assistance",
        `We handle your luggage, ensuring it is taken care of from check-in to your final destination, so you can travel worry-free.`,
      ],
      [
        "Tarmac Transportation",
        `Experience seamless transfers with our tarmac transportation service, which takes you directly to and from the aircraft, minimizing your exposure to crowds and enhancing your comfort.`,
      ],
    ],
    pricing:
      "Pricing for our VVIP ground handling services varies based on the airport and specific services requested. To receive a personalized quote, please contact us directly or fill the online form. We recommend booking in advance to ensure availability and the best rates.",
    faqs: [
      [
        "What is included in the VIP ground handling service? ",

        "Our VIP services include meet and greet, expedited check-in, security clearance, lounge access, tarmac transportation and baggage assistance.",
      ],
      [
        "How do I book VIP ground handling services?",
        "You can request our services through our website filling the request form or by contacting our customer service team for assistance.",
      ],
      [
        "Are VIP services available for both arriving and departing flights?",
        "Yes, we offer VIP services for both arrivals and departures, and also for transits at participating airports.",
      ],
      [
        "Can I customize my VIP service package?",
        "Absolutely! We can tailor our services to meet your specific needs and preferences.",
      ],
    ],
  },
  {
    title: "Meet and Greet, Fast Track Services",
    stepNumber: "02",
    image: fastServicesImage,
    webpImage: fastServicesWebpImage,
    backDescription:
      "Experience seamless travel with our Meet and Assist Fast Track service, featuring personalized curbside greetings, expedited formalities, and dedicated baggage assistance. Enjoy the luxury of bypassing long lines and relaxing in our exclusive VIP lounge, ensuring a smooth and stress-free journey from arrival to departure.",
    arrival: ``,
    departure: "",
    transit: "",
    benefits: [],
    pricing: "",
    faqs: [],
  },
  {
    title: "Transfer Services Worldwide",
    stepNumber: "03",
    image: transferServicesImage,
    webpImage: transferServicessWebpImage,
    backDescription:
      "We offer a comprehensive range of transfer services designed to meet your travel needs, no matter where you are in the world.",

    arrival: ``,
    departure: "",
    transit: "",
    benefits: [],
    pricing: "",
    faqs: [],
  },

  {
    title: "Meet and Greet at Railway Stations",
    stepNumber: "04",
    image: railwayStationsImage,
    webpImage: railwayStationsWebpImage,
    backDescription:
      "Our Meet and Greet service at railway stations provides a seamless and luxurious travel experience for passengers arriving or departing by train. Our professional staff will be waiting for you at the station, ready to assist with your luggage and guide you through the station's facilities. Whether you are traveling for business or leisure, our dedicated service ensures a smooth transition from the train to your next destination.",
    arrival: ``,
    departure: "",
    transit: "",
    benefits: [],
    pricing: "",
    faqs: [],
  },
];

const ServicesServices = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

  const selectedService = cards[selectedServiceIndex || 0];

  const onSelect = (index) => {
    setSelectedServiceIndex(index);
    setModalOpened(true);
  };

  return (
    <section
      className={`${styles.servicesServices} wrapperBlack wrapperPadding`}
    >
      <div className="container">
        <h2 className="titleWhiteH2">
          Our&nbsp;
          <span className="titlePrimaryH2">Services</span>
        </h2>

        <div className={styles.servicesServices__cardContainer}>
          {cards.map(
            (
              { title, stepNumber, image, webpImage, backDescription },
              index
            ) => (
              <div key={index} className={styles.servicesServices__card}>
                <div className={styles.servicesServices__cardInner}>
                  <div
                    key={index}
                    className={styles.servicesServices__cardFront}
                  >
                    <ImageWebp
                      src={image}
                      srcSet={webpImage}
                      alt={title}
                      //onLoad={() => setLoading(false)}
                      className={styles.servicesServices__img}
                    />
                    <h3 className={styles.servicesServices__cardFrontTitle}>
                      {title}
                    </h3>
                  </div>
                  {/* cardFront */}

                  <div
                    key={index}
                    className={styles.servicesServices__cardBack}
                  >
                    <div
                      key={index}
                      className={styles.servicesServices__cardTitleBlock}
                    >
                      <span className={styles.servicesServices__cardStep}>
                        {stepNumber}
                      </span>
                      <h3 className={styles.servicesServices__cardBackTitle}>
                        {title}
                      </h3>
                    </div>

                    <div className={styles.servicesServices__cardBackTextBlock}>
                      <p className={styles.servicesServices__cardBackText}>
                        {backDescription}
                      </p>

                      <MainBtn
                        onClick={() => onSelect(index)}
                        className={styles.authWrapper__btn}
                      >
                        Learn more
                      </MainBtn>
                    </div>
                  </div>
                  {/* Back */}
                </div>
              </div>
            )
          )}
          {/* Card */}
        </div>
        {/* flipCardContainer */}
      </div>
      <ServicesServicesModal
        show={modalOpened}
        onClose={() => setModalOpened(false)}
        service={selectedService}
      />
    </section>
  );
};

export default ServicesServices;
