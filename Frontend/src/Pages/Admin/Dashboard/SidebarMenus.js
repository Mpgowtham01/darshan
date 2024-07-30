import {
  MdDashboard,
  MdEventAvailable,
  MdHotelClass,
  MdFestival,
} from "react-icons/md";
import { GiTempleGate } from "react-icons/gi";
import { FaIdCard } from "react-icons/fa";
import { DiStreamline } from "react-icons/di";
export const sidebarMenus = [
  {
    name: "Dashboard",
    path: "/admin",
    hasChildren: false,
    icon: <MdDashboard />,
  },
  {
    name: "Temple",
    hasChildren: true,
    path: null,
    icon: <GiTempleGate />,
    children: [
      { name: "Temple List", path: "/admin/temple" },
      { name: "Main God", path: "/admin/mainGodList" },
      { name: "Add New Temple", path: "/admin/AddNewTempleList" },
      { name: "Pariharam", path: "/admin/pariharam" },
      { name: "Country", path: "/admin/country" },
      { name: "State", path: "/admin/state" },
      { name: "District", path: "/admin/district" },
      { name: "City", path: "/admin/city" },
      { name: "Area", path: "/admin/area" },
      { name: "Speciality", path: "/admin/speciality" },
      { name: "Group", path: "/admin/group" },
      { name: "Sub Group", path: "/admin/subGroupList" },
      { name: "Festival", path: "/admin/festival" },
      { name: "Training", path: "/admin/training" },
      { name: "Amenities", path: "/admin/amenities" },
      { name: "Booking Fields", path: "/admin/bookingFields" },
    ],
  },
  {
    name: "Priest",
    hasChildren: true,
    path: null,
    icon: <MdFestival />,
    children: [
      { name: "Priest Booking", path: "/admin/priest-booking" },
      { name: "Priest Details", path: "/admin/priest-details" },
      { name: "Pending List", path: "/admin/pending-list" },
      { name: "Assign List", path: "/admin/assign-list" },
      { name: "Confirmed List", path: "/admin/confirmed-list" },
      { name: "Rejected List", path: "/admin/rejected-list" },
      { name: "Function Inside Temple", path: "/admin/inside-temple" },
      { name: "Function Outside Temple", path: "/admin/outside-temple" },
    ],
  },
  {
    name: "Vendors",
    hasChildren: true,
    path: null,
    icon: <MdEventAvailable />,
    children: [
      { name: "Vendor-Details", path: "/admin/vendor-details" },
      { name: "Main-Category", path: "/admin/main-Categories" },
      { name: "Sub-Categories", path: "/admin/sub-Categories" },
      { name: "Room Booking", path: "/admin/room-booking" },
      { name: "Yatra Booking", path: "/admin/yatra-booking" },
      { name: "Yatre Booking Packages", path:"/admin/yatra-booking/packages" },

      
    ],
  },
  {
    name: "Approval",
    hasChildren: true,
    path: null,
    icon: <MdEventAvailable />,
    children: [
      { name: "User List", path: "/admin/user-approval" },
      { name: "Temple List", path: "/admin/temple-approval" },
      { name: "Vendor List", path: "/admin/vendor-approval" },
      { name: "Priest List", path: "/admin/priest-approval" },
      { name: "Trainer List", path: "/admin/Trainer-approval" },
      { name: "Community List", path: "/admin/Community-approval" },
      {name:"Community Header List", path: "/admin/community-header"},
      {name:"Guide", path: "/admin/guide-approval"}
    ],
  },
  {
    name: "Blogs & Events",
    hasChildren: true,
    path: null,
    icon: <MdEventAvailable />,
    children: [
      { name: "Blog", path: "/admin/blog" },
      { name: "Event", path: "/admin/event" },
      { name: "Blogs&Event Categories", path: "/admin/addcategoriesdetails" },
      { name: "Event Type", path: "/admin/event-type" },
    ],
  },
  {
    name: "Pooja",
    hasChildren: true,
    path: null,
    icon: <MdHotelClass />,
    children: [
      { name: "Add Pooja", path: "/admin/viewPooja" },
      // { name: "View Function", path: "/admin/event" },
    ],
  },
  {
    name: "About Us",
    hasChildren: false,
    path: "/admin/about-us",
    icon: <FaIdCard />,
  },
  {
    name: "LiveStream",
    hasChildren: false,
    path: "/admin/LiveStream",
    icon: <DiStreamline size={24} />,
  },
];
