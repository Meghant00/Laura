import React from "react";

const FooterIcons = ({ icon }) => {
  return (
    <div className="group mx-2">
      <div className="py-4 px-4 group rounded-full  bg-yellow-400 group-hover:bg-yellow-500  transition duration-300 ease-linear">
        {icon}
      </div>
    </div>
  );
};

export default FooterIcons;
