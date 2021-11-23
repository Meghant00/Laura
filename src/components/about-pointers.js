import React from "react";
import { FaAngleRight } from "react-icons/fa";
const AboutPointer = ({ name, value }) => {
  return (
    <div className="py-4 flex flex-row justify-between items-center">
      <FaAngleRight className="text-yellow-400 text-lg" />
      <span className="font-bold px-2">{name}</span>
      <span className="px-4">{value}</span>
    </div>
  );
};

export default AboutPointer;
