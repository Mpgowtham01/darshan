import {
  MdDashboard,
  MdWork,
  MdAssignment,
  MdAccountCircle,
  MdCircleNotifications,
  MdList,
} from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
export const sideMenuRoutes = groupName => {
  return [
    {
      name: "Dashboard",
      path: `/community/${groupName}`,
      hasChildren: false,
      icon: <MdDashboard />,
    },
    {
      name: "Approval",
      path: `/community/${groupName}/Approval`,
      hasChildren: false,
      icon: <MdDashboard />,
    },
    // {
    //   name: "Details",
    //   hasChildren: true,
    //   path: null,
    //   icon: <MdAssignment />,
    //   children: [
    //     { name: "Approval", path: "" },
    //     { name: "Pending", path: "" },
    //   ],
    // },
    {
      name: "User",
      // path: "/kuladeivam/Users",
      path: `/community/${groupName}/user`,
      hasChildren: false,
      icon: <MdAccountCircle />,
    },
    {
      name: "Notification",
      // path: "/kuladeivam/NotificationList",
      path: `/community/${groupName}/notificationList`,
      hasChildren: false,
      icon: <MdCircleNotifications />,
    },
    {
      name: "Matrimonial",
      // path: "/kuladeivam/MatrimonialList",
      path: `/community/${groupName}/matrimonialList`,
      hasChildren: false,
      icon: <MdWork />,
    },
    {
      name: "Jobs",
      // path: "/kuladeivam/JobList",
      path: `/community/${groupName}/jobList`,
      hasChildren: false,
      icon: <MdList />,
    },
    {
      name: "Temple page ",
      hasChildren: true,
      path: null,
      icon: <MdAssignment />,
      children: [
        {
          name: "Community Information",
          path: `/community/${groupName}/communityInformationList`,
        },
        {
          name: "Function",
          path: `/community/${groupName}/communityFunctionList`,
        },
        { name: "Incharge", path: `/community/${groupName}/communityIncharge` },
      ],
    },
    // {
    //   name: "Landing Page",
    //   path: "/",
    //   hasChildren: false,
    //   icon: <AiTwotoneHome />,
    // },
    // {
    //   name: "Login",
    //   path: `/community/${groupName}/CommunityLogin`,
    //   hasChildren: false,
    //   icon: <MdList />,
    // },
    // {
    //   name: "singup",
    //   path: `/community/${groupName}/CommunitySingup`,
    //   hasChildren: false,
    //   icon: <MdList />,
    // },
    // {
    //   name: "Blogs&Events",
    //   hasChildren: true,
    //   path: null,
    //   icon: <MdEventAvailable />,
    //   children: [
    //     { name: "Blogs", path: "/" },
    //     { name: "Events", path: "/" },
    //   ],
    // },
  ];
};
