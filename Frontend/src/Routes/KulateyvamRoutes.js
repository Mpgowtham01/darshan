import AdminDashboard from "../Pages/Admin/kulateyvam/Addkulateyamdashboard/Kuladashboard";
import AddMatrimonial from "../Pages/Admin/kulateyvam/Addkulateyamdashboard/AddMatrimonial";
import MatrimonialList from "../Pages/Admin/kulateyvam/Listkulateyamfields/MatrimonialList";
import JobList from "../Pages/Admin/kulateyvam/Listkulateyamfields/JobList";
import UserList from "../Pages/Admin/kulateyvam/Listkulateyamfields/UserList";
import AddJob from "../Pages/Admin/kulateyvam/Addkulateyamdashboard/AddJobs";
import AddUser from "../Pages/Admin/kulateyvam/Addkulateyamdashboard/AddUser";
import CommunityLogin from "../Pages/Admin/kulateyvam/Login/CommunityLogin";
import CommunitySignUp from "../Pages/Admin/kulateyvam/Login/CommunitySignUp";
import CommunityInformationList from "../Pages/Admin/kulateyvam/Listkulateyamfields/Communityinformation";
import AddNotification from "../Pages/Admin/kulateyvam/Addkulateyamdashboard/AddNotification";
import NotificationList from "../Pages/Admin/kulateyvam/Listkulateyamfields/NotificationList";
import AddcommunityInformation from "../Pages/Admin/kulateyvam/Addkulateyamdashboard/AddCommunityinformation";
import AddcommunityFunction from "../Pages/Admin/kulateyvam/Addkulateyamdashboard/AddCommunityfunction";
import CommunityFunctionList from "../Pages/Admin/kulateyvam/Listkulateyamfields/CommunityFunction";
import AddcommunityIncharge from "../Pages/Admin/kulateyvam/Addkulateyamdashboard/AddCommunityIncharge";
import CommunityIncharge from "../Pages/Admin/kulateyvam/Listkulateyamfields/CommunityIncharge";
import Approval from "../Pages/Admin/kulateyvam/Listkulateyamfields/Approval/index";

export const KulateyvamRoutes = [
  {
    path: "",
    name: "KulateyvamDashboard",
    element: <AdminDashboard />,
  },
  {
    path: "user",
    name: "UserList",
    element: <UserList />,
  },
  {
    path: "/community/:groupName/Approval",
    name: "Approval",
    element: <Approval />,
  },
  {
    path: "addUser",
    name: "AddUser",
    element: <AddUser />,
  },
  {
    path: "editUser/:id",
    name: "editUser",
    element: <AddUser />,
  },
  {
    path: "matrimonial",
    name: "Matrimonial",
    element: <AddMatrimonial />,
  },
  {
    path: "matrimonialList",
    name: "MatrimonialList",
    element: <MatrimonialList />,
  },
  {
    path: "notification",
    name: "Notification",
    element: <AddNotification />,
  },
  {
    path: "notificationList",
    name: "NotificationList",
    element: <NotificationList />,
  },
  {
    path: "jobList",
    name: "jobList",
    element: <JobList />,
  },
  {
    path: "addJob",
    name: "AddJob",
    element: <AddJob />,
  },
  {
    path: "AddcommunityInformation",
    name: "AddcommunityInformation",
    element: <AddcommunityInformation />,
  },
  {
    path: "communityInformationList",
    name: "communityInformationList",
    element: <CommunityInformationList />,
  },
  {
    path: "AddcommunityFunction",
    name: "AddcommunityFunction",
    element: <AddcommunityFunction />,
  },
  {
    path: "communityFunctionList",
    name: "communityFunctionList",
    element: <CommunityFunctionList />,
  },
  {
    path: "AddcommunityIncharge",
    name: "AddcommunityIncharge",
    element: <AddcommunityIncharge />,
  },
  {
    path: "communityIncharge",
    name: "communityIncharge",
    element: <CommunityIncharge />,
  },

  {
    path: "/community/:groupName/CommunityLogin",
    name: "login",
    element: <CommunityLogin />,
  },
  {
    path: "/community/:groupName/CommunitySignup",
    name: "signup",
    element: <CommunitySignUp />,
  },
];
