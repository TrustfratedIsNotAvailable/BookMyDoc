import {
  createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
          path:'/',
          hydrateFallbackElement:<h1>Please Wait.Loading...</h1>,
          loader: ()=>fetch('/Doctors.json'),
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
      {
        path:'doctors/:id',
        loader: ()=>fetch('/Doctors.json'),
        Component: ViewDetails
      }
    ]
  }
]);

export default router