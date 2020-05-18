import React from "react";
import { MentorsList } from "../../data/mentors";
import Member from "../TeamMember/Member";
import { StyledH2, StyledTeamDiv } from "./TeamMentorsListStyles";

const TeamMentorsList = () => {
  return (
    <section>
      <StyledH2>The Mentors</StyledH2>
      <StyledTeamDiv>
        {MentorsList.map((mentor) => (
          <Member key={mentor.id} mentor={mentor} />
        ))}
      </StyledTeamDiv>
    </section>
  );
};

export default TeamMentorsList;
