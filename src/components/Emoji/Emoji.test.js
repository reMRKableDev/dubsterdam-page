import React from "react";
import Emoji from "./Emoji";
import { shallow } from "enzyme";

import {
  validateMatchSnapshot,
  validateEmptyString,
  validateEmojiValue,
} from "../../utils/testValidators";

const shallowComponent = () => shallow(<Emoji />);
const shallowComponentWithProps = () =>
  shallow(<Emoji symbol="❤️" label="love" />);

describe("Emoji component unit tests", () => {
  it("should shallow render an Emoji component without props ", () => {
    const wrapper = shallowComponent();

    validateMatchSnapshot(wrapper);
    validateEmptyString(wrapper.find("span").text());
  });

  it("should shallow render an Emoji component with props ", () => {
    const wrapper = shallowComponentWithProps();
    
    validateMatchSnapshot(wrapper);
    validateEmojiValue(wrapper.find("span").text());
  });
});
