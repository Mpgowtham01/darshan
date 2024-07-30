import Dashboard from "../Pages/Admin/CommunityUser/CommunityPages/Dashboard";
import Jobs from "../Pages/Admin/CommunityUser/CommunityPages/Jobs";
import Matrimonial from "../Pages/Admin/CommunityUser/CommunityPages/Matrimonial";
import Notification from "../Pages/Admin/CommunityUser/CommunityPages/Notification";
import User from "../Pages/Admin/CommunityUser/CommunityPages/User";
import AddFamily from "../Pages/Admin/CommunityUser/CommunityPages/AddFamily";
import AddUserFam from "../Pages/Admin/CommunityUser/CommunityPages/AddUserFam.js";

export const CommunityUserRoutes = [
  {
    path: "",
    name: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/communityUser/:groupName/profile",
    name: "Profile",
    element: <User />,
  },

  {
    path: "/communityUser/:groupName/notification",
    name: "Notification",
    element: <Notification />,
  },
  {
    path: "/communityUser/:groupName/matrimonial",
    name: "Matrimonial",
    element: <Matrimonial />,
  },
  {
    path: "/communityUser/:groupName/jobs",
    name: "Jobs",
    element: <Jobs />,
  },
  {
    path: "/communityUser/:groupName/familymembers",
    name: "FamilyMembers",
    element: <AddFamily />,
  },
  {
    path: "/communityUser/:groupName/familyadduser",
    name: "FamilyListAddUser",
    element: <AddUserFam />,
  },
];
