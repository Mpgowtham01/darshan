import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Errorpg1 from "../src/Pages/Errorpage/Errorpg1";
import CommunityAdminSignup from "../src/Pages/SignUp/ComminitySignup";
import {
  setAuthenticated,
  setLoading,
} from "./components/Redux_Toolkit/authSlice";
import Iyer from "./Iyer";
import IyerAboutUs from "./Iyer/AboutUs";
import CalendarPage from "./Iyer/CalendarPage";
import ContactUs from "./Iyer/ContactUS";
import { default as Pooja } from "./Iyer/Pooja";
import { default as PoojaDetail } from "./Iyer/Pooja/PoojaDetail.js";
import Training from "./Iyer/Training";
import TrainerList from "./Iyer/Training/TrainerList";
import TrainingDetails from "./Iyer/Training/TrainingDetails";
import UserIyerMain from "./Pages/Admin/userIyer/userIyerMain.js";
import { IyerRoutes } from "./Routes/IyerRoutes.js";
//guide
import Guide from "./Iyer/Guide";
import GuideList from "./Iyer/Guide/GuideList";
import GuideDetails from "./Iyer/Guide/GuideDetails";
import AboutUs from "./Pages/AboutUs";
import CommunityUser from "./Pages/Admin/CommunityUser";
import Communtiyuserlogin from "./Pages/Admin/Communitywebpage/CommunityUserlogin/Communitylogin";
import { default as CommunityTemple } from "./Pages/Admin/Communitywebpage/index";
import Dashboard from "./Pages/Admin/Dashboard";
import { default as ForgotPassword } from "./Pages/Admin/ForgotPassword";
import { default as ResetPassword } from "./Pages/Admin/ForgotPassword/PasswordReset";
import Kuladeivam from "./Pages/Admin/kulateyvam/index";
import User from "./Pages/Admin/UserNew/index";
import GuideDashboard from "./Pages/Admin/GuideDashboard/index";
import Vendors from "./Pages/Admin/VendorNew/index";
import CommunityAdmin from "./Pages/AdminLogin/CommunityAdmin";
// import CommunityUser from "./Pages/Admin/CommunityUser";
import AdminLogin from "./Pages/AdminLogin/index";
import TempleAllPage from "./Pages/AllTemplesPage";
import BlogDetailsPage from "./Pages/BlogDetails";
import BlogsPage from "./Pages/BlogsPage";
import PriestFunctionDetails from "./Pages/Booking/Priest/FunctionDetails";
import PriestPage from "./Pages/Booking/Priest/PriestPage";
import EventTempleDetails from "./Pages/Event/EventTempleDetails";
import Events from "./Pages/Event/index";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import TempleDetailsPage from "./Pages/TempleDetailsPage";
import TempleService from "./Pages/TempLeService";
import ServiceVendor from "./Pages/TempLeService/ServiceVendor";
import TempleLandingPg from "./Pages/TempLeService/TempleLandingpg";
import Trainer from "./Pages/Trainer";
import CommunityMember from "./Pages/Admin/CommunityMember/Index";
import { AdminRoutes } from "./Routes/AdminRoutes";
import { CommunityUserRoutes } from "./Routes/CommunityUserRoutes";
import { KulateyvamRoutes } from "./Routes/KulateyvamRoutes";
import { TrainerRoutes } from "./Routes/TrainerRoutes";
import { UserRoutes } from "./Routes/UserRoutes";
import { GuideRoutes } from "./Routes/GuideRoutes";
import { VendorRoutes } from "./Routes/VendorRoutes";
import { CommunityRoutes } from "./Routes/CommunityRoutes";
import { CommunityMemberRoutes } from "./Routes/CommunityMemberRoutes";
import CommunitySignUp from "./Pages/SignUp/CommunityHeaderMemberSignup/CommunityUserSignUp";
import CommunityLogin from "./Pages/Login/CommunityHeaderAndMember/CommunityLogin";
import Otp from "./Pages/Admin/ForgotPassword/Otp";
//new
import ServiceCategory from "./Pages/TempLeService/servicecategory";
import CategoriesDetails from "./Pages/TempLeService/categortdetails";
import NewPassword from "./Pages/Admin/ForgotPassword/NewPassword";
import { UserIyerRoutes } from "./Routes/UserIyerRoutes.js";
import UserIyerDashboard from "./Pages/Admin/userIyer/UserIyerDashboard.jsx";
import DilapidatedTempleCard from "./Pages/DilapidatedTemple/DilapidatedTempleList.js";
import DilapidatedTempleLandingPage from "./Pages/DilapidatedTemple/DilapilatedTempleLandingPage.js";

import PriestBookingForm from "./Pages/Booking/PriestBooking";
import YatraBooking from "./Pages/Booking/YatraBooking/index.jsx";
import RoomBooking from "./Pages/Booking/RoomBooking/index.js";
import Vendorservice from "./Pages/vendor/Vendorservice.jsx";

import Product from "./Pages/Vendorcart/Products.jsx";
import Home from "./Pages/Vendorcart/Home.jsx";
import Cart from "./Pages/Vendorcart/Cart.jsx";
import Checkout from "./Pages/Vendorcart/Checkout.jsx";
import Products from "./Pages/Vendorcart/Product.jsx";
import AboutPage from "./Pages/Vendorcart/AboutPage.jsx";
import ContactPage from "./Pages/Vendorcart/ContactPage.jsx";
import Iyer_list from "./Iyer/Pooja/Iyer_list/index.js";
import YatraBookingForm from "./Pages/Booking/YatraBooking/YatraBookingForm.js";
import RoomBookingUi from "./Pages/Booking/RoomBooking/RoomBookingUi.jsx";

const ProtectedRoute = ({ Component, redirectTo = "/login" }) => {
  const isAuthenticated = sessionStorage.getItem("USER_AUTH_STATE");
  // const isAuthenticated = true;
  const location = useLocation();

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const getSessionAuthData = sessionStorage.getItem("USER_AUTH_STATE");

    if (getSessionAuthData) {
      dispatch(setAuthenticated(getSessionAuthData));
    }
    dispatch(setLoading(false));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
        <Route
          path="/:state/:district/:city/:godname"
          element={<ProtectedRoute Component={TempleDetailsPage} />}
        />
        <Route path="/alltemples" element={<TempleAllPage />} />
        <Route path="/alltemples/:bySearch" element={<TempleAllPage />} />
        <Route path="/temple-blogs" element={<BlogsPage />} />
        {/* <Route
          path="/events-list"
          element={<ProtectedRoute Component={Events} />}
        /> */}
        <Route path="/events-list" element={<Events />} />
        <Route
          path="/eventtempledetails/:id"
          element={<EventTempleDetails />}
        />
        {/* <Route
          path="/temple-service"
          element={<ProtectedRoute Component={TempleService} />}
        /> */}
        <Route path="/temple-service" element={<TempleService />} />

        <Route
          path="/temple-service/templeDetailsPage/:post/:id"
          element={<TempleLandingPg />}
        />
        <Route path="/temple-service/searchpage" element={<ServiceVendor />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        {/* <Route path="/cmm" element={<CommunityAdmin />} /> */}
        <Route path="/cmmsignup" element={<CommunityAdminSignup />} />
        <Route path="/CommunityuserSignin" element={<Communtiyuserlogin />} />
        <Route path="/priest" element={<PriestPage />} />
        <Route
          path="/priestfunctiondetails/:id"
          element={<PriestFunctionDetails />}
        />
        <Route
          path="/eventtempledetails/:id"
          element={<EventTempleDetails />}
        />
        <Route path="/temple-service" element={<TempleService />} />
        <Route
          path="/temple-service/templeDetailsPage/:post/:id"
          element={<TempleLandingPg />}
        />
        <Route
          path="/CommunityTemple/:groupName"
          element={<CommunityTemple />}
        />
        <Route
          path="/CommunityTemple/:groupName/signup"
          element={<CommunitySignUp />}
        />
        <Route
          path="/CommunityTemple/:groupName/signin"
          element={<CommunityLogin />}
        />
        <Route path="/temple-service/searchpage" element={<ServiceVendor />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/priest" element={<PriestPage />} />
        <Route path="/forgotPassword/:role" element={<ForgotPassword />} />
        <Route path="/otppage/:role" element={<Otp />} />
        <Route path="/NewPassword/:role" element={<NewPassword />} />
        <Route path="/resetPassword/:secret" element={<ResetPassword />} />
        <Route path="/iyerr" element={<UserIyerDashboard />} />
        <Route
          path="/boomyiyer/priestbooking"
          element={<PriestBookingForm />}
        />
        {/* <Route path="/yatrabooking" element={<YatraBookingForm />} /> */}
        <Route path="/yatrabooking" element={<YatraBooking />} />
        <Route path="/roombookingDetails" element={<RoomBookingUi />} />

        <Route path="/yatrabooking/form" element={<YatraBookingForm />} />
        <Route path="/roombooking" element={<RoomBooking />} />
        <Route
          path="/priestfunctiondetails/:id"
          element={<PriestFunctionDetails />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute Component={Dashboard} redirectTo="/adminlogin" />
          }
        >
          {AdminRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>

        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/community/:groupName"
          element={<ProtectedRoute Component={Kuladeivam} />}
        >
          {KulateyvamRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="/vendor" element={<Vendors />}>
          {VendorRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="/user" element={<User />}>
          {UserRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="/guide" element={<GuideDashboard />}>
          {GuideRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>

        <Route path="/communityUser/:groupName" element={<CommunityUser />}>
          {CommunityRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="/communityFamilyMember" element={<CommunityMember />}>
          {CommunityMemberRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="/trainer" element={<Trainer />}>
          {TrainerRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="/bookmyiyer/priestbooking" element={<Iyer />}>
          {/* {IyerRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))} */}
        </Route>
        <Route path="/iyer" element={<UserIyerMain />}>
          {UserIyerRoutes.map(({ path, element: Ele }, index) => (
            <Route key={index} path={path} element={Ele} />
          ))}
        </Route>
        <Route path="/bookmyiyer/puja" element={<Pooja />} />
        <Route path="/bookmyiyer/vendorBooking" element={<Vendorservice />} />
        <Route path="/bookmyiyer/puja/details/:id" element={<PoojaDetail />} />

        <Route path="/bookmyiyer/aboutus" element={<IyerAboutUs />} />
        <Route path="/bookmyiyer/blog" element={<BlogsPage />} />
        <Route path="/bookmyiyer/contact-us" element={<ContactUs />} />
        <Route path="/bookmyiyer/calendar" element={<CalendarPage />} />
        <Route path="/bookmyiyer/training-class" element={<Training />} />
        <Route path="/bookmyiyer/guide" element={<Guide />} />
        <Route path="/bookmyiyer/iyerlist" element={<Iyer_list />} />
        <Route
          path="/bookmyiyer/training-class/details/:id"
          element={<TrainingDetails />}
        />
        <Route
          path="/bookmyiyer/training-class/trainer-list/:id"
          element={<TrainerList />}
        />
        <Route
          path="/bookmyiyer/guide/details/:id"
          element={<GuideDetails />}
        />
        <Route
          path="/bookmyiyer/guidelist/guide-list/:id"
          element={<GuideList />}
        />

        {/* <Route path="/bookmyguide" element={<Guide />}>
         </Route>

         <Route path="/bookmyguide/puja" element={<GPooja />} />
        <Route path="/bookmyguide/puja/details" element={<GPoojaDetail />} />
        <Route path="/bookmyguide/aboutus" element={<GuideGAboutUs />} />
        <Route path="/bookmyguide/blog" element={<BlogsPage />} />
        <Route path="/bookmyguide/contact-us" element={<GContactUs />} />
        <Route path="/bookmyguide/calendar" element={<GCalendarPage />} />
        <Route path="/bookmyguide/guide-class" element={<GTraining />} /> */}
        {/* <Route
          path="/bookmyguide/guide-class/details/:id"
          element={<GTrainingDetails />}
        />
        <Route
          path="/bookmyguide/guide-class/trainer-list/:id"
          element={<GTrainerList />}
        /> */}

        <Route path="*" element={<Errorpg1 />} />

        {/* lalu */}
        <Route path="/user/Temple/vendor/:id" element={<CategoriesDetails />} />
        <Route
          path="/user/Temple/Templeservice"
          element={<ServiceCategory />}
        />
        <Route path="/dilapidatedTemples" element={<DilapidatedTempleCard />} />
        <Route
          path="/dilapidatedTemples/NageswaraTemple"
          element={<DilapidatedTempleLandingPage />}
        />
      </Routes>
    </>
  );
};

export default App;
