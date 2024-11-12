// import { Outlet } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate to={"/login"} />
    </>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
