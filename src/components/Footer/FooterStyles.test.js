import React from "react";
import { shallow } from "enzyme";

import {
  StyledFooter,
  StyledH2,
  StyledFooterPhrase,
  StyledFooterDeveloperTag,
} from "./FooterStyles";
import { validateMatchSnapshot } from "../../utils/testValidators";

describe("Footer styles unit tests", () => {
  it("should shallow render StyledFooter and match snapshot", () => {
    const wrapper = shallow(<StyledFooter />);
    validateMatchSnapshot(wrapper);
  });

  it("should shallow render StyledH2 and match snapshot", () => {
    const wrapper = shallow(<StyledH2 />);
    validateMatchSnapshot(wrapper);
  });

  it("should shallow render StyledFooterPhrase and match snapshot", () => {
    const wrapper = shallow(<StyledFooterPhrase />);
    validateMatchSnapshot(wrapper);
  });

  it("should shallow render StyledFooterDeveloperTag and match snapshot", () => {
    const wrapper = shallow(<StyledFooterDeveloperTag />);
    validateMatchSnapshot(wrapper);
  });
});
