import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/Doctors.json"),
        Component: Home,
      },
      {
        path: "bookings",
        Component: Bookings,
      },
      {
        path: "contactUs",
        Component: ContactUs,
      },
      {
        path: "doctors/:id",
        loader: () => fetch("/Doctors.json"),
        Component: ViewDetails,
      },
    ],
  },
]);

export default router;
