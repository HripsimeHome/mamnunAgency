
import styles from "./ContactsMain.module.scss";

const ContactsMain = () => {

  return (     
    <section className={`${styles.contactsMain} wrapperWhite`}>     
      <div className="container">
        <h2 className="titlePurpleh2">Write&nbsp;
          <span className="titleBlackh2">to us             
          </span>
        </h2>      
      </div>
    </section>
  );
};

export default ContactsMain;