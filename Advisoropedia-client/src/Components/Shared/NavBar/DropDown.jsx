import { AiOutlineBars } from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import useClickOutSide from "../../../hooks/useClickOutSide";
import useAuth from "../../../hooks/useAuth";

const DropDown = ({ sideBarIsOpen, setSideBarIsOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { user } = useAuth();
  const refWraper = useClickOutSide(setOpenDropdown);
  return (
    <>
      <div
        ref={refWraper}
        onClick={() => {
          setSideBarIsOpen(!sideBarIsOpen);
          setOpenDropdown(!openDropdown);
        }}
        className={`p-1 
          "sm:p-2 text-black "
        flex  items-center gap-2 rounded-full cursor-pointer   duration-300 relative`}>
        <AiOutlineBars size={30} className={`${user ? "lg:hidden" : ""}`} />
        {user ? (
          <div className="rounded-full border border-black size-10 bg-gray-300 overflow-hidden hidden sm:block ">
            {/* Avatar */}
            <img
              className="hover:scale-110 duration-300  object-center size-10"
              referrerPolicy="no-referrer"
              src={user?.profileImage}
              alt="profile"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <DropDownMenu
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      </div>
    </>
  );
};

DropDown.propTypes = {
  sideBarIsOpen: PropTypes.bool,
  setSideBarIsOpen: PropTypes.func,
};
export default DropDown;
