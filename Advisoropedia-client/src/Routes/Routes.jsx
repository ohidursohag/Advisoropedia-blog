import { createBrowserRouter } from "react-router-dom";
import Authentication from "../Pages/Authentication";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Career from "../Pages/Career";


const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/contact-us',
        element:<ContactUs/>
      },
      {
        path:'/about-us',
        element:<AboutUs/>
      },
      {
        path:'/career',
        element:<Career/>
      },
    ]
  },
  {
   path:'/auth',
   element:<Authentication/>
  }
]);

export default appRoutes