import React from "react";
import { StyledDiv, StyledH1 } from "./NotFoundStyles";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <StyledDiv>
      <p>Sorry,</p>
      <StyledH1>
        This Page <span>Doesn't Exist!</span>
      </StyledH1>
      <Link to="/">Back to the Homepage</Link>
    </StyledDiv>
  );
};

export default NotFound;
