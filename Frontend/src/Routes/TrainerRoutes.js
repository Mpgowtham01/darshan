import AddNewCourse from "../Pages/Trainer/AddNewCourse";
import CourseList from "../Pages/Trainer/CourseList";
import EnquiryList from "../Pages/Trainer/EnquiryList";
import TrainerProfile from "../Pages/Trainer/MyProfile";
import StudentList from "../Pages/Trainer/StudentList";
import TrainerDashboard from "../Pages/Trainer/TrainerDashboard";

export const TrainerRoutes = [
  {
    path: "",
    name: "TrainerDashboard",
    element: <TrainerDashboard />,
  },
  {
    path: "/trainer/profile",
    name: "TrainerProfile",
    element: <TrainerProfile />,
  },
  {
    path: "/trainer/course/add",
    name: "AddNewCourse",
    element: <AddNewCourse />,
  },
  {
    path: "/trainer/course/list",
    name: "CourseList",
    element: <CourseList />,
  },
  {
    path: "/trainer/enquiry/list",
    name: "EnquiryList",
    element: <EnquiryList />,
  },
  {
    path: "/trainer/student/list",
    name: "StudentList",
    element: <StudentList />,
  },
  {
    // path:"/trainer/profile",
    // name:"Profile",
    // element:<Profile />
  },
];
