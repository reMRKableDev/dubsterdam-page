import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavbarButton from "./NavbarButton";
import { validateNotEmpty } from "../../utils/testValidators";

describe("Navbar button unit test", () => {
  it("should validate rendering", () => {
    const handleThemeToggleMock = jest.fn();
    const dummyTheme = {
      mode: "dark",
    };

    render(
      <NavbarButton
        handleThemeToggle={handleThemeToggleMock}
        theme={dummyTheme}
      />
    );

    const buttonLight = screen.getByText(/light/i);

    validateNotEmpty(buttonLight);
    expect(buttonLight).toBeInTheDocument();

    userEvent.click(buttonLight);
  });
});
