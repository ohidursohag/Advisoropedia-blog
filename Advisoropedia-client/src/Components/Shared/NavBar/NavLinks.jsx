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
        className={`group  font-medium  duration-300 hover:text-black ${
          pathname === "/" ? "text-black " : "text-gray-500"
        }`}>
        <span>Home</span>
        <span
          className={`block bg-black w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/" ? "w-full " : ""
          }`}></span>
      </Link>
      <Link
        to="/about-us"
        className={`group  font-medium  duration-300 hover:text-black ${
          pathname === "/about-us" ? "text-black " : "text-gray-500"
        }`}>
        <span>About Us</span>
        <span
          className={`block bg-black w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/about-us" ? "w-full " : ""
          }`}></span>
      </Link>

      <Link
        to="/contact-us"
        className={`group  font-medium  duration-300 hover:text-black ${
          pathname === "/contact-us" ? "text-black " : "text-gray-500"
        }`}>
        <span>Contact Us</span>
        <span
          className={`block bg-black w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/contact-us" ? "w-full " : ""
          }`}></span>
      </Link>
      {user?.email && (
        <Link
          to={`/career`}
          className={`group  font-medium  duration-300 hover:text-black ${
            pathname === `/dashboard/${user?.userRole}/statistics`
              ? "text-black "
              : "text-gray-500"
          }`}>
          <span>Career</span>
          <span
            className={`block bg-black w-0 h-[2px] duration-300 group-hover:w-full ${
              pathname === `/dashboard/${user?.userRole}/statistics`
                ? "w-full "
                : ""
            }`}></span>
        </Link>
      )}

      {/* <NavLink to='/login' className={({ isActive }) => isActive ? 'text-black underline font-semibold  ' : 'text-gray-500 font-semibold '}>Login</NavLink> */}
      {/* <button className='text-gray-500  underline font-semibold  '><IoNotifications /></button> */}
    </>
  );
};
export default NavLinks;
