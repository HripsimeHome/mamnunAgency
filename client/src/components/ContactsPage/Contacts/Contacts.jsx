import styles from "./Contacts.module.scss";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";

import { 
  phone,
  email,
  address  
} from "../../../constants/contacts";

import {
  phoneImage,
  phoneWebpImage,

  emailImage, 
  emailWebpImage, 

  locationImage, 
  locationWebpImage,
} from "../../../assets/images";

const contactInfoData = [
  {
    image: phoneImage,
    webpImage: phoneWebpImage,
    title: "Phone:",
    text: phone
  },

  {
    image: emailImage,
    webpImage: emailWebpImage,
    title: "Email:",
    text: email
  },

  {
    image: locationImage,
    webpImage: locationWebpImage,
    title: "Address:",
    text: address
  }
]

const Contacts = () => {
  return (
    <section className={`${styles.contacts} wrapperWhite`}>
      <div className="container">
        <h2 className="titlePrimaryH2">
          Write&nbsp;
          <span className="titleSecondaryH2">to us</span>
        </h2>
        <div className={styles.contacts__container}>
          <div className="width60">
            form            
            <button 
             // onClick={}
              className={`${styles.contacts__btn} btnPrimary`}
            >
            Send
            </button>
          </div> {/* form */}


          <div className={`${styles.contacts__info} width40`}>          
            {contactInfoData.map(({ image, webpImage, title, text }, index) => (
              <div 
                key={index} 
                className={styles.contacts__contactItem}>
                <ImageWebp
                  src={image}
                  srcSet={webpImage}
                  alt={title}
                  className={styles.contacts__icon}
                />
                <span className={styles.contacts__title}>
                  {title} 
                </span> 
                <span className={styles.contacts__text}>
                  {text}
                </span>  
              </div>
            ))}
             
            <SocialIcons />
           </div>




        </div> {/* contacts__container */}
      </div>
    </section>
  );
};

export default Contacts;