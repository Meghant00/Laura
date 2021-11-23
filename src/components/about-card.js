import React from "react";
import { useSpring, animated, config } from "react-spring";
const AboutCard = ({ icon, number, title, description }) => {
  const { anumber } = useSpring({
    from: { anumber: 0 },
    anumber: number,
    delay: 200,
    config: config.molasses,
  });

  return (
    <div className="grid grid-cols-8 py-4 w-full">
      <div className="col-span-1 w-full flex flex-col items-center py-1 justify-start">
        {icon}
      </div>
      <div className="flex flex-col justify-start items-start col-span-7 w-full">
        <div className="font-bold text-5xl pb-2">
          <animated.div>{anumber.to((n) => n.toFixed(0))}</animated.div>
        </div>
        <div className="py-2">
          <strong>{title}</strong> {description}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
