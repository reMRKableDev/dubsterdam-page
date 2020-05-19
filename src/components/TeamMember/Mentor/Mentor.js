import React from "react";
import {
  StyledArticle,
  StyledArticleHeader,
  StyledProfileImage,
  StyledStudentInfoContainer,
  StyledStudentInfo,
  StyledIconsDivContainer,
} from "../MemberStyles";

const Mentor = ({ mentor }) => {
  return (
    <StyledArticle>
      <StyledArticleHeader>
        <StyledProfileImage src={mentor.profilePic} alt="avatar" />
      </StyledArticleHeader>
      <StyledStudentInfoContainer>
        <StyledStudentInfo>
          <h3>
            <span>
              {mentor.firstName} {mentor.lastName}
            </span>
          </h3>
          {mentor.review.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </StyledStudentInfo>
        <StyledIconsDivContainer>
          <p>{mentor.role}</p>
        </StyledIconsDivContainer>
      </StyledStudentInfoContainer>
    </StyledArticle>
  );
};

export default Mentor;
