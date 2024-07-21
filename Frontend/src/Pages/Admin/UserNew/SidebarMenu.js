import {
  MdDashboard,
  MdWork,
  MdAssignment,
  MdEventAvailable,
  MdAccountCircle,
  MdCircleNotifications,
  MdList,
} from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { GiTempleGate, GiByzantinTemple } from "react-icons/gi";
import { FaMoneyBill } from "react-icons/fa";

export const SidebarMenu = [
  {
    name: "Dashboard",
    path: "",
    hasChildren: false,
    icon: <MdDashboard />,
  },
  {
    name: "Our Profile",
    path: "/user/ourProfile",
    hasChildren: false,
    icon: <MdAccountCircle />,
  },

  {
    name: "Add Temple",
    path: "/user/approved/temple",
    hasChildren: false,
    icon: <GiTempleGate />,
  },
  {
    name: "My Booking",
    hasChildren: true,
    path: null,
    icon: <MdEventAvailable />,
    children: [
      { name: "Priest Booking", path: "/user/priestBooking" },
      { name: "Iyer Booking", path: "#" },
    ],
  },
  {
    name: "Transaction List",
    path: "/user/transaction",
    hasChildren: false,
    icon: <FaMoneyBill />,
  },

  {
    name: "Rewards",
    hasChildren: true,
    path: null,
    icon: <MdEventAvailable />,
    children: [
      { name: "Points", path: "/user/Rewards" },
      { name: "Redeem", path: "#" },
    ],
  },
];
