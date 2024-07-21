import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isHeaderNavOpen, setIsHeaderNavOpen] = useState(true);
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsHeaderNavOpen(false);
    }
  };

  const [logout, setLogout] = React.useState(false);
  React.useEffect(() => {
    if (!sessionStorage.getItem("USER_AUTH_STATE")) navigate("/guidelogin");
  }, [logout]);
  const logoutHandler = e => {
    e.preventDefault();
    sessionStorage.removeItem("USER_AUTH_STATE");
    setLogout(true);
  };

  return (
    <>
      <div className={`dashboards ${isHeaderNavOpen ? "openSidebar" : ""}`}>
        <div className="dashboards__headerNavs">
          <div className="dashboards__headerNavs--container">
            <span
              className="navMenu"
              onClick={() => setIsHeaderNavOpen(prev => !prev)}>
              {isHeaderNavOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </span>
            <span className="logo" onClick={() => navigate("/")}>
              Guide
            </span>
            <button
              className="Btn"
              style={{ fontSize: "2rem" }}
              onClick={handleLogout}>
          
              <AiOutlineLogout />
            </button>
          </div>
        </div>

        <div className="dashboards__sidebars">
          <Sidebar handleCloseSidebar={handleCloseSidebar} />
        </div>

        <div className="dashboards__view">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
