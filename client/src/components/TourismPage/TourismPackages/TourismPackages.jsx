import styles from "./TourismPackages.module.scss";
import Tabs from "../../layout/Tabs/Tabs";

import {
  classicTourIcon,
  explorerIcon,
  customToursIcon,
  themedExperiencesIcon,
  dressModestlyIcon,
  localEtiquetteIcon,
  currencyIcon,
  languageIcon,
  visitIcon,
} from "../../../assets/svg";

const tabHeaders = [
  "Travel Packages and Itineraries",
  "Cultural Tips and Travel Advice",
];

const tabContentGroups = [
  [
    {
      icon: classicTourIcon,
      title: "Classic Uzbekistan Tour:",
      description: "A 7-10 day itinerary covering Tashkent, Samarkand, Bukhara, and Khiva.",
    },
    {
      icon: explorerIcon,
      title: "Silk Road Explorer:",
      description: "Dive deep into history with a focus on ancient trade routes, archaeology, and cultural landmarks.",
    },
    {
      icon: customToursIcon,
      title: "Custom Tours:",
      description: "Tell us your interests, and we will build a personalized itinerary just for you.",
    },
    {
      icon: themedExperiencesIcon,
      title: "Themed Experiences:",
      description: "Culinary tours, photography trips, architectural highlights, or eco-adventures – perfect for niche travelers.",
    },
  ],
  
  [
    {
      icon: dressModestlyIcon,
      title: "Dress Modestly:",
      description:
        "While Uzbekistan is a secular country, modest dress is appreciated, especially when visiting religious sites.",
    },
    {
      icon: localEtiquetteIcon,
      title: "Local Etiquette:",
      description:
        "Greetings are important – a firm handshake (between men), along with a smile and polite conversation, goes a long way.",
    },
    {
      icon: currencyIcon,
      title: "Currency:",
      description:
        "The Uzbek Som (UZS) is the local currency. Credit cards are increasingly accepted in cities, but cash is still king in smaller towns.",
    },
    {
      icon: languageIcon,
      title: "Language:",
      description:
        "Uzbek is the official language, but Russian is widely spoken. English is growing in popularity, especially among younger locals and those in the tourism industry.",
    },
    {
      icon: visitIcon,
      title: "Best Time to Visit:",
      description: "Spring (April to June) and autumn (September to early November) offer pleasant weather and vibrant landscapes.",
    },
  ],
];

const TourismPackages = () => {
  return (
    <section className={`${styles.tourismPackages} wrapperBlack`}>
      <div className="container">
        <h2 className="titleWhiteh2">
          Travel packages + Cultural&nbsp;
          <span className="titlePurpleh2">tips and recommendations</span>
        </h2>
        <p className={styles.tourismPackages__text}>
          We offer a range of thoughtfully crafted travel packages tailored to
          your interests and travel style. Choose from:
        </p>
        <Tabs tabHeaders={tabHeaders} tabContentGroups={tabContentGroups} />
         <p className={styles.tourismPackages__text}>
          Each package includes accommodations, transportation, expert guides, entrance fees, and 24/7 support.
        </p>
      </div>
    </section>
  );
};

export default TourismPackages;