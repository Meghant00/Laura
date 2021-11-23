import React from "react";
import ResumeBorder from "./resume-border";
import ResumeSubtitle from "./resume-subtitle";
import ResumeList from "./resume-list";
const ResumeContent = ({ subtitle, date, pointers, description }) => {
  return (
    <div className="flex flex-row">
      <ResumeBorder />
      <div className="px-4">
        <ResumeSubtitle name={subtitle} />
        <div className="py-4">
          {date === "" ? (
            ""
          ) : (
            <span
              className="bg-gray-300 px-6 py-1 font-semibold
          "
            >
              {" "}
              {date}
            </span>
          )}
        </div>

        <div>
          <p className="py-2 italic">{description}</p>
          <ResumeList list={pointers} />
        </div>
      </div>
    </div>
  );
};
ResumeContent.defaultProps = {
  date: "",
};
export default ResumeContent;
