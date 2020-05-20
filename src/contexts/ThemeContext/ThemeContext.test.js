import React from "react";
import { render } from "enzyme";
import { SiteThemeProvider } from "./ThemeContext";
import {
  validateDarkThemeMode,
  validateLightThemeMode,
} from "../../utils/testValidators";

describe(" theme", () => {
  it("should render 'Light Mode 🌕' for the button", () => {
    const TestComponent = ({ theme }) => {
      return (
        <>
          <button>
            {theme.mode === "dark" ? "Light Mode 🌕" : "Dark Mode 🌑"}
          </button>
        </>
      );
    };

    const wrapper = render(
      <SiteThemeProvider>
        <TestComponent theme={{ mode: "dark" }} />
      </SiteThemeProvider>
    );

    validateLightThemeMode(wrapper.find("button").text());
  });

  it("should render 'Dark Mode 🌑' for the button", () => {
    const TestComponent = ({ theme }) => {
      return (
        <>
          <button>
            {theme.mode === "dark" ? "Light Mode 🌕" : "Dark Mode 🌑"}
          </button>
        </>
      );
    };

    const wrapper = render(
      <SiteThemeProvider>
        <TestComponent theme={{ mode: "light" }} />
      </SiteThemeProvider>
    );

    validateDarkThemeMode(wrapper.find("button").text());
  });
});
