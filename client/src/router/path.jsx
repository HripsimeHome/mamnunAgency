//import { ReactElement } from "react";
//import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TourismPage from "../pages/TourismPage";
import EducationPage from "../pages/EducationPage";
import ServicesPage from "../pages/ServicesPage";
import ContactsPage from "../pages/ContactsPage";
 
import ErrorPage from "../pages/ErrorPage";

// Paths

export const homePagePath = "/";
export const aboutPagePath = "/about";
export const tourismPagePath = "/tourism";
export const educationPagePath = "/education";
export const servicesPagePath = "/services";
export const contactsPagePath = "/contacts";
 

// Routes

export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },
  {
    path: aboutPagePath,
    component: <AboutPage />,
  },  
  {
    path: tourismPagePath,
    component: <TourismPage />,
  },
  {
    path: educationPagePath,
    component: <EducationPage />,
  },
 
  {
    path: servicesPagePath,
    component: <ServicesPage />,
  },
    {
    path: contactsPagePath,
    component: <ContactsPage />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];