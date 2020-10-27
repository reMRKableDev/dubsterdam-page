import React from "react";
import { shallow, render } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import NotFound from "./NotFound";

import {
  validateMatchSnapshot,
  validateToEqual,
} from "../../utils/testValidators";

describe("Not Found unit tests", () => {
  it("should validate match snapshot for Not Found component", () => {
    const wrapper = shallow(<NotFound />);

    validateMatchSnapshot(wrapper);
  });

  it("should validate <p> to equal 'Sorry,'", () => {
    const wrapper = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const notFoundText = wrapper.find("p").text();

    validateToEqual(notFoundText, "Sorry,");
  });

  it("should validate <h1> to equal 'This Page Doesn't Exist!,'", () => {
    const wrapper = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const notFoundText = wrapper.find("h1").text();

    validateToEqual(notFoundText, "This Page Doesn't Exist!");
  });
});
