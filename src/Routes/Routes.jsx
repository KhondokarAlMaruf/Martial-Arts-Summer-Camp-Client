import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dasboard/Dashboard";
import AdminRoutes from "./AdminRoutes";
import AllUsers from "../Dasboard/Admin/AllUsers";
import InstructorRoutes from "./InstructorRoutes";
import InstructorAddClass from "../Dasboard/Instructor/InstructorAddClass";
import InstructorMyClass from "../Dasboard/Instructor/InstructorMyClass";
import StudentRoutes from "./StudentRoutes";
import MyEnrolledClass from "../Dasboard/Student/MyEnrolledClass";
import StudentMySelectedClass from "../Dasboard/Student/StudentMySelectedClass";
import ManageClasses from "../Pages/ManageClasses/ManageClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/manage-classes",
        element: (
          <AdminRoutes>
            <ManageClasses></ManageClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/add-class",
        element: (
          <InstructorRoutes>
            <InstructorAddClass></InstructorAddClass>
          </InstructorRoutes>
        ),
      },
      {
        path: "/dashboard/my-class",
        element: (
          <InstructorRoutes>
            <InstructorMyClass></InstructorMyClass>
          </InstructorRoutes>
        ),
      },
      {
        path: "/dashboard/my-enrolled-class",
        element: (
          <StudentRoutes>
            <MyEnrolledClass></MyEnrolledClass>
          </StudentRoutes>
        ),
      },
      {
        path: "/dashboard/my-selected-class",
        element: (
          <StudentRoutes>
            <StudentMySelectedClass></StudentMySelectedClass>
          </StudentRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
