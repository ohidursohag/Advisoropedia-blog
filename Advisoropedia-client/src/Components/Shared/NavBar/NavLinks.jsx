import { Link, useLocation } from "react-router-dom";


import useAuth from "../../../hooks/useAuth";
// import { IoNotifications } from "react-icons/io5";

const NavLinks = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
//   console.log(pathname);
  return (
    <>
      <Link
        to="/"
        className={`group  font-medium  duration-300 hover:text-orange-500 ${
          pathname === "/" ? "text-orange-500 " : "text-gray-500"
        }`}
      >
        <span>Home</span>
        <span
          className={`block bg-orange-500 w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/" ? "w-full " : ""
          }`}
        ></span>
      </Link>
      <Link
        to="/about-us"
        className={`group  font-medium  duration-300 hover:text-orange-500 ${
          pathname === "/about-us" ? "text-orange-500 " : "text-gray-500"
        }`}
      >
        <span>About Us</span>
        <span
          className={`block bg-orange-500 w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/about-us" ? "w-full " : ""
          }`}
        ></span>
      </Link>

      <Link
        to="/contact-us"
        className={`group  font-medium  duration-300 hover:text-orange-500 ${
          pathname === "/contact-us" ? "text-orange-500 " : "text-gray-500"
        }`}
      >
        <span>Contact Us</span>
        <span
          className={`block bg-orange-500 w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/contact-us" ? "w-full " : ""
          }`}
        ></span>
      </Link>
      {user?.email && (
        <Link
          to={`/career`}
          className={`group  font-medium  duration-300 hover:text-orange-500 ${
            pathname === `/dashboard/${user?.userRole}/statistics` ? "text-orange-500 " : "text-gray-500"
          }`}
        >
          <span>Career</span>
          <span
            className={`block bg-orange-500 w-0 h-[2px] duration-300 group-hover:w-full ${
              pathname === `/dashboard/${user?.userRole}/statistics` ? "w-full " : ""
            }`}
          ></span>
        </Link>
      )}

      {/* <NavLink to='/login' className={({ isActive }) => isActive ? 'text-orange-500 underline font-semibold  ' : 'text-gray-500 font-semibold '}>Login</NavLink> */}
      {/* <button className='text-gray-500  underline font-semibold  '><IoNotifications /></button> */}
    </>
  );
};
export default NavLinks;
