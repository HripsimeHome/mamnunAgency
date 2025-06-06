import ServicesHeader from "../components/ServicesPage/ServicesHeader/ServicesHeader";
import ServicesTraveller from "../components/ServicesPage/ServicesTraveller/ServicesTraveller";
import ServicesServices from "../components/ServicesPage/ServicesServices/ServicesServices";
import ServicesBook from "../components/ServicesPage/ServicesBook/ServicesBook";

const ServicesPage = () => {
  return (
    <>
      <ServicesHeader />
      <ServicesTraveller />
      <ServicesServices />
      <ServicesBook />
    </>
  );
};

export default ServicesPage;