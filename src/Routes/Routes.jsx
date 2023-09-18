import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AboutUs from "../pages/AboutUs";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Services from "../pages/Services";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/service",
        element: <Services />
      },
      
      // {
      //   path: "/service/:id",
      //   element: <SingleService />,
        
      // }
    ],
  },
]);
