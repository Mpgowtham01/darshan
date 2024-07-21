
import LandingPage from "../Iyer/LandingPage";
import AboutUs from "../Iyer/AboutUs"
import Pooja from "../Iyer/Pooja"
import PoojaDetail from "../Iyer/Pooja/PoojaDetail.js";

export const IyerRoutes = [
  {
    path: "",
    name: "LandingPage",
    element: <LandingPage/>,
  },
  {
    path: "/aboutus",
    name: "AboutUs",
    element: <AboutUs/>,
  },
  {
    path:"/puja",
    name:"Pooja",
    element: <Pooja />
  },
  {
    path:"/puja/details",
    name:"PoojaDetail",
    element: <PoojaDetail />
  }
  ];
  
