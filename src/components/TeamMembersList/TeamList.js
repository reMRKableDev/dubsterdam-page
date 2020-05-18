import React from "react";
import { StudentList } from "../../data/students";
import Member from "../TeamMember/Member";
import { StyledH2, StyledSubPhrase, StyledTeamDiv } from "./TeamListStyles";

const TeamList = () => {
  return (
    <section>
      <StyledH2>The Team</StyledH2>
      <StyledSubPhrase>
        Switch theme-modes and we will greet you in a new language!
      </StyledSubPhrase>
      <StyledTeamDiv>
        {StudentList.map((student) => (
          <Member key={student.id} student={student} />
        ))}
      </StyledTeamDiv>
    </section>
  );
};

export default TeamList;
