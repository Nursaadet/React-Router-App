import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import React from "react";

const PrivateRouter = () => {
  const { signed } = useContext(LoginContext);
  return signed ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
