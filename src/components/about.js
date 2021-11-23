import React from "react";
import Heading from "./heading";
import AboutPointer from "./about-pointers";
import AboutCard from "./about-card";
import aboutInfo from "../data/about-info";
import aboutCardData from "../data/about-card-data";
import AboutProgress from "./about-progress";
import progressData from "../data/progress-data";
const About = () => {
  return (
    <section className="w-full h-full py-4 bg-white text-gray-700" id="about">
      <div className="w-4/5 mx-auto py-6">
        <Heading name="About Me" />
        <p className="text-center ">
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>
        <div className="grid grid-cols-1  lg:grid-cols-3 lg:gap-6 py-4">
          <img src="/images/me.jpg" className="w-full row-span-3" alt="me" />

          <div className="flex flex-col items-start justify-start">
            {aboutInfo.slice(0, 4).map(({ name, value }) => (
              <AboutPointer key={name} name={name} value={value} />
            ))}
          </div>
          <div className="flex flex-col items-start justify-start">
            {aboutInfo.slice(4, 8).map(({ name, value }) => (
              <AboutPointer key={name} name={name} value={value} />
            ))}
          </div>
          <div>
            {aboutCardData
              .slice(0, 2)
              .map(({ icon, title, description, number }) => (
                <AboutCard
                  icon={icon}
                  title={title}
                  key={title}
                  description={description}
                  number={number}
                />
              ))}
          </div>
          <div>
            {aboutCardData
              .slice(2, 4)
              .map(({ icon, number, title, description }) => (
                <AboutCard
                  icon={icon}
                  key={title}
                  number={number}
                  description={description}
                  title={title}
                />
              ))}
          </div>
          <div className="lg:col-span-2">
            {progressData.map(({ name, progress }) => (
              <AboutProgress name={name} progress={progress} key={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
