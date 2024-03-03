
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import useAuth from "../hooks/useAuth";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {

   const {user} = useAuth()
   console.log(user)
     return (
       <div className="font-kodo-mono">
       <NavBar/>
        <Outlet/>
        <Footer/>
       </div>
  )
};

export default MainLayout;
