import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sideMenu } from "./sideMenu";
import "./styles.css";

const Sidebar = () => {
  const [cookies, removeCookies] = useCookies()
  let location = useLocation();
  function handleLogout() {
    removeCookies("dev_weekend_user", { path: "/" });
  }
  return (
    <div style={{ width: "6.5%" }}>
      <center className="sidebar-fixed pt-5">
        <Nav className="justify-content-center">
          {sideMenu.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-100 mb-2 cursor-pointer ${
                  location.pathname === item.path
                    ? "sidebar-active-tab text-orange"
                    : ""
                }`}
              >
                <Link to={item.path} className="sidebar-icon-text">
                  {item.icon}
                  <p className="cursor-pointer text-dark">{item.title}</p>
                </Link>
              </div>
            );
          })}
          <Button variant="light" onClick={() => handleLogout()}>Logout</Button>
        </Nav>
      </center>
    </div>
  );
};
export default Sidebar;
