import React from "react";
import ResumeListItem from "./resume-list-item";
const ResumeList = ({ list }) => {
  return (
    <ul className="list-disc px-6 py-4">
      {list.map((item) => (
        <ResumeListItem listItem={item} key={item} />
      ))}
    </ul>
  );
};
ResumeList.defaultProps = {
  list: [],
};
export default ResumeList;
