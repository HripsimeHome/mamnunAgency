import React from "react";
import { Navigate } from "react-router-dom";
import { lsProps } from "../utils/lsProps";
import { getLSItem } from "../utils/localStorage";
import { adminLoginPagePath, adminNewsPagePath } from "./path";

const PrivateRoute = ({ element, noAuth }) => {
  const token = getLSItem(lsProps.token);
  const isAuthenticated = !token;
  const statement = noAuth ? !isAuthenticated : isAuthenticated;
  let navigateTo = adminLoginPagePath;

  if (!isAuthenticated) {
    navigateTo = adminNewsPagePath;
  } else {
    if (noAuth) {
      navigateTo = adminNewsPagePath;
    }
  }

  return statement ? <Navigate to={navigateTo} replace={true} /> : element;
};

export default PrivateRoute;
