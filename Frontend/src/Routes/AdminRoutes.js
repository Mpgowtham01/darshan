import AmenityList from "../Pages/Admin/AddList/AmenityList";
import AreaList from "../Pages/Admin/AddList/AreaList";
import BlogList from "../Pages/Admin/AddList/BlogList";
import BookingFields from "../Pages/Admin/AddList/BookingFields";
import CityList from "../Pages/Admin/AddList/CityList";
import CountryList from "../Pages/Admin/AddList/CountryList";
import DistrictList from "../Pages/Admin/AddList/DistrictList";
import Festival from "../Pages/Admin/AddList/FestivalList";
import Grouptable from "../Pages/Admin/AddList/GrouptableList";
import MaingodList from "../Pages/Admin/AddList/MaingodList";
import PariharamList from "../Pages/Admin/AddList/PariharamList";
import Speciality from "../Pages/Admin/AddList/SpecialityList";
import StateList from "../Pages/Admin/AddList/StateList";
import Training from "../Pages/Admin/AddList/TrainingList";
import TemplePage from "../Pages/Admin/AddTempleList/Temple";
import TempleFormPage from "../Pages/Admin/AddTempleList/TempleForm/TempleForm";
import CreateAboutus from "../Pages/Admin/CreateFields/CreatAboutus";
import CreateAmenity from "../Pages/Admin/CreateFields/CreateAmenity";
import AreaForm from "../Pages/Admin/CreateFields/CreateArea";
import CreateBlog from "../Pages/Admin/CreateFields/CreateBlog";
import CreateBookingField from "../Pages/Admin/CreateFields/CreateBookingField";
import CreateCategories from "../Pages/Admin/CreateFields/CreateCategories";
import CityForm from "../Pages/Admin/CreateFields/CreateCity";
import CreateCountry from "../Pages/Admin/CreateFields/CreateCountry";
import DistrictForm from "../Pages/Admin/CreateFields/CreateDistrict";
import CreateEventCat from "../Pages/Admin/CreateFields/CreateEventsCat";
import CreateEventType from "../Pages/Admin/CreateFields/CreateEventType";
import FestivalForm from "../Pages/Admin/CreateFields/CreateFestival";
import CreateGroup from "../Pages/Admin/CreateFields/CreateGroup";
import CreateMaingod from "../Pages/Admin/CreateFields/CreateMaingod";
import CreatePariharam from "../Pages/Admin/CreateFields/CreatePariharam";
import CreateSpeciality from "../Pages/Admin/CreateFields/CreateSpeciality";
import CreateState from "../Pages/Admin/CreateFields/CreateState";
import CreateSubCategories from "../Pages/Admin/CreateFields/CreateSubCategories";
import TrainingForm from "../Pages/Admin/CreateFields/CreateTraining";
import CreateVendorCategory from "../Pages/Admin/CreateFields/CreateVendorCategory";
import CreateVendorSubCategory from "../Pages/Admin/CreateFields/CreateVendorSubCategory";
import IyerList from "../Pages/Admin/IyarList.js";
import CreateFunctionInsideTheTemple from "../Pages/Admin/Iyer/FunctionInsideTemples/CreateInsideFunction";
import InsideTempleFunctions from "../Pages/Admin/Iyer/FunctionInsideTemples/InsideTempleFunction";
import CreateFunctionOutsideTheTemple from "../Pages/Admin/Iyer/FunctionOutsideTemple/CreateOutsideFunction";
import OutsideTempleFunction from "../Pages/Admin/Iyer/FunctionOutsideTemple/OutsideTempleFunction";
import IyerAssignList from "../Pages/Admin/Iyer/IyerAssignList";
import IyerBookingList from "../Pages/Admin/Iyer/IyerBookingDetails";
import RoomBooking from "../Pages/Admin/RoomBooking/index.jsx"
import YatraBookingTable from "../Pages/Admin/YatraBookingDetais/index.jsx"


import IyerConfirmedList from "../Pages/Admin/Iyer/IyerConfirmedList";
import IyerDetailsList from "../Pages/Admin/Iyer/IyerDetailsList";
import IyerPendingList from "../Pages/Admin/Iyer/IyerPendingList";
import IyerRejctList from "../Pages/Admin/Iyer/IyerRejectList";
import Iyerdashboard from "../Pages/Admin/Iyerdashboard.js";
import Iyerdetails from "../Pages/Admin/Iyerdetails";
import LiveStream from "../Pages/Admin/LiveStream/LiveStream";
import LiveStreamForm from "../Pages/Admin/LiveStream/LiveStreamForm";
import { default as AddPooja } from "../Pages/Admin/Pooja/AddPooja";
import ViewPooja from "../Pages/Admin/Pooja/ViewPooja";
import Userdashboard from "../Pages/Admin/Userdashboard";
import UserList from "../Pages/Admin/UserList";
import MainCategories from "../Pages/Admin/Vendor/MainCategories";
import SubCategories from "../Pages/Admin/Vendor/SubCategories";
import VendorDetails from "../Pages/Admin/Vendor/VendorList/VendorDetails";
import Vendordashboard from "../Pages/Admin/Vendordashboard";
import VendorList from "../Pages/Admin/VendorList";
import CommunityApproveList from "../Pages/Approval/CommunityList";
import CommunityHeaderList from "../Pages/Approval/CommunityMemberList";
import TempleApproveList from "../Pages/Approval/TempleList";
import TrainerList from "../Pages/Approval/TrainerList";
import UserApprovalList from "../Pages/Approval/UserList";
import GuideApprovalList from "../Pages/Approval/GuideList";
import VendorApproveList from "../Pages/Approval/VendorList";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import EventCategories from "../Pages/Event/EventCategories";
import Eventfrom from "../Pages/Event/Eventfrom/Eventfrom";
import EventList from "../Pages/Event/EventList";
import EventType from "../Pages/Event/EventType";
import ForgetPassword from "../Pages/ForgetPassword";
import PriestApprovalList from "../Pages/Approval/PriestList/index.jsx"
export const AdminRoutes = [
  {
    path: "",
    name: "AdminDashboard",
    element: <AdminDashboard />,
  },
  {
    path: "temple",
    name: "TemplePage",
    element: <TemplePage />,
  },
  {
    path: "templeForm",
    name: "TempleFormPage",
    element: <TempleFormPage />,
  },

  {
    path: "blog",
    name: "BlogList",
    element: <BlogList />,
  },
  {
    path: "addPooja",
    name: "AddPooja",
    element: <AddPooja />,
  },
  {
    path: "viewPooja",
    name: "ViewPooja",
    element: <ViewPooja />,
  },
  {
    path: "amenities",
    name: "AmenityList",
    element: <AmenityList />,
  },

  {
    path: "amenitiesform",
    name: "CreateAmenity",
    element: <CreateAmenity />,
  },

  {
    path: "pariharam",
    name: "PariharamList",
    element: <PariharamList />,
  },
  {
    path: "pariharamForm",
    name: "CreatePariharam",
    element: <CreatePariharam />,
  },

  {
    path: "blogForm",
    name: "CreateBlog",
    element: <CreateBlog />,
  },

  {
    path: "about-us",
    name: "CreateAboutus",
    element: <CreateAboutus />,
  },

  {
    path: "vendorlist",
    name: "VendorList",
    element: <VendorList />,
  },

  {
    path: "mainGodList",
    name: "MaingodList",
    element: <MaingodList />,
  },

  {
    path: "mainGodForm",
    name: "CreateMaingod",
    element: <CreateMaingod />,
  },
  {
    path: "mainCategoriesForm",
    name: "MainCategoriesForm",
    element: <CreateCategories/>,
  },
  {
    path: "subCategoriesForm",
    name: "SubCategoriesForm",
    element: <CreateSubCategories/>,
  },


  {
    path: "country",
    name: "CountryList",
    element: <CountryList />,
  },
  {
    path: "countryForm",
    name: "CreateCountry",
    element: <CreateCountry />,
  },
  {
    path: "state",
    name: "StateList",
    element: <StateList />,
  },
  {
    path: "StateForm",
    name: "CreateState",
    element: <CreateState />,
  },
  {
    path: "city",
    name: "CityList",
    element: <CityList />,
  },

  {
    path: "areaForm",
    name: "AreaForm",
    element: <AreaForm />,
  },

  {
    path: "festival",
    name: "Festival",
    element: <Festival />,
  },
  {
    path: "festivalForm",
    name: "FestivalForm",
    element: <FestivalForm />,
  },
  {
    path: "training",
    name: "Training",
    element: <Training />,
  },
  {
    path: "trainingForm",
    name: "trainingForm",
    element: <TrainingForm />,
  },
  // {
  //   path: "iyerlist",
  //   name: "IyerList",
  //   element: <IyerList />,
  // },
  {
    path: "area",
    name: "AreaList",
    element: <AreaList />,
  },
  {
    path: "userlist",
    name: "UserList",
    element: <UserList />,
  },
  {
    path: "district",
    name: "DistrictList",
    element: <DistrictList />,
  },

  {
    path: "cityForm",
    name: "CityForm",
    element: <CityForm />,
  },

  {
    path: "districtForm",
    name: "DistrictForm",
    element: <DistrictForm />,
  },
  {
    path: "speciality",
    name: "Speciality",
    element: <Speciality />,
  },

  {
    path: "specialityForm",
    name: "SpecialityForm",
    element: <CreateSpeciality />,
  },

  {
    path: "sub-categories",
    name: "SubCategories",
    element: <SubCategories />,
  },

  {
    path: "main-categories",
    name: "MainCategories",
    element: <MainCategories />,
  },
  {
    path: "/admin/addcategoriesdetails",
    name: "EventList",
    element: <EventCategories />,
  },
  {
    path: "/admin/event-type",
    name: "EventType",
    element: <EventType />,
  },
  {
    path: "vendor-details",
    name: "VendorDetails",
    element: <VendorDetails />,
  },
  {
    path: "forget-password",
    name: "ForgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "iyerdashboad",
    name: "Iyerdashboard",
    element: <Iyerdashboard />,
  },
  {
    path: "vendordashboad",
    name: "Vendordashboard",
    element: <Vendordashboard />,
  },
  {
    path: "userdashboad",
    name: "Userdashboard",
    element: <Userdashboard />,
  },
  {
    path: "iyerdetails",
    name: "Iyerdetails",
    element: <Iyerdetails />,
  },
  {
    path: "userlist",
    name: "UserList",
    element: <UserList />,
  },
  {
    path: "/admin/event",
    name: "EventList",
    element: <EventList />,
  },
  {
    path: "/admin/priest-booking",
    name: "IyerBooking",
    element: <IyerBookingList />,
  },
  {
    path: "/admin/room-booking",
    name: "RoomBooking",
    element: <RoomBooking />,
  },
  {
    path: "/admin/yatra-booking",
    name: "YatraBooking",
    element: <YatraBookingTable />,
  },
  {
    path: "/admin/priest-details",
    name: "IyerDetails",
    element: <IyerDetailsList />,
  },
  {
    path: "/admin/inside-temple",
    name: "InsideTemple",
    element: <InsideTempleFunctions />,
  },
  {
    path: "/admin/insidethetemple",
    name: "FunctionsInsideTheTemple",
    element: <CreateFunctionInsideTheTemple />,
  },
  {
    path: "/admin/outside-temple",
    name: "FunctionsOutisideTheTemple",
    element: <OutsideTempleFunction />,
  },
  {
    path: "/admin/outsidethetemple",
    name: "FunctionsInsideTheTemple",
    element: <CreateFunctionOutsideTheTemple />,
  },
  {
    path: "/admin/insidethetemple",
    name: "FunctionsInsideTheTemple",
    element: <CreateFunctionInsideTheTemple />,
  },
  {
    path: "/admin/outside-temple",
    name: "FunctionsOutisideTheTemple",
    element: <OutsideTempleFunction />,
  },
  {
    path: "/admin/outsidethetemple",
    name: "FunctionsInsideTheTemple",
    element: <CreateFunctionOutsideTheTemple />,
  },
  {
    path: "/admin/pending-list",
    name: "IyerPendingList",
    element: <IyerPendingList />,
  },
  {
    path: "/admin/confirmed-list",
    name: "IyerConfirmedList",
    element: <IyerConfirmedList />,
  },
  {
    path: "/admin/rejected-list",
    name: "IyerRejectList",
    element: <IyerRejctList />,
  },
  {
    path: "/admin/assign-list",
    name: "IyerRejectList",
    element: <IyerAssignList />,
  },
  {
    path: "/admin/user-approval",
    name: "UserApprovalList",
    element: <UserApprovalList />,
  },
  {
    path: "/admin/priest-approval",
    name: "PriestApprovalList",
    element: <PriestApprovalList />,
  },
  {
    path: "/admin/guide-approval",
    name: "GuideApprovalList",
    element: <GuideApprovalList />,
  },
  {
    path: "/admin/Community-approval",
    name: "CommunityApprovalList",
    element: <CommunityApproveList />,
  },
  {
    path: "/admin/community-header",
    name: "CommunityMemberList",
    element: <CommunityHeaderList />,
  },
  {
    path: "/admin/temple-approval",
    name: "TempleApprovalList",
    element: <TempleApproveList />,
  },
  {
    path: "/admin/vendor-approval",
    name: "VendorApprovalList",
    element: <VendorApproveList />,
  },
  {
    path: "/admin/priest-approval",
    name: "priestApprovalList",
    element: <PriestApprovalList />,
  },
  {
    path: "/admin/insidethetemple",
    name: "FunctionsInsideTheTemple",
    element: <CreateFunctionInsideTheTemple />,
  },
  {
    path: "/admin/outside-temple",
    name: "FunctionsOutisideTheTemple",
    element: <OutsideTempleFunction />,
  },
  {
    path: "/admin/outsidethetemple",
    name: "FunctionsInsideTheTemple",
    element: <CreateFunctionOutsideTheTemple />,
  },
  {
    path: "/admin/pending-list",
    name: "IyerPendingList",
    element: <IyerPendingList />,
  },
  {
    path: "/admin/confirmed-list",
    name: "IyerConfirmedList",
    element: <IyerConfirmedList />,
  },
  {
    path: "/admin/rejected-list",
    name: "IyerRejectList",
    element: <IyerRejctList />,
  },
  {
    path: "/admin/assign-list",
    name: "IyerRejectList",
    element: <IyerAssignList />,
  },
  {
    path: "/admin/bookingFields",
    name: "BookingFieldList",
    element: <BookingFields />,
  },
  {
    path: "/admin/createBookingField",
    name: "BookingFieldList",
    element: <CreateBookingField />,
  },
  {
    path: "/admin/group",
    name: "GroupTable",
    element: <Grouptable />,
  },
  {
    path: "EventCategoriesform",
    name: "EventType",
    element: <CreateEventCat />,
  },
  {
    path: "/admin/groupForm",
    name: "groupForm",
    element: <CreateGroup />,
  },
  {
    path: "EventTypeform",
    name: "EventType",
    element: <CreateEventType />,
  },
  {
    path: "/admin/eventform",
    name: "Eventform",
    element: <Eventfrom />,
  },
  {
    path: "/admin/addcategory",
    name: "Addcategory",
    element: <CreateVendorCategory />,
  },
  {
    path: "/admin/addsubcategory",
    name: "Addcategory",
    element: <CreateVendorSubCategory />,
  },
  {
    path: "vendor-details",
    name: "VendorDetails",
    element: <VendorDetails />,
  },
  {
    path: "/admin/LiveStream",
    name: "LiveStream",
    element: <LiveStream />,
  },
  {
    path: "/admin/LiveStream/LiveStreamForm",
    name: "Livestreamfrom",
    element: <LiveStreamForm />,
  },
  {
    path: "/admin/Trainer-approval",
    name: "TrainerList",
    element: <TrainerList />
  }
];
