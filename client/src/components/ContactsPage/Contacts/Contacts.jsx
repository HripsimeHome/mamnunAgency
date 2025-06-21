import styles from "./Contacts.module.scss";
import { useNavigate } from "react-router-dom";
import { phone, email, address } from "../../../constants/contacts";
import MainBtn from "../../layout/MainBtn/MainBtn.jsx";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import {
  phoneImage,
  phoneWebpImage,
  emailImage,
  emailWebpImage,
  locationImage,
  locationWebpImage,
  location1_5Image,
  location1_5WebpImage,
  location2Image,
  location2WebpImage,
  location3Image,
  location3WebpImage,
} from "../../../assets/images";

const contactInfoData = [
  {
    image: phoneImage,
    webpImage: phoneWebpImage,
    title: "Phone:",
    text: phone,
  },

  {
    image: emailImage,
    webpImage: emailWebpImage,
    title: "Email:",
    text: email,
  },

  {
    image: locationImage,
    webpImage: locationWebpImage,
    title: "Address:",
    text: address,
  },
];

const Contacts = () => {
  const navigate = useNavigate();

  return (
    <section className={`${styles.contacts} wrapperWhite wrapperPadding`}>
      <div className="container">
        <h2 className="titlePrimaryH2">
          Write&nbsp;
          <span className="titleSecondaryH2">to us</span>
        </h2>
        <div className={styles.contacts__container}>
          <div className="width60">
            <br />
            1,5
            <ImageWebp
              src={location1_5Image}
              srcSet={location1_5WebpImage}
              alt="Step icon"
              className={styles.contacts__icon}
            />
            <br />
            2
            <ImageWebp
              src={location2Image}
              srcSet={location2WebpImage}
              alt="Step icon"
              className={styles.contacts__icon}
            />
            <br />
            3
            <ImageWebp
              src={location3Image}
              srcSet={location3WebpImage}
              alt="Step icon"
              className={styles.contacts__icon}
            />
            form
            <MainBtn
              //onClick={}
              className={styles.authWrapper__btn}
            >
              Send
            </MainBtn>
          </div>{" "}
          {/* form */}
          <div className={`${styles.contacts__info} width40`}>
            {contactInfoData.map(({ image, webpImage, title, text }, index) => (
              <div key={index} className={styles.contacts__contactItem}>
                <ImageWebp
                  src={image}
                  srcSet={webpImage}
                  alt={title}
                  className={styles.contacts__icon}
                />
                <span className={styles.contacts__title}>{title}</span>
                <span className={styles.contacts__text}>{text}</span>
              </div>
            ))}
            <SocialIcons />
          </div>
        </div>{" "}
        {/* contacts__container */}
      </div>
    </section>
  );
};

export default Contacts;
