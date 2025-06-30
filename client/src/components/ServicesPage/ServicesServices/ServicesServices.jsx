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
      "For those with connecting flights, our Full VIP options provide a hassle-free transit experience. You will be met by our dedicated team who will guide you through the airport, ensuring you make your connection with ease. Enjoy access to exclusive lounges where all necessary formalities will be handled privately. Our staff will monitor your flight status and provide timely updates, ensuring you are always informed and prepared for your next leg of travel. With tarmac transportation, you will be transported directly between the aircraft and the VIP lounge, making your connection as smooth and efficient as possible.",
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
        "1. What is included in the VIP ground handling service?",

        "Our VIP services include meet and greet, expedited check-in, security clearance, lounge access, tarmac transportation and baggage assistance.",
      ],
      [
        "2. How do I book VIP ground handling services?",
        "You can request our services through our website filling the request form or by contacting our customer service team for assistance.",
      ],
      [
        "3. Are VIP services available for both arriving and departing flights?",
        "Yes, we offer VIP services for both arrivals and departures, and also for transits at participating airports.",
      ],
      [
        "4. Can I customize my VIP service package?",
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
    arrival: `Upon landing, our Meet and Assist Fast Track service ensures a seamless arrival experience. Depending on the parking position of your aircraft, you will be greeted curbside by our dedicated staff holding a nameboard. You will be escorted through expedited immigration and customs formalities using a special Fast Track line, allowing you to bypass long waits. Our team will assist with your baggage and escort you to the arrival hall or directly to your driver, ensuring a smooth transition to your final destination.`,
    departure:
      "Our professional team will greet you at the terminal entrance with a nameboard and guide you through the check-in process, handling your baggage for added convenience. Business / first-class passengers will be escorted to the exclusive VIP lounge to relax before their flight. For economy class passengers, we can arrange access to the VIP lounge for an additional fee. When it is time to board, our staff will ensure you are taken to the gate promptly, making your departure experience as smooth and enjoyable as possible.",
    transit:
      "For travelers with connecting flights, our Meet and Assist Fast Track service provides a streamlined transit experience. Upon arrival, our dedicated team will meet you at curbside and guide you through the connection process. You will benefit from expedited security checks and assistance with your baggage, ensuring a hassle-free transition. Enjoy access to the VIP lounge, where you can relax and recharge during your layover. When it’s time for your next flight, our staff will escort you to the boarding gate, ensuring you make your connection with ease and comfort.",
    benefitsTitle: ["Benefits of Using", "MAAS"],
    benefits: [
      [
        "Hassle-Free Experience:",
        `Avoid long lines and complicated procedures with our dedicated assistance.`,
      ],

      [
        "Local Expertise",
        `Our staff is knowledgeable about the airport layout and procedures, ensuring you navigate efficiently.`,
      ],
      [
        "Stress Reduction",
        `Enjoy peace of mind knowing that you have support throughout your airport journey.`,
      ],

      [
        "Baggage Assistance:",
        `Our team will take care of your luggage, so you won’t have to worry about carrying heavy bags or navigating through the airport with them, allowing you to travel comfortably and effortlessly.`,
      ],
    ],
    pricing:
      "Our MAAS services are competitively priced and vary by airport. For detailed pricing and to book your service, please fill the request form on our website or contact our customer service team. Early booking is recommended to secure your preferred time and service.",
    faqsTitle: ["FAQs Related to", "Meet and Greet Services"],

    faqs: [
      [
        "1. What does the Meet and Assist service include?",

        "Our MAAS service includes a personal greeting, assistance with check-in, security clearance, and guidance to your gate or baggage claim.",
      ],
      [
        "2. Can I request MAAS services for my arrival and departure?",
        "Yes, you can request our services for both arrival and departure at participating airports.",
      ],
      [
        "3. How do I find my assistant at the airport?",
        "Your assistant will be waiting for you at the designated meeting point, typically near the arrivals hall or check-in area, holding a sign with your name.",
      ],
      [
        "4. Is it possible to change my booking after it has been made?",
        "Yes, you can modify your booking by contacting our customer service team, subject to availability.",
      ],
    ],
  },
  {
    title: "Transfer Services Worldwide",
    stepNumber: "03",
    image: transferServicesImage,
    webpImage: transferServicessWebpImage,
    backDescription:
      "We offer a comprehensive range of transfer services designed to meet your travel needs, no matter where you are in the world.",

    arrival: `Enjoy convenient and reliable transportation to and from the airport, ensuring you arrive on time and stress-free.`,
    arrivalTitle: "Airport Transfers",
    departure:
      "Experience luxury and comfort with our private car services, perfect for business meetings, special events, or leisurely travel.",
    departureTitle: "Private Car Services",
    transit:
      "For those needing flexible transportation, our disposal services allow you to hire a vehicle and driver for a set period, giving you the freedom to explore at your own pace.",
    transitTitle: "Disposal (hourly) Transfer",
    options: `Booking your transfer is easy and straightforward. Simply fill out our online request form with your travel details, or contact us via email. Provide us with your itinerary, including pickup and drop-off locations, dates, and any special requirements, and we will respond promptly with a precise quotation tailored to your needs.`,

    features: `Your safety and comfort are our top priorities. All our vehicles are regularly maintained and equipped with the latest safety features. Our professional drivers are trained to provide a secure and pleasant journey, ensuring you can relax and enjoy the ride.`,
    faqsTitle: ["FAQs Related to", " Transfer Services"],
    faqs: [
      [
        "1. How do I book a transfer?",

        "You can book our services filling the request form or contacting our customer service team for assistance.",
      ],
      [
        "2. What types of vehicles are available?",
        "We offer a range of vehicles, from standard sedans to luxury SUVs, to accommodate your needs.",
      ],
      [
        "3. Can I make changes to my booking?",
        "Yes, you can modify your booking up to 48 hours before your scheduled transfer.",
      ],
      [
        "4. What if my flight is delayed?",
        "We monitor flight schedules and will adjust your pickup time accordingly, ensuring you are never left waiting.",
      ],
    ],
  },

  {
    title: "Meet and Greet at Railway Stations",
    stepNumber: "04",
    image: railwayStationsImage,
    webpImage: railwayStationsWebpImage,
    backDescription:
      "Our Meet and Greet service at railway stations provides a seamless and luxurious travel experience for passengers arriving or departing by train. Our professional staff will be waiting for you at the station, ready to assist with your luggage and guide you through the station's facilities. Whether you are traveling for business or leisure, our dedicated service ensures a smooth transition from the train to your next destination.",
    // arrival: ``,
    // departure: "",
    //transit: "",

    benefits: [
      [
        "Personalized Welcome:",
        `Enjoy a warm welcome from our friendly staff who will assist you upon arrival or departure.`,
      ],
      [
        "Luggage Assistance:",
        ` Our team will handle your luggage, allowing you to travel without the burden of heavy bags.`,
      ],
      [
        "Efficient Navigation:",
        `We guide you through the station, helping you find your way to platforms, exits, or connecting transport.`,
      ],
      [
        "Time-Saving:",
        `Skip the hassle of navigating busy stations and enjoy a streamlined experience.`,
      ],
      [
        "Comfort and Convenience:",
        `Relax knowing that you have professional support throughout your journey.`,
      ],
    ],
    // pricing: "",
    faqs: [
      [
        "1. How do I book the Meet and Greet service?",
        "You can book our service by filling out the online request form on our website or by contacting us via email with your travel details.",
      ],
      [
        "2. What information do I need to provide when booking?",
        "Please provide your train details, arrival or departure time, number of passengers, and any special requirements.",
      ],
      [
        "3. What if my train is delayed?",
        "We monitor train schedules and will adjust your pickup time accordingly, ensuring you are met promptly upon arrival.",
      ],
      [
        "4. Can I request additional services?",
        "Yes, we offer various additional services, such as transportation to your final destination or special accommodations for children or elderly passengers.",
      ],
      [
        "5. Is the pricing the same for all railway stations? ",
        "Pricing may vary based on the station and distance to your final destination. Please contact us for a precise quotation.",
      ],
    ],
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
                      <p
                        className={`thinScrollbar ${styles.servicesServices__cardBackText}`}
                      >
                        {backDescription}
                      </p>

                      <MainBtn onClick={() => onSelect(index)}>
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
