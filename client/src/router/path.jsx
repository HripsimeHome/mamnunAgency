//import { ReactElement } from "react";
//import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TourismPage from "../pages/TourismPage";
import EducationPage from "../pages/EducationPage";
import ServicesPage from "../pages/ServicesPage";
import ContactsPage from "../pages/ContactsPage";
import ImprintPage  from "../pages/ImprintPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import CookiePolicyPage from "../pages/CookiePolicyPage";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import { Navigate } from "react-router-dom";
import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import ForgotPasswordPage from "../pages/Admin/ForgotPasswordPage";
import ResetPasswordPage from "../pages/Admin/ResetPasswordPage";
import AdminNewsPage from "../pages/Admin/AdminNewsPage";
import AdminCertificatesPage from "../pages/Admin/AdminCertificatesPage";
import AdminSettingsPage from "../pages/Admin/AdminSettingsPage";

// Paths

export const homePagePath = "/";
export const aboutPagePath = "/about";
export const tourismPagePath = "/tourism";
export const educationPagePath = "/education";
export const servicesPagePath = "/services";
export const contactsPagePath = "/contacts";
export const imprintPagePath = "/imprint";
export const privacyPolicyPagePath = "/privacyPolicy";
export const cookiePolicyPagePath = "/cookiePolicy";

// admin panel
export const adminPagePath = "/admin";

// auth
export const adminLoginPagePath = adminPagePath + "/login";
export const adminForgotPasswordPagePath = adminPagePath + "/forgotPassword";
export const adminResetPasswordPagePath = adminPagePath + "/resetPassword";

// news
export const adminNewsPagePath = adminPagePath + "/news";
export const adminCertificatesPagePath = adminPagePath + "/certificates";
export const adminSettingsPagePath = adminPagePath + "/settings";

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
    path: imprintPagePath,
    component: <ImprintPage />,
  },
  {
    path: privacyPolicyPagePath,
    component: <PrivacyPolicyPage />,
  },
  {
    path: cookiePolicyPagePath,
    component: <CookiePolicyPage />,
  },

  //   admin panel
  {
    path: adminPagePath,
    component: (
      <PrivateRoute
        element={<Navigate to={adminNewsPagePath} replace={true} />}
      />
    ),
  },
  {
    path: adminLoginPagePath,
    component: <PrivateRoute element={<AdminLoginPage />} noAuth={true} />,
  },
  {
    path: adminForgotPasswordPagePath,
    component: <PrivateRoute element={<ForgotPasswordPage />} noAuth={true} />,
  },
  {
    path: adminResetPasswordPagePath,
    component: (
      <PrivateRoute
        element={<Navigate to={adminLoginPagePath} replace={true} />}
      />
    ),
    children: [
      {
        path: ":token",
        component: (
          <PrivateRoute element={<ResetPasswordPage />} noAuth={true} />
        ),
      },
    ],
  },
  {
    path: adminNewsPagePath,
    component: <PrivateRoute element={<AdminNewsPage />} />,
  },
  {
    path: adminCertificatesPagePath,
    component: <PrivateRoute element={<AdminCertificatesPage />} />,
  },
  {
    path: adminSettingsPagePath,
    component: <PrivateRoute element={<AdminSettingsPage />} />,
  },
  {
    path: "*",
    component: <ErrorPage />,
  },
];
