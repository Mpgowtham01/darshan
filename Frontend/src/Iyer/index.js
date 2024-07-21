import React from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";

function Iyer() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* <LandingPage /> */}
    </div>
  );
}

export default Iyer;
