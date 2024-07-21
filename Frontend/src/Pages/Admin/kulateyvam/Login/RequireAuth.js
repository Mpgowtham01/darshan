// import { useLocation, Navigate, HomePage } from "react-router-dom";
// // import HomePage from "../../../HomePage";
// import useAuth from "../Login/hooks/useAuth";

// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   return auth?.roles?.find(role => allowedRoles?.includes(role)) ? (
//     <HomePage />
//   ) : auth?.user ? (
//     <Navigate to="/login" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;
