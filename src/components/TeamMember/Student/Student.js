import React from "react";
import { Greetings } from "../../../data/greetings";
import sayRandomGreeting from "../../../helpers/randomGreeting";
import {
  StyledArticle,
  StyledArticleHeader,
  StyledProfileImage,
  StyledStudentInfoContainer,
  StyledStudentInfo,
  StyledIconsDivContainer,
  StyledIcons,
  StyledGitHubIcon,
  StyledLinkedInIcon,
  StyledDatabaseIcon,
  StyledHtmlIcon,
  StyledCssIcon,
  StyledNodeIcon,
  StyledReactIcon,
  StyledJsIcon,
} from "../MemberStyles";

const Student = ({ student }) => {
  return (
    <StyledArticle>
      <StyledArticleHeader>
        <StyledProfileImage src={student.profilePic} alt="avatar" />
      </StyledArticleHeader>
      <StyledStudentInfoContainer>
        <StyledStudentInfo>
          <h3>
            {sayRandomGreeting(Greetings)}, my name is <br />
            <span>
              {student.firstName} {student.lastName}
            </span>
          </h3>
          <p>{student.about}</p>
          <hr />
          <h4>Technologies I've used</h4>
          <StyledHtmlIcon />
          <StyledCssIcon />
          <StyledJsIcon />
          <StyledReactIcon />
          <StyledNodeIcon />
          <StyledDatabaseIcon />
        </StyledStudentInfo>
        <StyledIconsDivContainer>
          <StyledIcons>
            <p>See my projects</p>
            <a target="_blank" rel="noopener noreferrer" href={student.github}>
              <StyledGitHubIcon />
            </a>
          </StyledIcons>
          <StyledIcons>
            <p>Connect with me</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={student.linkedIn}
            >
              <StyledLinkedInIcon />
            </a>
          </StyledIcons>
        </StyledIconsDivContainer>
      </StyledStudentInfoContainer>
    </StyledArticle>
  );
};

export default Student;
