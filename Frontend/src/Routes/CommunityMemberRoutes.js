import Dashboard from "../Pages/Admin/CommunityMember/Dashboard";
import RelativeProfile from "../Pages/Admin/CommunityMember/RelativesProfile";
import CommunityForm from "../Pages/Admin/CommunityMember/CommunityForm";
export const CommunityMemberRoutes = [
  {
    path: "",
    name: "UserDashboard",
    element: <Dashboard/>,
  },
  {
    path: "/communityFamilyMember/RelativeProfiles",
    name: "UserTemple",
    element: <RelativeProfile/>,
  },
  {
    path: "/communityFamilyMember/Profile",
    name: "Profile",
    element: <CommunityForm/>,
  },
//   {
//     path: "/user/ourProfile",
//     name: "ourProfile",
//     element: <OurProfile/>,
//   },
//   {
//     path: "/user/Temple/Templeform",
//     name: "ourProfile",
//     element: <TempleForms/>,
//   }

  ];
  
