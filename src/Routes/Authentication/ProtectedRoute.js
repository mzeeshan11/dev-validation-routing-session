import React from "react";
import Sidebar from "../../Layout/SideBar/SideBar";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let auth = useAuth();
  return (
    <React.Fragment>
      {auth?.dev_weekend_user?.token ? (
        <div className="d-flex">
          <Sidebar />
          <div className="px-4 py-5">{children}</div>
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </React.Fragment>
  );
};
export default ProtectedRoute;
