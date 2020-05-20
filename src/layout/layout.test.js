import { css } from "styled-components";
import { breakpoints } from "./breakpointVariables";
import { respondTo } from "./respondTo";
import {
  validateNotEmpty,
  validateObjectToHaveProperties,
  validateMockCalledTwice,
} from "../utils/testValidators";

jest.mock("styled-components");

describe("Breakpoints unit tests", () => {
  it("should validate that incoming breakpoints are not empty", () => {
    validateNotEmpty(breakpoints);
  });

  it("should validate breakpoint properties", () => {
    validateObjectToHaveProperties(breakpoints, "xs");
    validateObjectToHaveProperties(breakpoints, "sm");
    validateObjectToHaveProperties(breakpoints, "md");
    validateObjectToHaveProperties(breakpoints, "lg");
  });
});

describe("respondTo unit tests", () => {
  beforeEach(() => {
    css.mockClear();
  });

  it("should validate respondTo properties", () => {
    validateObjectToHaveProperties(respondTo, "xs");
    validateObjectToHaveProperties(respondTo, "sm");
    validateObjectToHaveProperties(respondTo, "md");
    validateObjectToHaveProperties(respondTo, "lg");
  });

  it("should validate respondTo.xs calls css from 'styled-components' twice", () => {
    respondTo.xs();
    validateMockCalledTwice(css);
  });

  it("should validate respondTo.sm calls css from 'styled-components' twice", () => {
    respondTo.sm();
    validateMockCalledTwice(css);
  });

  it("should validate respondTo.md calls css from 'styled-components' twice", () => {
    respondTo.md();
    validateMockCalledTwice(css);
  });

  it("should validate respondTo.lg calls css from 'styled-components' twice", () => {
    respondTo.lg();
    validateMockCalledTwice(css);
  });
});
