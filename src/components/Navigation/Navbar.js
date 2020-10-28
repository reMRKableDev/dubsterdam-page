import React from "react";
import NavbarButton from "./NavbarButton";
import { StyledNav, StyledThemeButtonContainer } from "./NavbarStyles";

const Navbar = ({ theme, handleThemeToggle }) => {
  return (
    <StyledNav data-testid="app-navbar">
      <StyledThemeButtonContainer>
        <NavbarButton theme={theme} handleThemeToggle={handleThemeToggle} />
      </StyledThemeButtonContainer>
    </StyledNav>
  );
};

export default Navbar;
