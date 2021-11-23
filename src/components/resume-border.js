import React from "react";

const ResumeBorder = () => {
  return (
    <div className="relative overflow-hidden w-14 lg:w-12">
      <div className="absolute left-0">
        <div className="relative w-4 h-4 rounded-full border-2 border-gray-400">
          <div className="absolute top-full h-screen left-45 w-0 border border-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBorder;
