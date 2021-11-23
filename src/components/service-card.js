import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group cursor-pointer">
      <div className="shadow-xl bg-white group border-2 group-hover:border-yellow-400 transition duration-1000 ease-in-out  flex flex-col items-center justify-center px-4 py-4">
        <div className="rounded-full group bg-yellow-500 bg-opacity-30 my-4">
          {icon}
        </div>
        <h3 className="font-bold text-lg py-4 group group-hover:text-yellow-400 transition duration-1000 ease-in-out">
          {title}
        </h3>
        <div className="py-4">{description}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
