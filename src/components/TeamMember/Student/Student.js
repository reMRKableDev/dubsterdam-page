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

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StyledCarouselDiv } from "./StudentStyles";

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
          <Carousel autoPlay showThumbs={false}>
            {student.projects.map((project) => (
              <StyledCarouselDiv>
                <p>{project.name}</p>
                <p>{project.description}</p>
                <p>{project.link}</p>
              </StyledCarouselDiv>
            ))}
          </Carousel>
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
