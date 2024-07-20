import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import "./KulaDashboard.scss";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isHeaderNavOpen, setIsHeaderNavOpen] = useState(false);
  // const { handleLogout } = useAuth("/cmm");
  const { handleLogout } = useAuth("/login");
  const navigate = useNavigate();
  const groupName = sessionStorage.getItem("Group_Name");
  const handleCloseSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsHeaderNavOpen(false);
    }
  };

  return (
    <>
      <div className={`dashboards ${isHeaderNavOpen ? "openSidebar" : ""}`}>
        <div className="dashboards__headerNavs">
          <div className="dashboards__headerNavs--container">
            <span
              className="navMenu"
              onClick={() => setIsHeaderNavOpen(prev => !prev)}
            >
              {isHeaderNavOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </span>
            <AiOutlineHome
              style={{
                marginLeft: "2rem",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
            <span className="logo" onClick={() => navigate("/")}>
              {groupName}
            </span>
            <AiOutlineLogout
              className="navMenu"
              style={{ marginLeft: "auto" }}
              onClick={handleLogout}
            >
              Logout
            </AiOutlineLogout>
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
