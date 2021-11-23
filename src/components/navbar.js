import React from "react";
import Menu from "./menu";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import MobileMenu from "./mobile-menu";
const Navbar = ({ onClick, currentLink }) => {
  let [hamburgerClick, setHamburgerClick] = useState(false);
  const MenuClickHandler = () => {
    setHamburgerClick(!hamburgerClick);
    console.log(hamburgerClick);
  };
  let navClassName =
    "text-white py-4 lg:py-2  fixed top-0 w-full transition duration-300 ease-linear z-10";
  const [scroll, setScroll] = useState(false);
  const navScroll = () => {
    window.scrollY > 100 ? setScroll(true) : setScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", navScroll);
    return () => window.removeEventListener("scroll", navScroll);
  }, []);

  scroll
    ? (navClassName =
        navClassName + " bg-black bg-opacity-70 -mt-1 transform scale-y-90")
    : (navClassName = navClassName + "");

  return (
    <section>
      {!hamburgerClick ? (
        <div className={navClassName}>
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center">
            <Menu onClick={onClick} currentLink={currentLink} />
          </div>
          <div className="flex flex-row items-center justify-center">
            <FaBars
              className="text-xl hover:text-yellow-400 transition duration-300 ease-linear lg:hidden"
              onClick={MenuClickHandler}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {hamburgerClick ? (
        <MobileMenu
          menuClick={MenuClickHandler}
          onClick={onClick}
          currentLink={currentLink}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default Navbar;
