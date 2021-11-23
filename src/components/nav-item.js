import React from "react";

const NavItem = ({ name, link, onClick, currentLink }) => {
  const navClassName =
    "uppercase font-heading font-semibold tracking-wider py-4 px-4 cursor-pointer hover:text-yellow-400 transition duration-200 ease-linear";
  const active = "text-yellow-400";
  return (
    <a
      href={link}
      className={
        link === currentLink ? navClassName + " " + active : navClassName
      }
      onClick={(currentState) => onClick(link)}
    >
      {name}
    </a>
  );
};

export default NavItem;
