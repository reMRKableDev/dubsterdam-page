import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { validateMatchSnapshot } from "../../utils/testValidators";

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
});
