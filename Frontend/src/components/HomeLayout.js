import React from "react";
import Footer from "./Footer";
import HeaderNavBar from "./HeaderNavBar";
import MainFooter from "./Footer/MainFooter"
const HomeLayout =({children}) => {
    return(
      <>
      <HeaderNavBar/>
      {children}
      <Footer/>
      </>
    )
  }
  export default HomeLayout;