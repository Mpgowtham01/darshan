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
    name: " Your Profile",
    path: "/communityFamilyMember/Profile",
    hasChildren: false,
    icon: <MdAccountCircle />,
  },
  {
    name: "Relatives Profiles",
    path: "/communityFamilyMember/RelativeProfiles",
    hasChildren: false,
    icon: <MdList />,
  },
  // {
  //   name: "Landing Page",
  //   path: "/",
  //   hasChildren: false,
  //   icon: <AiTwotoneHome />,
  // },
  // {
  //   name: "Add Category",
  //   path: "/vendor/vendorCategory",
  //   hasChildren: false,
  //   icon: < MdList />,
  // },
  // {
  //   name: "Offer",
  //   path: "//",
  //   hasChildren: false,
  //   icon: <MdAssignment />,
  // },
  // {
  //   name: "My Bussiness",
  //   path: "//",
  //   hasChildren: false,
  //   icon: <MdCircleNotifications />,
  // },
  // {
  //   name: "Photo Layout",
  //   path: "//",
  //   hasChildren: false,
  //   icon: <MdWork />,
  // },
];
