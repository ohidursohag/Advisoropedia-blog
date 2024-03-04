import { createBrowserRouter } from "react-router-dom";
import Authentication from "../Pages/Authentication";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Career from "../Pages/Career";
import PostDetails from "../Pages/PostDetails";
import Error from "../Pages/Error";
import ProtectedRoute from "./ProtectedRoute";


const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
      <MainLayout/>
    </ProtectedRoute>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'post/:id',
        element:<PostDetails/>
      },
      {
        path:'contact-us',
        element:<ContactUs/>
      },
      {
        path:'about-us',
        element:<AboutUs/>
      },
      {
        path:'career',
        element:<Career/>
      },
    ]
  },
  {
   path:'/authentication',
   element:<Authentication/>
  }
]);

export default appRoutes