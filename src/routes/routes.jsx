import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";


  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children:[
        {
            path:'/',
            Component: Home,
        },
        {
            path: 'myBookings',
            Component: MyBookings ,
        },
        {
            path: 'blogs',
            Component: Blogs
        },
        {
          path: 'contactUs',
          Component: ContactUs,
        },
      ]
    },
  ]);

  export default router