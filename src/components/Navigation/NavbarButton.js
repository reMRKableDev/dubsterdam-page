import React from "react";
import { StyledThemeButton } from "./NavbarStyles";

const NavbarButton = ({ theme, handleThemeToggle }) => {
  return (
    <StyledThemeButton onClick={handleThemeToggle}>
      {theme.mode === "dark" ? "Light Mode 🌕" : "Dark Mode 🌑"}
    </StyledThemeButton>
  );
};

export default NavbarButton;
