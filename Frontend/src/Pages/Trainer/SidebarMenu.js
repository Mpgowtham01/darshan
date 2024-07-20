import { MdDashboard, MdLibraryAdd } from "react-icons/md";
import { FaBookOpen, FaUsers, FaMoneyCheckAlt } from "react-icons/fa";
import { BiMessageAltError } from "react-icons/bi";

export const SidebarMenu = [
  {
    name: "HOME",
    path: "",
    hasChildren: false,
    icon: <MdDashboard />,
  },
  {
    name: "Profile",
    path:"/trainer/profile",
    hasChildren: false,
  },
  {
    name: "Add New Course",
    path: "/trainer/course/add",
    hasChildren: false,
    icon: <MdLibraryAdd />,
  },
  {
    name: "Course List",
    path: "/trainer/course/list",
    hasChildren: false,
    icon: <FaBookOpen />,
  },
  {
    name: "Student List",
    path: "/trainer/student/list",
    hasChildren: false,
    icon: <FaUsers />,
  },
  {
    name: "Enquiry Request",
    path: "/trainer/enquiry/list",
    hasChildren: false,
    icon: <BiMessageAltError />,
  },
  {
    name: "Payment Details",
    path: "",
    hasChildren: false,
    icon: <FaMoneyCheckAlt />,
  },
];
