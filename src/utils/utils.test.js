import {
  bounceAnimation,
  fadeInUpAnimation,
  fadeInDownAnimation,
  shakeAnimation,
  fadeInUpShakeAnimation,
} from "./animations";

import {
  mailIcon,
  gitHubIcon,
  linkedInIcon,
  databaseIcon,
  cssIcon,
  htmlIcon,
  reactIcon,
  nodeIcon,
  javascriptIcon,
} from "./icons";

import { validateNotEmpty } from "./testValidators";

describe("Animations unit tests", () => {
  it("should validate 'bounce' animation to not be empty ", () => {
    validateNotEmpty(bounceAnimation);
  });

  it("should validate 'fade in up' animation to not be empty ", () => {
    validateNotEmpty(fadeInUpAnimation);
  });

  it("should validate 'fade in down' animation to not be empty ", () => {
    validateNotEmpty(fadeInDownAnimation);
  });

  it("should validate 'shake' animation to not be empty ", () => {
    validateNotEmpty(shakeAnimation);
  });

  it("should validate 'fade in up shake' animation to not be empty ", () => {
    validateNotEmpty(fadeInUpShakeAnimation);
  });
});

describe("Icons unit tests", () => {
  it("should validate 'mail' icon to not be empty ", () => {
    validateNotEmpty(mailIcon);
  });

  it("should validate 'github' icon to not be empty ", () => {
    validateNotEmpty(gitHubIcon);
  });

  it("should validate 'linkedin' icon to not be empty ", () => {
    validateNotEmpty(linkedInIcon);
  });

  it("should validate 'database' icon to not be empty ", () => {
    validateNotEmpty(databaseIcon);
  });

  it("should validate 'css' icon to not be empty ", () => {
    validateNotEmpty(cssIcon);
  });

  it("should validate 'html' icon to not be empty ", () => {
    validateNotEmpty(htmlIcon);
  });

  it("should validate 'react' icon to not be empty ", () => {
    validateNotEmpty(reactIcon);
  });

  it("should validate 'node' icon to not be empty ", () => {
    validateNotEmpty(nodeIcon);
  });

  it("should validate 'javascript' icon to not be empty ", () => {
    validateNotEmpty(javascriptIcon);
  });
});
