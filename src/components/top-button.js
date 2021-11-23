import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
const TopButton = () => {
  const button = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return (
    <animated.div style={button}>
      <div className="fixed cursor-pointer bottom-16 right-2 w-16 h-16 py-4 px-4 bg-yellow-400 flex flex-row items-center justify-center hover:bg-yellow-500 transition duration-200 ease-linear rounded-md text-white">
        <a href="#home" className="">
          <FaArrowUp className="text-2xl" />
        </a>
      </div>
    </animated.div>
  );
};

export default TopButton;
