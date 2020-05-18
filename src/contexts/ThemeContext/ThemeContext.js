import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeWrapper } from "./ThemeContextStyles";

const ThemeToggleContext = createContext();

export const useTheme = () => useContext(ThemeToggleContext);

export const SiteThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({ mode: "light" });

  const toggle = () => {
    const mode = themeState.mode === "light" ? `dark` : `light`;
    setThemeState({ mode: mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle }}>
      <ThemeProvider theme={{ mode: themeState.mode }}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
