import React from "react";
import NavItem from "./nav-item";
import navItems from "../data/nav-items";

const Menu = ({ onClick, currentLink }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center text-xs ">
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
  );
};

export default Menu;
