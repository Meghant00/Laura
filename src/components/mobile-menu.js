import React from "react";
import navItems from "../data/nav-items";
import NavItem from "./nav-item";
import { FaTimes } from "react-icons/fa";
const MobileMenu = ({ menuClick, onClick, currentLink }) => {
  return (
    <>
      <div className="h-full w-full bg-black bg-opacity-80 fixed top-0 z-10"></div>
      <div className="fixed top-0 flex flex-col items-end justify-center w-screen py-4 px-4 z-10">
        <div>
          <FaTimes
            className="text-white text-lg font-thin hover:text-yellow-600 transition duration-300 ease-linear"
            onClick={menuClick}
          />
        </div>
        <div className="bg-white w-full text-gray-900 my-4 rounded-md">
          <div className="flex flex-col lg:flex-row justify-center text-2xl">
            {navItems.map((items) => (
              <NavItem
                name={items.name}
                link={items.link}
                key={items.name}
                onClick={onClick}
                currentLink={currentLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
