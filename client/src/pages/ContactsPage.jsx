import Head from "../components/global/Head/Head";
import Contacts from "../components/ContactsPage/Contacts/Contacts";

const ContactsPage = () => {
  return (
    <>
      <Head
        keyword={
          "study abroad help, travel assistance, education planning, personalized support, study abroad consultation, travel planning, expert education advice, smooth travel services, study abroad guidance, travel support services"
        }
        title={"Contact Us | Study Abroad & Travel Assistance | MAMNUN Agency"}
        ogTitle={
          "Contact Us | Study Abroad & Travel Assistance | MAMNUN Agency"
        }
        description={
          "Have questions about study abroad or travel? Get expert help and personalized support to plan your education and journey smoothly and confidently."
        }
        ogDescription={
          "Have questions about study abroad or travel? Get expert help and personalized support to plan your education and journey smoothly and confidently."
        }
      />
      <Contacts />
    </>
  );
};

export default ContactsPage;
