
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";
import Loading from "../Components/Utils/Loading";

const MainLayout = () => {

  const navigation = useNavigation()

     return (
       <div className="font-kodo-mono">
       <NavBar/>
        {
          navigation.state === 'loading'?<Loading/>: <Outlet/>
        }
        <Footer/>
       </div>
  )
};

export default MainLayout;
