import Accordion from "../../../layout/Accordion/Accordion";

import {
  careersImage,
  careersWebpImage,
  travelTourismImage,
  travelTourismWebpImage,
  VIPImage,
  VIPWebpImage,
} from "../../../../assets/images";

const accordionItems = [
  {
    image: careersImage,
    webpImage: careersWebpImage,
    // activeImage: careersImage,
    // activeWebpImage: careersWebpImage,
    title: "Education and Careers",
    content:
      "We empower your educational and professional journey with a wide range of programs, including Foundation, Bachelor’s, Master’s, MBA, and PhD degrees. Our engaging short-term options, like summer and winter schools, provide immersive learning experiences, while our curated internships offer invaluable hands-on experience. We also offer teacher training programs to enhance your qualifications and teaching skills. With expert guidance and personalized support, we are here to help you unlock your potential and achieve your career goals!",
  },

  {
    image: careersImage,
    webpImage: careersWebpImage,
    title: "Travel and Tourism",
    content:
      "Experience the magic of Uzbekistan with our tailored travel packages that take you through iconic Silk Road cities like Samarkand, Bukhara, and Tashkent. In addition to cultural exploration, we offer thrilling hiking adventures in the stunning mountains of Uzbekistan and short-term classes where you can learn traditional crafts like handmade carpet weaving, silk fabric production, pottery, and paper-making. Our expert local guides will immerse you in the rich culture and history, ensuring a memorable journey. Discover the beauty and heritage of Uzbekistan!",
  },

  {
    image: VIPImage,
    webpImage: VIPWebpImage,
    title: "Extra VIP Services",
    content:
      "Experience seamless travel with our full VIP ground handling and Meet and Greet services at airports worldwide, ensuring a smooth experience for arrivals, departures, and transit. Our professional drivers, dressed in black suits and ties, provide stress-free transfers in clean, neat vehicles, taking you comfortably to your destination. We also specialize in organizing unforgettable events and parties, handling every detail for your special occasions. Choose us for a luxurious travel experience where every aspect is tailored to your needs!",
  },
];

const HomeServices = () => {
  return (
    <section>
      <h2 className="titleWhiteH2">
        Overview of&nbsp;
        <span className="titlePrimaryH2">Our Services</span>
      </h2>
      <>
        <Accordion
          accordionItems={accordionItems}
          className={StyleSheet.HomeServices__accordionIcon}
        />
      </>
    </section>
  );
};

export default HomeServices;
