import UserDashboard from "../Pages/Admin/UserNew/UserDashboard";
import Temple from "../Pages/Admin/UserNew/UserPages/Temple";
import PriestBooking from "../Pages/Admin/UserNew/UserPages/PriestBooking";
import OurProfile from "../Pages/Admin/UserNew/UserPages/OurProfile";
import TempleForms from "../Pages/Admin/UserNew/UserPages/TempleForms";
import Reward from "../Pages/Admin/UserNew/UserPages/Reward";
import PriestBook from "../Pages/Admin/UserNew/UserPages/PriestBook";
import UpdatePriestBooking from "../Pages/Admin/UserNew/UserPages/UpdatePriestBook";
export const UserRoutes = [
  {
    path: "",
    name: "UserDashboard",
    element: <UserDashboard />,
  },
  {
    path: "/user/approved/temple",
    name: "UserTemple",
    element: <Temple />,
  },
  {
    path: "/user/priestBooking",
    name: "UserTemple",
    element: <PriestBooking />,
  },
  {
    path: "/user/priestBook",
    name: "UserTemple",
    element: <PriestBook />,
  },
  {
    path: "/user/priestBook/update",
    name: "UserTemple",
    element: <UpdatePriestBooking />,
  },
  {
    path: "/user/ourProfile",
    name: "ourProfile",
    element: <OurProfile />,
  },
  {
    path: "/user/Temple/Templeform",
    name: "ourProfile",
    element: <TempleForms />,
  },
  {
    path: "/user/Rewards",
    name: "Rewards",
    element: <Reward />,
  },
];
