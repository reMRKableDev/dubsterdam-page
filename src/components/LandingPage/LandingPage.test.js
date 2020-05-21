import React from "react";
import { shallow } from "enzyme";

import LandingPage from "./LandingPage";
import Header from "../Header/Header";
import TeamList from "../TeamMembersList/TeamList";
import TeamMentorsList from "../TeamMentorsList/TeamMentorsList";
import Footer from "../Footer/Footer";

import {
  validateMatchSnapshot,
  validateToEqual,
} from "../../utils/testValidators";

describe("Landing Page unit tests", () => {
  it("should validate match snapshot for Landing Page component ", () => {
    const wrapper = shallow(<LandingPage />);
    validateMatchSnapshot(wrapper);
  });

  it("should validate presence of child component Header ", () => {
    const wrapper = shallow(<LandingPage />);
    const childComponent = wrapper.find(Header).length;

    validateToEqual(childComponent, 1);
  });

  it("should validate presence of child component TeamList ", () => {
    const wrapper = shallow(<LandingPage />);
    const childComponent = wrapper.find(TeamList).length;

    validateToEqual(childComponent, 1);
  });

  it("should validate presence of child component TeamMentorsList ", () => {
    const wrapper = shallow(<LandingPage />);
    const childComponent = wrapper.find(TeamMentorsList).length;

    validateToEqual(childComponent, 1);
  });

  it("should validate presence of child component Footer ", () => {
    const wrapper = shallow(<LandingPage />);
    const childComponent = wrapper.find(Footer).length;

    validateToEqual(childComponent, 1);
  });
});
