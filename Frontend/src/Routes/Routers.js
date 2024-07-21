import AboutUs from "../Pages/AboutUs";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import kulaDeivam from "../Pages/Admin/kulateyvam/kulateyamdashboard/Kuladashboard";
import TempleList from "../Pages/TempleList";
import FamousTempleList from "../Pages/FamousTempleList";
import GodList from "../Pages/Admin/GodList";
// import Festival from "../Pages/Admin/Festival";
import CreateBlog from "../Pages/Admin/CreateFields/CreateBlog";
import VendorList from "../Pages/Admin/VendorList";
import CityList from "../Pages/Admin/AddList/CityList";
import IyerList from "../Pages/Admin/IyarList";
import AreaList from "../Pages/Admin/AddList/AreaList";
import UserList from "../Pages/Admin/UserList";
import MaingodList from "../Pages/Admin/AddList/MaingodList";
import CreateMaingod from "../Pages/Admin/CreateFields/CreateMaingod";
import CountryList from "../Pages/Admin/AddList/CountryList";
import CreateCountry from "../Pages/Admin/CreateFields/CreateCountry";
import StateList from "../Pages/Admin/AddList/StnateList";
import CreateState from "../Pages/Admin/CreateFields/CreateState";
import Speciality from "../Pages/Admin/AddList/SpecialityList";
import SubCategories from "../Pages/Admin/SubCategories";
import MainCategories from "../Pages/Admin/MainCategories";
import DistrictList from "../Pages/Admin/AddList/DistrictList";
import VendorDetails from "../Pages/Admin/VendorDetails";
import ForgetPassword from "../Pages/ForgetPassword";
import Iyerdashboard from "../Pages/Admin/Iyerdashboard";
import Vendordashboard from "../Pages/Admin/Vendordashboard";
import Userdashboard from "../Pages/Admin/Userdashboard";
import Iyerdetails from "../Pages/Admin/Iyerdetails";
import CreateAboutus from "../Pages/Admin/CreateFields/CreatAboutus";
import AboutList from "../Pages/Admin/AddList/AboutList";
import CreateAmenity from "../Pages/Admin/CreateFields/CreateAmenity";
import AmenityList from "../Pages/Admin/AddList/AmenityList";
import CreatePariharam from "../Pages/Admin/CreateFields/CreatePariharam";
import PariharamList from "../Pages/Admin/AddList/PariharamList";
import TempleFormPage from "../Pages/Admin/AddTempleList/TempleForm/TempleForm";
import TemplePage from "../Pages/Admin/AddTempleList/Temple";
import DistrictForm from "../Pages/Admin/CreateFields/CreateDistrict";
import CityForm from "../Pages/Admin/CreateFields/CreateCity";
import AreaForm from "../Pages/Admin/CreateFields/CreateArea";
import CreateSpeciality from "../Pages/Admin/CreateFields/CreateSpeciality";
import BlogList from "../Pages/Admin/AddList/BlogList";
import TempleLandingPg from "../Pages/TempLeService/TempleLandingpg";
import LiveStream from "../Pages/Admin/LiveStream/liveStream";


const Routers = [

  {
    path: "/login",
    name: "Login ",
    element: Login,
  },

  {
    path: "/signup",
    name: "SignUp ",
    element: SignUp,
  },
  {
    path: "/home-page",
    name: "HomePage ",
    element: HomePage,
  },
  {
    path: "/about-us",
    name: "AboutUs ",
    element: AboutUs,
  },
  {
    path: "/dashboard",
    name: "AdminDashboard ",
    element: AdminDashboard,
  },
  {
    path: "/dashboard",
    name: "Kulateyam ",
    element: kulaDeivam,
  },
  {
    path: "/more-temple",
    name: "TempleList",
    element: TempleList,
  },
  {
    path: "/famous-temple",
    name: "FamousTempleList",
    element: FamousTempleList,
  },

  {
    path: "/temple",
    name: "TemplePage",
    element: TemplePage,
  },
  {
    path: "/templeForm",
    name: "TempleFormPage",
    element: TempleFormPage,
  },

  // {
  //   path: "/blog-detail-list",
  //   name: "BlogDetailList",
  //   element: BlogDetailList,
  // },
  {
    path: "/blog-list",
    name: "BlogList",
    element: BlogList,
  },

  {
    path: "/amenities",
    name: "AmenityList",
    element: AmenityList,
  },

  {
    path: "/amenitiesform",
    name: "CreateAmenity",
    element: CreateAmenity,
  },

  {
    path: "/pariharam-list",
    name: "PariharamList",
    element: PariharamList,
  },
  {
    path: "/create-Pariharam",
    name: "CreatePariharam",
    element: CreatePariharam,
  },

  {
    path: "/about-list",
    name: "Aboutus",
    element: AboutList,
  },
  // {
  //   path: "/admin-login",
  //   name: "AdminLogin",
  //   element: AdminLogin,
  // },
  {
    path: "/god-list",
    name: "GodList",
    element: GodList,
  },
  {
    path: "/create-blog",
    name: "CreateBlog",
    element: CreateBlog,
  },

  {
    path: "/create-Aboutus",
    name: "CreateAboutus",
    element: CreateAboutus,
  },

  {
    path: "/vendorlist",
    name: "VendorList",
    element: VendorList,
  },
  {
    path: "/maingod-list",
    name: "MaingodList",
    element: MaingodList,
  },
  {
    path: "/createmaingod",
    name: "CreateMaingod",
    element: CreateMaingod,
  },

  {
    path: "/country-list",
    name: "CountryList",
    element: CountryList,
  },
  {
    path: "/countryForm",
    name: "CreateCountry",
    element: CreateCountry,
  },
  {
    path: "/State-list",
    name: "StateList",
    element: StateList,
  },
  {
    path: "/StateForm",
    name: "CreateState",
    element: CreateState,
  },
  {
    path: "/city-list",
    name: "CityList",
    element: CityList,
  },

  {
    path: "/areaForm",
    name: "AreaForm",
    element: AreaForm,
  },

  // {
  //   path: "/festival",
  //   name: "Festival",
  //   element: Festival,
  // },
  {
    path: "/iyerlist",
    name: "IyerList",
    element: IyerList,
  },
  {
    path: "/area-list",
    name: "AreaList",
    element: AreaList,
  },
  {
    path: "/userlist",
    name: "UserList",
    element: UserList,
  },
  {
    path: "/district-list",
    name: "DistrictList",
    element: DistrictList,
  },

  {
    path: "/cityForm",
    name: "CityForm",
    element: CityForm,
  },

  {
    path: "/districtForm",
    name: "DistrictForm",
    element: DistrictForm,
  },
  {
    path: "/speciality",
    name: "Speciality",
    element: Speciality,
  },

  {
    path: "/specialityForm",
    name: "SpecialityForm",
    element: CreateSpeciality,
  },

  {
    path: "/sub-categories",
    name: "SubCategories",
    element: SubCategories,
  },

  {
    path: "/main-categories",
    name: "MainCategories",
    element: MainCategories,
  },
  {
    path: "/vendor-details",
    name: "VendorDetails",
    element: VendorDetails,
  },
  {
    path: "/forget-password",
    name: "ForgetPassword",
    element: ForgetPassword,
  },
  {
    path: "/iyerdashboad",
    name: "Iyerdashboard",
    element: Iyerdashboard,
  },
  {
    path: "/vendordashboad",
    name: "Vendordashboard",
    element: Vendordashboard,
  },
  {
    path: "/userdashboad",
    name: "Userdashboard",
    element: Userdashboard,
  },
  {
    path: "/iyerdetails",
    name: "Iyerdetails",
    element: Iyerdetails,
  },
  {
    path: "/userlist",
    name: "UserList",
    element: UserList,
  },



];
export default Routers;
