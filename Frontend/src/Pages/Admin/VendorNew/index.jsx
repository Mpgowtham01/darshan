import React, { useState } from "react";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import "./KulaDashboard.scss";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isHeaderNavOpen, setIsHeaderNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsHeaderNavOpen(false);
    }
  };
  const vendorname = localStorage.getItem("vendor");

  const [logout, setLogout] = React.useState(false);
  React.useEffect(() => {
    if (!localStorage.getItem("USER_AUTH_STATE")) navigate("/login");
  }, [logout]);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("USER_AUTH_STATE");
    localStorage.removeItem("Role");
    localStorage.removeItem("id");
    localStorage.removeItem("vendor");

    setLogout(true);
  };
  return (
    <>
      <div className={`dashboards ${isHeaderNavOpen ? "openSidebar" : ""}`}>
        <div className="dashboards__headerNavs">
          <div className="dashboards__headerNavs--container">
            <AiOutlineHome
              style={{
                marginLeft: "2rem",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
            <span className="logo" onClick={() => navigate("/")}>
              {vendorname}
            </span>{" "}
            <button
              className="Btn"
              onClick={logoutHandler}
              style={{ fontSize: "2rem" }}
            >
              <AiOutlineLogout />
            </button>
          </div>
        </div>

        <div className="dashboards__view">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
