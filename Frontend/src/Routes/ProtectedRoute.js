import React, {useState, useEffect} from "react"
import { useSelector } from "react-redux"
import {Outlet} from "react-router"
import {Navigate, Route} from "react-router-dom"

const ProtectedRoute = () => {
  const isAuth = useSelector(data=>data.user.isLogin)

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
  // return isAuth ? <Outlet /> : <Navigate to="/home-page" replace />;

}
export default ProtectedRoute
