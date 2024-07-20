import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import "./KulaDashboard.scss";
import Sidebar from "./Sidebar";

const Trainer = () => {
  const [isHeaderNavOpen, setIsHeaderNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsHeaderNavOpen(false);
    }
  };

  const [logout, setLogout] = React.useState(false);
  React.useEffect(() => {
    if (!sessionStorage.getItem("USER_AUTH_STATE")) navigate("/login");
  }, [logout]);
  const logoutHandler = e => {
    e.preventDefault();
    sessionStorage.removeItem("USER_AUTH_STATE");
    setLogout(true);
  };

  const UserName = localStorage.getItem("UserName");
  console.log("Trainer", UserName);
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
            <span className="logo" onClick={() => navigate("/trainer")}>
              {/* Trainer */}
              {UserName}
            </span>

            <button className="Btn">
              <Link onClick={logoutHandler} style={{ fontSize: 14 }}>
                <a href="">Logout</a>
              </Link>
              <HiUserCircle
                style={{ fontSize: 40, marginLeft: 10 }}
                onClick={() => navigate("/trainer/profile")}
              />
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

export default Trainer;
