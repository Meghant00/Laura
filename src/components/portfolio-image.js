import React from "react";
const PortfolioImage = ({ location, type, name }) => {
  return (
    <div className="group">
      <div className="group w-full  relative overflow-hidden ">
        <img
          src={location}
          alt={name}
          className="w-full h-full transform transition duration-700 ease-linear group hover:scale-125"
          loading="lazy"
        />
        <div className="bg-black group opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-opacity-80 bottom-0 absolute text-white w-full">
          <div className="group flex flex-row justify-between items-center py-1 px-4">
            <div className="flex flex-col items-start justify-center">
              <h4 className="text-xl font-semibold py-1">{name}</h4>
              <h5 className="text-lg">{type}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImage;
