import {
    MdDashboard,
    MdEventAvailable,
    MdHotelClass,
    MdFestival,
  } from "react-icons/md";

  export const sidebarMenus = [
    {
      name: "Dashboard",
      path: "",
      hasChildren: false,
      icon: <MdDashboard />,
    },
    {
        name: "OurProfile",
      path: "/admin/profile",
      hasChildren: false,
      icon: <MdDashboard />,
    }
  ];
  