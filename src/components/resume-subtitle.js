import React from "react";

const ResumeSubtitle = ({ name }) => {
  return (
    <h4 className="font-semibold text-lg md:text-2xl text-yellow-500 uppercase">
      {name}
    </h4>
  );
};

export default ResumeSubtitle;
