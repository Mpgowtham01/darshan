import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuth } from "../../../hooks/useAuth";

const Dashboard = () => {
  const [isHeaderNavOpen, setIsHeaderNavOpen] = useState(false);

  const { handleLogout } = useAuth();

  const navigate = useNavigate();
  const groupName = localStorage.getItem("Group_Name");
  console.log("groupname", groupName);
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
              {groupName} Members
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
