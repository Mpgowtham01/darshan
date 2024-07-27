import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidbar.jsx";

const UserLyerMain = () => {
  const [isHeaderNavOpen, setIsHeaderNavOpen] = useState(false);
  const navigate = useNavigate();
  const vendorname = localStorage.getItem("username");

  useEffect(() => {
    if (!localStorage.getItem("USER_AUTH_STATE")) navigate("/login");
  }, []);

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsHeaderNavOpen(false);
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("USER_AUTH_STATE");
    localStorage.removeItem("Role");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    sessionStorage.removeItem("USER_AUTH_STATE");
    navigate("/login");
  };

  return (
    <>
      <div className={`dashboards ${isHeaderNavOpen ? "openSidebar" : ""}`}>
        <div className="dashboards__headerNavs">
          <div className="dashboards__headerNavs--container">
            <span
              className="navMenu"
              onClick={() => setIsHeaderNavOpen((prev) => !prev)}
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
              {vendorname}
            </span>{" "}
            <button className="Btn" onClick={logoutHandler}>
              Logout
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

export default UserLyerMain;
