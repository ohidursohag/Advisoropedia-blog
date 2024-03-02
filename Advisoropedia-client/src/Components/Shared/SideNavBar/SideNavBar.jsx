import PropTypes from "prop-types";
import useAuth from "../../../hooks/useAuth";

import { FaHome } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { MdOutlineAppRegistration} from "react-icons/md";
import { TbLogout, TbLogin } from "react-icons/tb";
import { BsInfoSquareFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import MenuItem from "../../Utils/MenuItem";

// eslint-disable-next-line no-unused-vars
const SideNavBar = ({ sideBarIsOpen }) => {
  const { user, logOut } = useAuth();

  return (
    <div
      className={`fixed top-[54px] sm:top-[54px] bg-contain bg-center right-0 bg-blend-overlay  shadow-[-2px_0px_5px_0px_rgba(0,0,0,.2)] lg:hidden duration-300 h-[calc(100vh-50px)] lg:h-[calc(100vh-71px)] z-340 
      ${sideBarIsOpen ? "w-[250px]" : "w-0"}`}>
      <div className=" h-full flex flex-col justify-between overflow-hidden text-sm">
        <div>
          {user && (
            <div className="my-5">
              <figure className="rounded-full w-14 h-14 mx-auto overflow-hidden ring bg-gray-100 ring-orange-500">
                <img
                  className="object-cover w-14 h-14 object-center"
                  src={user?.profileImage}
                  alt=""
                />
              </figure>
              <p className="text-lg text-center px-2 font-medium text-orange-400">
                {user?.fullName.slice(0, 16)}
              </p>
              <p className="text-gray-500 text-center mb-5">{user?.email}</p>
            </div>
          )}
          <hr className="border-gray-500" />
          <div
            className={`${user ? "" : "mt-10"} divide-y-[1px] divide-gray-500`}>
            <MenuItem icon={FaHome} label="Home" address="/" />
            <MenuItem
              icon={BsInfoSquareFill}
              label="About Us"
              address="/about-us"
            />

            <MenuItem
              icon={BiSolidContact}
              label="Contact Us"
              address="/contact-us"
            />
            <MenuItem
              icon={BiSolidContact}
              label="Career"
              address="/career"
            />
          </div>

          <hr className="border-gray-500" />
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
                className=" flex items-center px-10 py-2 cursor-pointer text-gray-500 transition-colors duration-300 transform  hover:bg-gray-500">
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
    </div>
  );
};

SideNavBar.propTypes = {
  sideBarIsOpen: PropTypes.bool,
  setSideBarIsOpen: PropTypes.func,
};

export default SideNavBar;
