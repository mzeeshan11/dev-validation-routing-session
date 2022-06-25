import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Layout/SideBar/SideBar";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) => {
  let auth = useAuth();
  return (
    <React.Fragment>
      {auth?.dev_weekend_user?.token ? (
        <Navigate to="/dashboard" replace />
      ) : (
        <div>{children}</div>
      )}
    </React.Fragment>
    // <div className="d-flex">
    //   <Sidebar />
    //   <div className="px-4 py-5">
    //     <Outlet />
    //   </div>
    // </div>
  );
};
export default PublicRoute;
