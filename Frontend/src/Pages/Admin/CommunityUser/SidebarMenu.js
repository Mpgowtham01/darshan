import {
  MdDashboard,
  MdWork,
  MdAssignment,
  MdAccountCircle,
  MdCircleNotifications,
  MdList,
  MdManageAccounts,
} from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";

export const SidebarMenu = () => {
  const groupName = sessionStorage.getItem("Group_Name");

  const id = sessionStorage.getItem("id");
  return [
    {
      name: "Dashboard",
      path: "",
      hasChildren: false,
      icon: <MdDashboard />,
    },
    {
      name: "Profile",
      path: `/communityUser/${groupName}/profile`,
      hasChildren: false,
      icon: <MdAccountCircle />,
    },
    {
      name: "Notification",
      path: `/communityUser/${groupName}/notification`,
      hasChildren: false,
      icon: <MdList />,
    },
    {
      name: "Matrimonial",
      path: `/communityUser/${groupName}/matrimonial`,
      hasChildren: false,
      icon: <MdAssignment />,
    },
    {
      name: "Jobs",
      path: `/communityUser/${groupName}/jobs`,
      hasChildren: false,
      icon: <MdCircleNotifications />,
    },
    {
      name: "Family Members",
      path: `/communityUser/${groupName}/familymembers`,
      hasChildren: false,
      icon: <MdCircleNotifications />,
    },
    // {
    //   name: "Landing Page",
    //   path: "/",
    //   hasChildren: false,
    //   icon: <AiTwotoneHome />,
    // },
  ];
};
