import {
  MdDashboard,
  MdWork,
  MdAssignment,
  MdAccountCircle,
  MdCircleNotifications,
  MdList,
} from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";

export const SidebarMenu = [
  {
    name: "HOME",
    path: "",
    hasChildren: false,
    icon: <MdDashboard />,
  },
  {
    name: "Profile",
    path: "/vendor/vendorDetails",
    hasChildren: false,
    icon: <MdAccountCircle />,
  },
  {
    name: "Add Category",
    path: "/vendor/Advertisement",
    hasChildren: false,
    icon: <MdList />,
  },
  {
    name: "Offer",
    path: "/vendor/offers",
    hasChildren: false,
    icon: <MdAssignment />,
  },
  // {
  //   name: "",
  //   path: "",
  //   hasChildren: false,
  //   icon: <MdCircleNotifications />,
  // },
  // {
  //   name: "Photo Layout",
  //   path: "//",
  //   hasChildren: false,
  //   icon: <MdWork />,
  // },
  // {
  //   name: "Landing Page",
  //   path: "/",
  //   hasChildren: false,
  //   icon: <AiTwotoneHome />,
  // },
];

// import {
//   MdDashboard,
//   MdWork,
//   MdAssignment,
//   MdAccountCircle,
//   MdCircleNotifications,
//   MdList,
// } from "react-icons/md";
// import {AiTwotoneHome} from "react-icons/ai";

// export const SidebarMenu = [
//   {
//     name: "HOME",
//     path: "",
//     hasChildren: false,
//     icon: <MdDashboard />,
//   },
//   {
//     name: "Profile",
//     path: "/vendor/Category/vendorDetails",
//     hasChildren: false,
//     icon: <MdAccountCircle />,
//   },

//   {
//     name: " Category",
//     path: "/vendor/Category",
//     hasChildren: false,
//     icon: < MdList />,
//   },
//   {
//     name: "Offer",
//     path: "//",
//     hasChildren: false,
//     icon: <MdAssignment />,
//   },
//   {
//     name: "My Bussiness",
//     path: "//",
//     hasChildren: false,
//     icon: <MdCircleNotifications />,
//   },
//   {
//     name: "Photo Layout",
//     path: "//",
//     hasChildren: false,
//     icon: <MdWork />,
//   },
//   {
//     name: "Landing Page",
//     path: "/",
//     hasChildren: false,
//     icon: <AiTwotoneHome />,
//   },

// ];
