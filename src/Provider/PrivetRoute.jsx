/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Authporvider";

const PrivetRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
  if (loding) {
    return (
      <span className="loading loading-spinner text-black bg-black text-center mx-auto mt-10 ml-[630px] loading-lg"></span>
      
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
