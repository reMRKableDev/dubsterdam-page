import React from "react";
import { shallow } from "enzyme";
import { StyledDiv, StyledH1 } from "./NotFoundStyles";

import { validateMatchSnapshot } from "../../utils/testValidators";

describe("Not Found Styles unit tests", () => {
  it("should validate match to snapshot of StyledDiv", () => {
    const wrapper = shallow(<StyledDiv />);
    validateMatchSnapshot(wrapper);
  });

  it("should validate match to snapshot of StyledH1 ", () => {
    const wrapper = shallow(<StyledH1 />);
    validateMatchSnapshot(wrapper);
  });
});
