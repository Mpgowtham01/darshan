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
    name: "Dashboard",
    path: "",
    hasChildren: false,
    icon: <MdDashboard />,
  },
  {
    name: "Our Profile",
    path: "/guide/ourProfile",
    hasChildren: false,
    icon: <MdAccountCircle />,
  },

  // {
  //   name: "Enquiry",
  //   path: "//",
  //   hasChildren: false,
  //   icon: <MdCircleNotifications />,
  // },

  // {
  //   name: "Landing Page",
  //   path: "/",
  //   hasChildren: false,
  //   icon: <AiTwotoneHome />,
  // },
];
