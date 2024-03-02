import useAuth from "../../../hooks/useAuth";

import PropTypes from "prop-types";
import { MdOutlineAppRegistration } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogin, TbLogout } from "react-icons/tb";
import MenuItem from "../../Utils/MenuItem";


const DropDownMenu = ({ openDropdown }) => {
  const { user, logOut } = useAuth();


  return (
    <div
      className={`absolute top-[52px] lg:top-[71px] -z-50 bg-contain bg-center right-0 bg-blend-overlay  shadow-[0px_0px_5px_1px_rgba(0,0,0,.2)] rounded-b-lg  duration-500 hidden lg:block ${
        user ? "" : ""
      } w-[250px]
    ${
      openDropdown
        ? "scale-y-100 translate-y-0 opacity-1000"
        : "opacity-0 scale-y-0 -translate-y-[50%]"
    }`}>
      <div>
        {user && (
          <div className="my-5">
            <figure className="rounded-full w-10 h-10 mx-auto overflow-hidden ring bg-gray-100 ring-gray-500">
              <img
                loading="lazy"
                className="object-cover w-10 h-10 object-center"
                src={user?.profileImage}
                alt="profile image"
              />
            </figure>
            <p className="text-lg text-center px-2 font-medium text-orange-400">
              {user?.fullName.slice(0, 16)}
            </p>
            <p className="text-gray-500 text-center mb-5">{user?.email}</p>
            <div className=""></div>
          </div>
        )}
      </div>
      <div className="mb-10">
        {user ? (
          <>

            <hr className="border-gray-500" />
            <MenuItem
              icon={IoSettingsSharp}
              label="Profile"
              address="/dashboard/profile"
            />
            <hr className="border-gray-500" />
            <div
              onClick={logOut}
              className=" flex items-center px-10 py-2 cursor-pointer text-gray-500  transition-colors duration-300 transform hover:text-black/80  hover:bg-gray-200">
              <TbLogout size={25} />
              <span className="mx-4 font-medium">Logout</span>
            </div>
            <hr className="border-gray-500" />
          </>
        ) : (
          <>
            <hr className="border-gray-500" />
            <MenuItem icon={TbLogin} label="Login" address="/login" />
            <hr className="border-gray-500" />
            <MenuItem
              icon={MdOutlineAppRegistration}
              label="Register"
              address="/register"
            />
            <hr className="border-gray-500" />
          </>
        )}
      </div>
    </div>
  );
};

DropDownMenu.propTypes = {
  openDropdown: PropTypes.bool,
  setOpenDropdown: PropTypes.func,
};
export default DropDownMenu;
