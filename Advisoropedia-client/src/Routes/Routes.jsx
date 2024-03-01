import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Authentication from "../Layouts/Authentication";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
   path:'/auth',
   element:<Authentication/>,
   children:[
      {
         path:'login',
         element: <Login/>
      },
      {
         path:'signup',
         element: <SignUp/>
      },
   ]
  }
]);

export default appRoutes