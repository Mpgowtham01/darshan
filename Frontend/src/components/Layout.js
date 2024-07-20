import React from "react";
import HeaderNavBar from "./HeaderNavBar";
import MainFooter from "./Footer/index";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderNavBar />
      {children}
      <MainFooter />
    </>
  );
};

export default Layout;
