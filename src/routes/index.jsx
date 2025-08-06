import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Adultbirtday from "../pages/BirthdayDecoration";
import Anniversary from "../pages/AnniversaryDecoration";
import BabyShower from "../pages/BabyShower";
import KidsBirthday from "../pages/KidsBirthday";
import BanquetHalls from "../pages/BanquetHalls";
import JustMarried from "../pages/JustMarried";
import RoomDecoration from "../pages/RoomDecoration";
import Ourgallery from "../pages/Ourgallery";
import Contact from "../pages/Contact";
import Trends from "../pages/Trends";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddBlogs from "../pages/AddBlogs";
import EeditBlog from "../pages/EeditBlog";
import AllBlogs from "../pages/AllBlogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/birthday-decoration",
        element: <Adultbirtday />,
      },
      {
        path: "/anniversary-decoration",
        element: <Anniversary />,
      },
      {
        path: "/baby-shower",
        element: <BabyShower />,
      },
      {
        path: "/kids-birthday",
        element: <KidsBirthday />,
      },
      {
        path: "/banquet-hall",
        element: <BanquetHalls />,
      },
      {
        path: "/just-married",
        element: <JustMarried />,
      },
      {
        path: "/room-decoration",
        element: <RoomDecoration />,
      },
      {
        path: "/gallery",
        element: <Ourgallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/trends",
        element: <Trends />,
      },
      {
        path: "/admin-login",
        element: <Login />,
      },
      {
        path: "/admin-signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard-admin",
        element: <Dashboard />,
        children: [
          {
            path: "add-blogs",
            element: <AddBlogs />,
          },
          {
            path: "edit-blogs/:id",
            element: <EeditBlog />,
          },
          {
            path: "all-blogs",
            element: <AllBlogs />,
          },
        ],
      },
    ],
  },
]);

export default router;
