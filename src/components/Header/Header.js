import React from "react";
import wcsLogo from "../../assets/logo.png";

import { StyledHeader, StyledFigure, StyledH1 } from "./HeaderStyles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledFigure>
        <img src={wcsLogo} alt="logo" />
      </StyledFigure>
      <StyledH1>
        We are <span>DubSterdam</span>
      </StyledH1>
    </StyledHeader>
  );
};

export default Header;
