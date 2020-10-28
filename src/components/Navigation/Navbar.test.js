import React from "react";
import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import {
  validateMatchSnapshot,
  validateNotEmpty,
} from "../../utils/testValidators";

describe("Navbar unit test", () => {
  it("should validate match snapshot to Navbar component with theme 'Light Mode 🌕'", () => {
    const dummyTheme = {
      mode: "dark",
    };
    const wrapper = shallow(<Navbar theme={dummyTheme} />);

    validateMatchSnapshot(wrapper);
  });

  it("should validate match snapshot to Navbar component with theme 'Dark Mode 🌑'", () => {
    const dummyTheme = {
      mode: "light",
    };
    const wrapper = shallow(<Navbar theme={dummyTheme} />);

    validateMatchSnapshot(wrapper);
  });

  it("should validate rendering", () => {
    const dummyTheme = {
      mode: "dark",
    };
    render(<Navbar theme={dummyTheme} />);

    const navbar = screen.getByTestId("app-navbar");
    const buttonLight = screen.getByText(/light/i);

    validateNotEmpty(buttonLight);
    expect(buttonLight).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(buttonLight, leftClick)

    // TODO: Finish up this test

    /* validateNotEmpty(buttonDark);
    expect(buttonDark).toBeInTheDocument(); */
  });
});
