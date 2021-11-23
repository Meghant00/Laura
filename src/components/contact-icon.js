import React from "react";

const ContactIcon = ({ icon }) => {
  return (
    <div className="group mx-2">
      <div className="py-4 px-4 group rounded-full border border-gray-600 group-hover:bg-yellow-400 group-hover:border-white transition duration-300 ease-linear">
        {icon}
      </div>
    </div>
  );
};

export default ContactIcon;
