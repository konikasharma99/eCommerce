import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComp = () => {
  const Auth = localStorage.getItem("user");
  if (Auth) {
    return <Outlet />;
  } else {
    return <Navigate to={"/signup"} />;
  }
};
export default PrivateComp;
