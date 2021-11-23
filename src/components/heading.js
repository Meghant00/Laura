import React from "react";

const Heading = ({ name }) => {
  return (
    <div className="relative py-2">
      <h2 className="text-2xl lg:text-4xl uppercase text-center font-bold text-gray-800 py-4">
        {name}
      </h2>
      <div className="absolute uppercase top-2 lg:-top-2 text-center w-full font-bold text-gray-800 opacity-25 text-3xl lg:text-7xl">
        {name}
      </div>
    </div>
  );
};

export default Heading;
