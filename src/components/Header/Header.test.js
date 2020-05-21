import React from "react";
import { shallow, render } from "enzyme";
import Header from "./Header";
import wcsLogo from "../../assets/logo.png";

import {
  validateMatchSnapshot,
  validateToEqual,
} from "../../utils/testValidators";

describe("Header unit tests", () => {
  it("should validate snapshot of Header component", () => {
    const wrapper = shallow(<Header />);
    validateMatchSnapshot(wrapper);
    validateToEqual(wrapper.find("img").prop("src"), wcsLogo);
  });

  it("should validate <img> src", () => {
    const wrapper = shallow(<Header />);
    const src = wrapper.find("img").prop("src");
    validateToEqual(src, wcsLogo);
  });

  it("should validate <img> src", () => {
    const wrapper = render(<Header />);
    const h1Text = wrapper.find("h1").text();
    validateToEqual(h1Text, "We are DubSterdam");
  });
});
