import React from "react";
import HeaderNavbar from "../../components/HeaderNavBar/index";
import Footer from "../../components/Footer/index";
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
