import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isHeaderNavOpen, setIsHeaderNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsHeaderNavOpen(false);
    }
  };
  const [logout, setLogout] = React.useState(false);
  React.useEffect(() => {
    if (!sessionStorage.getItem("USER_AUTH_STATE")) navigate("/adminlogin");
  }, [logout]);

  const logoutHandler = e => {
    e.preventDefault();
    sessionStorage.removeItem("USER_AUTH_STATE");
    setLogout(true);
  };
  return (
    <>
      <div className={`dashboard ${isHeaderNavOpen ? "openSidebar" : ""}`}>
        <div className="dashboard__headerNav">
          <div className="dashboard__headerNav--container">
            <span
              className="navMenu"
              onClick={() => setIsHeaderNavOpen(prev => !prev)}>
              {isHeaderNavOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </span>
            <span className="logo" onClick={() => navigate("/")}>
              Darshan Journey
            </span>
            <AiOutlineLogout
              className="navMenu"
              style={{ marginLeft: "auto" }}
              onClick={logoutHandler}>
              Logout
            </AiOutlineLogout>
          </div>
        </div>

        <div className="dashboard__sidebar">
          <Sidebar handleCloseSidebar={handleCloseSidebar} />
        </div>

        <div className="dashboard__view">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
