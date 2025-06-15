import styles from "./AboutFAQ.module.scss";
import Accordion from "../../layout/Accordion/Accordion";

import { meritBasedIcon } from "../../../assets/svg";

const accordionItems = [
  {
    icon: meritBasedIcon,
    title: "1. What types of travel packages do you offer?",
    content:
      "We offer a variety of travel packages that include cultural tours of iconic Silk Road cities, hiking adventures in the mountains of Uzbekistan, and short-term classes to learn traditional crafts such as handmade carpet weaving, silk fabric production, pottery, and paper-making.",
  },

  {
    icon: meritBasedIcon,
    title: "2. What VIP services do you provide?",
    content:
      "Our VIP services include full ground handling and Meet and Greet assistance at airports worldwide for arrivals, departures, and transit. We also offer stress-free hourly transfers with professional drivers in clean, neat vehicles, ensuring a comfortable journey to your destination.",
  },

  {
    icon: meritBasedIcon,
    title: "3. Can you help organize events or parties?",
    content:
      "Yes! We specialize in organizing unforgettable events and parties, taking care of every detail to ensure a memorable experience for you and your guests.",
  },

  {
    icon: meritBasedIcon,
    title: "4. Are your services customizable?",
    content:
      "Absolutely! We tailor our travel itineraries and VIP services to meet your specific needs and preferences, ensuring a personalized experience.",
  },

  {
    icon: meritBasedIcon,
    title: "5. How do I book a package or service?",
    content:
      "You can easily book a package or service through our website or by contacting our customer service team, who will assist you in creating the perfect travel experience.",
  },

  {
    icon: meritBasedIcon,
    title: "6. What types of vehicles do you use for transfers?",
    content:
      "We use clean, neat vehicles for our transfers, driven by professional drivers dressed in black suits and ties, ensuring a high standard of service and comfort.",
  },

  {
    icon: meritBasedIcon,
    title: "7. Do you offer services for both individuals and groups?",
    content:
      "Yes, we cater to both individual travelers and groups, providing tailored services to meet the needs of all our clients.",
  },

  {
    icon: meritBasedIcon,
    title: "8. What is the cancellation policy?",
    content:
      "Our cancellation policy varies depending on the service or package booked. Please refer to our terms and conditions or contact our customer service for specific details.",
  },

  {
    icon: meritBasedIcon,
    title: "9. How can I contact you for more information?",
    content:
      "You can reach us through our website's contact form, email, or phone number. Our customer service team is ready to assist you with any questions or concerns you may have.",
  },

  {
    icon: meritBasedIcon,
    title: "10. How fast can I get an answer to my inquiry?",
    content:
      "We strive to respond to all inquiries within 24 hours, ensuring you receive timely assistance for your travel needs.",
  },
];

const AboutFAQ = () => {
  return (
    <section className={`${styles.aboutFAQ} wrapperBlack`}>
      <div className="container">
        <h2 className="titlePrimarryH2">FAQ</h2>

        <div className={styles.aboutFAQ__accordionContainer}>
          {accordionItems.map(({ icon, title, content }, index) => (
            <Accordion
              key={index}
              icon={icon}
              title={title}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFAQ;
