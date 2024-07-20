import GuideDashboard from "../Pages/Admin/GuideDashboard/GuideDashboard";
import OurProfile from "../Pages/Admin/GuideDashboard/GuidePages/OurProfile";
import TempleForms from "../Pages/Admin/UserNew/UserPages/TempleForms";

export const GuideRoutes = [
  {
    path: "/guide",
    name: "GuideDashboard",
    element: <GuideDashboard />,
  },

  {
    path: "/guide/ourProfile",
    name: "ourProfile",
    element: <OurProfile />,
  },
  {
    path: "/guide/enquiry",
    name: "enquiry",
    element: <TempleForms />,
  },
];
