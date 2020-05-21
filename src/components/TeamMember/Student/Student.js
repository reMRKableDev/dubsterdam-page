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
  StyledLocationPhrase,
} from "../MemberStyles";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  StyledCarouselDivContainer,
  StyledCarouselInnerDiv,
  StyledCarouselProjectTitle,
} from "./StudentStyles";

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
          <StyledLocationPhrase>
            Location: {student.campus} <em>(Remote)</em>
          </StyledLocationPhrase>
          <hr />
          <h4>Technologies I've used</h4>
          <StyledHtmlIcon />
          <StyledCssIcon />
          <StyledJsIcon />
          <StyledReactIcon />
          <StyledNodeIcon />
          <StyledDatabaseIcon />
          <hr />
          <h4>Projects I've done</h4>
          <StyledCarouselDivContainer>
            <Carousel showThumbs={false} width="280px">
              {student.projects.map((project) => (
                <StyledCarouselInnerDiv key={project.id}>
                  <StyledCarouselProjectTitle>
                    {project.name}
                  </StyledCarouselProjectTitle>
                  <p>{project.description}</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                  >
                    See the website
                  </a>
                </StyledCarouselInnerDiv>
              ))}
            </Carousel>
          </StyledCarouselDivContainer>
        </StyledStudentInfo>
        <StyledIconsDivContainer>
          <StyledIcons>
            <p>See more projects</p>
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
