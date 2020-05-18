import React from "react";
import Mentor from "./Mentor/Mentor";
import Student from "./Student/Student";

const Member = ({ student, mentor }) => {
  return student ? <Student student={student} /> : <Mentor mentor={mentor} />;
};

export default Member;
