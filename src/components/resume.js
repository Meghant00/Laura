import React from "react";
import Heading from "./heading";
import ResumeTitle from "./resume-title";
import ResumeContent from "./resume-content";
import summary from "../data/summary";
import experience from "../data/experience";
import education from "../data/education";
const Resume = () => {
  return (
    <section className="bg-white py-6 text-gray-800" id="resume">
      <div className="container mx-auto w-4/5 py-2">
        <Heading name="My Resume" />
        <p className="text-center py-2">
          Sit sint consectetur velit quisquam cupiditate impedit suscipit alias
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 py-4 gap-6 ">
          <div>
            <ResumeTitle name="Summary" />
            {summary.map(({ subtitle, description, pointers }) => (
              <ResumeContent
                subtitle={subtitle}
                description={description}
                pointers={pointers}
                key={subtitle}
              />
            ))}
          </div>
          <div className="row-span-2">
            <ResumeTitle name="Experience" />
            {experience.map(({ subtitle, description, pointers, date }) => (
              <ResumeContent
                subtitle={subtitle}
                description={description}
                pointers={pointers}
                date={date}
                key={subtitle}
              />
            ))}
          </div>
          <div>
            <ResumeTitle name="Education" />
            {education.map(({ subtitle, description, pointers, date }) => (
              <ResumeContent
                subtitle={subtitle}
                description={description}
                pointers={pointers}
                date={date}
                key={subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
