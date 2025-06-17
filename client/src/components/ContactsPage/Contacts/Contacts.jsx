import styles from "./Contacts.module.scss";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";
import ImageWebp from "../../layout/ImageWebp/ImageWebp";


import {
  phoneImage,
  phoneWebpImage,

  emailImage, 
  emailWebpImage, 

  locationImage, 
  locationWebpImage,
} from "../../../assets/images";

const Contacts = () => {
  return (
    <section className={`${styles.contacts} wrapperWhite`}>
      <div className="container">
        <h2 className="titlePrimaryH2">
          Write&nbsp;
          <span className="titleSecondaryH2">to us</span>
        </h2>
        <div className={styles.contacts__container}>
          <div className={styles.contacts__form}>
            form
            
            <button 
             // onClick={}
              className={`${styles.contacts__btn} btnPrimary`}
            >
            Send
            </button>

          </div> {/* form */}

          <div className={styles.contacts__info}>           
            Info
            <br />
            <SocialIcons />
          </div>{/* info */}

 
        </div> {/* contacts__container */}
      </div>
    </section>
  );
};

export default Contacts;