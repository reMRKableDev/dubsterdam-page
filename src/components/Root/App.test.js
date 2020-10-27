import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { SiteThemeProvider } from "../../contexts/ThemeContext/ThemeContext";
import App from "./App";

import { validateNotEmpty } from "../../utils/testValidators";

describe("App unit tests", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SiteThemeProvider>
          <App />
        </SiteThemeProvider>
      </MemoryRouter>
    );
  });

  it("should validate that Application renders", () => {
    const rootDiv = screen.getByTestId("app-root");

    validateNotEmpty(rootDiv);
    expect(
      screen.getByText((_, node) => {
        const checkTextContent = (node) =>
          node.textContent === "We are DubSterdam";

        const nodeHasText = checkTextContent(node);

        const childrenDontHaveText = Array.from(node.children).every(
          (child) => !checkTextContent(child)
        );

        return nodeHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();
  });
});
