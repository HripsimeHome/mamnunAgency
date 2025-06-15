import styles from "./ContactsMain.module.scss";

const ContactsMain = () => {
  return (
    <section className={`${styles.contactsMain} wrapperWhite`}>
      <div className="container">
        <h2 className="titlePrimaryH2">
          Write&nbsp;
          <span className="titleSecondaryH2">to us</span>
        </h2>
      </div>
    </section>
  );
};

export default ContactsMain;
