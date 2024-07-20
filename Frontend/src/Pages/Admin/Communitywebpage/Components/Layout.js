import React from "react";
import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <HeaderNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;