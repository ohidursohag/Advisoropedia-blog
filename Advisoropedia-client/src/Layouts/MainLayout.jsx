
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {

   const {user} = useAuth()
   console.log(user)
     return (
       <>
       <NavBar/>
        <Outlet/>
       </>
  )
};

export default MainLayout;
