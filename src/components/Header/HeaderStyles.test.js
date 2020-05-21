import React from "react";
import { shallow } from "enzyme";
import { StyledHeader, StyledFigure, StyledH1 } from "./HeaderStyles";

import { validateMatchSnapshot } from "../../utils/testValidators";

describe("Header Styles unit tests", () => {
  it("should validate match to snapshot of StyledHeader", () => {
    const wrapper = shallow(<StyledHeader />);
    validateMatchSnapshot(wrapper);
  });

  it("should validate match to snapshot of StyledFigure ", () => {
    const wrapper = shallow(<StyledFigure />);
    validateMatchSnapshot(wrapper);
  });

  it("should validate match to snapshot of StyledH1 ", () => {
    const wrapper = shallow(<StyledH1 />);
    validateMatchSnapshot(wrapper);
  });
});
