import Head from "../components/global/Head/Head";
import ServicesHeader from "../components/ServicesPage/ServicesHeader/ServicesHeader";
import ServicesTraveller from "../components/ServicesPage/ServicesTraveller/ServicesTraveller";
import ServicesServices from "../components/ServicesPage/ServicesServices/ServicesServices";
import ServicesBook from "../components/ServicesPage/ServicesBook/ServicesBook";

const ServicesPage = () => {
  return (
    <>
      <Head
        keyword={
          "VIP airport services, meet and assist, fast track airport, airport transfers, business traveler VIP service, senior traveler assistance, family travel support, unaccompanied minors service, luxury travel assistance, corporate group travel, event travel VIP, travel agent VIP services, health and wellness travel, personalized airport service"
        }
        title={"Extra VIP Services | VIP Meet & Assist, Transfers, Fast Track"}
        ogTitle={
          "Extra VIP Services | VIP Meet & Assist, Transfers, Fast Track"
        }
        description={
          "Enjoy VIP airport services: meet & assist, fast track, and transfers at 900+ airports worldwide. Tailored travel for business, families, seniors, and more."
        }
        ogDescription={
          "Enjoy VIP airport services: meet & assist, fast track, and transfers at 900+ airports worldwide. Tailored travel for business, families, seniors, and more."
        }
      />
      <ServicesHeader />
      <ServicesTraveller />
      <ServicesServices />
      <ServicesBook />
    </>
  );
};

export default ServicesPage;
