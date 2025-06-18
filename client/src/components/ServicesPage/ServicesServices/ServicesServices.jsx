import styles from "./ServicesServices.module.scss";
import { Link } from "react-router-dom";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import { contactsPagePath } from "../../../router/path";

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

const cards = [
  {
    title: "Full VVIP Services",
    titleNumber: "01",
    image: VIPServicesImage,
    webpImage: VIPServicesWebpImage,
    backDescription:
      "Experience unparalleled luxury and convenience with our Full VIP options, designed to elevate every aspect of your travel journey. With our Full VIP options for Arrival, Departure and Transit, you can travel with confidence, knowing that every detail is taken care of, allowing you to focus on what truly matters.",
  },
  {
    title: "Meet and Greet, Fast Track Services",
    titleNumber: "02",
    image: fastServicesImage,
    webpImage: fastServicesWebpImage,
    backDescription:
      "Experience seamless travel with our Meet and Assist Fast Track service, featuring personalized curbside greetings, expedited formalities, and dedicated baggage assistance. Enjoy the luxury of bypassing long lines and relaxing in our exclusive VIP lounge, ensuring a smooth and stress-free journey from arrival to departure.",
  },
  {
    title: "Transfer Services Worldwide",
    titleNumber: "03",
    image: transferServicesImage,
    webpImage: transferServicessWebpImage,
    backDescription:
      "We offer a comprehensive range of transfer services designed to meet your travel needs, no matter where you are in the world.",
  },

  {
    title: "Meet and Greet at Railway Stations",
    titleNumber: "04",
    image: railwayStationsImage,
    webpImage: railwayStationsWebpImage,
    backDescription:
      "Our Meet and Greet service at railway stations provides a seamless and luxurious travel experience for passengers arriving or departing by train. Our professional staff will be waiting for you at the station, ready to assist with your luggage and guide you through the station's facilities. Whether you are traveling for business or leisure, our dedicated service ensures a smooth transition from the train to your next destination.",
  },
];

const ServicesServices = () => {
  return (
    <section className={`${styles.servicesServices} wrapperBlack`}>
      <div className="container">
        <h2 className="titleWhiteH2">
          Our&nbsp;
          <span className="titlePrimaryH2">Services</span>
        </h2>

        <div className={styles.servicesServices__cardContainer}>
          {cards.map(({ title, titleNumber, image, webpImage, backDescription }, index) => (
            <div key={index} className={styles.servicesServices__card}>
              <div className={styles.servicesServices__cardInner}>
                {/* <div
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
                </div> */}
                {/* cardFront */}

                <div key={index} className={styles.servicesServices__cardBack}>

                  <div key={index} className={styles.servicesServices__cardTestContainer}>

                  <span className={styles.servicesServices__cardTest01}>
                    {titleNumber}
                  </span>
                  <h3 className={styles.servicesServices__cardBackTitle}>
                    {title}
                  </h3>
                  </div>
                  

                  
                  <div className={styles.servicesServices__cardBackTextBlock}>
                    <p className={styles.servicesServices__cardBackText}>
                      {backDescription}
                    </p>

                    <Link to={contactsPagePath} className="btnPrimaryBlack">
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

export default ServicesServices;
