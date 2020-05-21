import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

import { validateMatchSnapshot } from "../../utils/testValidators";

describe("Footer component unit tests", () => {
  it("should shallow render component and match snapshot", () => {
    const shallowComponent = () => shallow(<Footer />);
    const wrapper = shallowComponent();

    validateMatchSnapshot(wrapper);
  });
});
