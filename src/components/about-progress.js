import React from "react";
import { useSpring, animated } from "react-spring";

const AboutProgress = ({ name, progress }) => {
  const progressBar = useSpring({
    to: { width: progress },
    from: { width: "0%" },
    delay: 1000,
  });
  return (
    <div>
      <div className="flex flex-row justify-between font-bold text-xs py-4">
        <span>{name}</span>
        <span>{progress}</span>
      </div>
      <div className="relative w-full h-3">
        <animated.div
          className="absolute h-3 top-0 bg-yellow-400"
          style={progressBar}
        ></animated.div>
      </div>
    </div>
  );
};

export default AboutProgress;
