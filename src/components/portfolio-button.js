import React from "react";

const PortfolioButton = ({ text, onClick, active }) => {
  const activeClassName = "border-yellow-500 text-yellow-500";
  const className =
    "focus:outline-none border-2 border-transparent uppercase hover:border-yellow-500 hover:text-yellow-500 text-gray-800 text-lg font-semibold text-center px-6 py-2 transition duration-500 ease-linear";

  return (
    <div>
      <button
        className={
          active === text ? className + " " + activeClassName : className
        }
        onClick={(type) => onClick(text)}
      >
        {text}
      </button>
    </div>
  );
};

export default PortfolioButton;
