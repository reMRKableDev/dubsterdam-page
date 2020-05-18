import React from "react";
import {
  StyledNav,
  StyledThemeButton,
  StyledThemeButtonContainer,
} from "./NavbarStyles";

const Navbar = ({ theme, handleThemeToggle }) => {
  return (
    <StyledNav>
      <StyledThemeButtonContainer>
        <StyledThemeButton onClick={handleThemeToggle}>
          {theme.mode === "dark" ? "Light Mode 🌕" : "Dark Mode 🌑"}
        </StyledThemeButton>
      </StyledThemeButtonContainer>
    </StyledNav>
  );
};

export default Navbar;
