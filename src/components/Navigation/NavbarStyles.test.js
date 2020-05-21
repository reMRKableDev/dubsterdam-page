import React from "react";
import { shallow } from "enzyme";
import {
  StyledNav,
  StyledThemeButton,
  StyledThemeButtonContainer,
} from "./NavbarStyles";

import { validateMatchSnapshot } from "../../utils/testValidators";

describe("Navbar Styles unit tests", () => {
  it("should validate match to snapshot of StyledNav", () => {
    const wrapper = shallow(<StyledNav />);
    validateMatchSnapshot(wrapper);
  });

  it("should validate match to snapshot of StyledThemeButton ", () => {
    const wrapper = shallow(<StyledThemeButton />);
    validateMatchSnapshot(wrapper);
  });

  it("should validate match to snapshot of StyledThemeButtonContainer ", () => {
    const wrapper = shallow(<StyledThemeButtonContainer />);
    validateMatchSnapshot(wrapper);
  });
});
