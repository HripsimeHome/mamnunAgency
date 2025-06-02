import { ReactElement } from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
 
import ErrorPage from "../pages/ErrorPage";
import { Navigate } from "react-router-dom";

// Paths

export const homePagePath = "/";
export const aboutPagePath = "/about";
 

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
    path: "*",
    component: <ErrorPage />,
  },
];