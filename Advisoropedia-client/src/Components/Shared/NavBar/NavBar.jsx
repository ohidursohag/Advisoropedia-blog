import { IoNotifications } from "react-icons/io5";

import DropDown from "./DropDown";
import NavLinks from "./NavLinks";
import PropTypes from "prop-types";

import { Suspense, lazy, useState } from "react";
import Container from "../../Utils/Container";
import Logo from "../../Utils/Logo";
import useClickOutSide from "../../../hooks/useClickOutSide";
import useAuth from "../../../hooks/useAuth";
const SideNavBar = lazy(() => import("../SideNavBar/SideNavBar"));

const NavBar = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const refWraper = useClickOutSide(setSideBarIsOpen);
const {user} = useAuth()
  return (
    <div
      ref={refWraper}
      className="bg-contain bg-center bg-blend-overlay left-0 top-0 w-full fixed z-[999] bg-white  shadow-[0px_2px_5px_0px_rgba(0,0,0,.2)] ">
      <Container>
        <div className="flex justify-between items-center relative py-2 ">
          <Logo />
          <div className="hidden items-center gap-5 lg:flex">
            <NavLinks />
          </div>
          <div className="flex items-center gap-3">
            {
              user && <button className="text-gray-500 font-semibold text-lg hover:scale-110 duration-300 hover:text-black">
              <IoNotifications size={30} />
            </button>
            }

            <div className="">
              <DropDown
                sideBarIsOpen={sideBarIsOpen}
                setSideBarIsOpen={setSideBarIsOpen}
              />
              <Suspense>
                <SideNavBar
                  sideBarIsOpen={sideBarIsOpen}
                  setSideBarIsOpen={setSideBarIsOpen}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

NavBar.propTypes = {
  sideBarIsOpen: PropTypes.bool,
  setSideBarIsOpen: PropTypes.func,
};
export default NavBar;
