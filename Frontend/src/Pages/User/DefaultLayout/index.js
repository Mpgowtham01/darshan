import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.scss";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import Vendorsidebar from "../../Vendor/Vendorsidebar";

const DefaultLayout = () => {
  const [isHeaderNavOpen, setIsHeaderNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsHeaderNavOpen(false);
    }
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

export default DefaultLayout;
