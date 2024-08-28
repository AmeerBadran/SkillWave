
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../components/HOC/RootLayout";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound";
import Course from "../pages/Course";
import AllCourses from "../pages/AllCourses";
import Profile from "../pages/Profile";
import MyProfile from "../template/MyProfile";
import EnrolledCourses from "../template/EnrolledCourses";
import Wishlist from "../template/Wishlist";
import Settings from "../template/Settings";
import AddCourse from "../template/AddCourse";
import AdminAllCourses from "../template/AdminAllCourses";
import EditCourse from "../template/EditCourse";
import PaymentMethod from "../pages/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Home />
        ),
      },
      {
        path: "/allCourses",
        element: (
          <AllCourses />
        ),
      },
      {
        path: "/contactUs",
        element: (
          <ContactUs />
        ),
      },
      {
        path: "CheckOut",
        element: (
          <PaymentMethod />
        )
      },
      {
        path: "/course",
        element: (
          <Course />
        )
      },
      {
        path: "/profile",
        element: (
          <Profile />
        ),
        children: [
          {
            path: "myProfile",
            element: <MyProfile />,
          },
          {
            path: "enrolledCourses",
            element: <EnrolledCourses />,
          },
          {
            path: "wishList",
            element: <Wishlist />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "addCourse",
            element: <AddCourse />
          },
          {
            path: "adminAllCourses",
            element: <AdminAllCourses />
          },
          {
            path: "adminAllCourses/editCourse",
            element: <EditCourse />
          },

        ]
      },
    ],
  },
  {
    path: "/logIn",
    element: (
      <LogIn />
    ),
  },
  {
    path: "/signUp",
    element: (
      <SignUp />
    ),
  },
  {
    path: '*',
    element: (
      <NotFound />
    )
  },
],
  {
    basename: "/SkillWave/",
  }
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
