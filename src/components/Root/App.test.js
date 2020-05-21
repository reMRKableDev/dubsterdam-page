import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SiteThemeProvider } from "../../contexts/ThemeContext/ThemeContext";
import App from "./App";

import {
  validateToBe,
  validateToEqual,
  validateNotEmpty,
  validateToHaveLength,
} from "../../utils/testValidators";

describe("App unit tests", () => {
  it("should validate Navbar component presence on full mount of App component", () => {
    const wrapper = mount(
      <MemoryRouter>
        <SiteThemeProvider>
          <App />
        </SiteThemeProvider>
      </MemoryRouter>
    );

    const navbar = wrapper.find("Navbar").props();

    validateNotEmpty(navbar);
    validateNotEmpty(navbar.theme);
    validateNotEmpty(navbar.handleThemeToggle);

    wrapper.unmount();
  });

  it("should validate Switch & Route presence on full mount of App component", () => {
    const wrapper = mount(
      <MemoryRouter>
        <SiteThemeProvider>
          <App />
        </SiteThemeProvider>
      </MemoryRouter>
    );

    const routeSwitch = wrapper.find("Switch").props();

    validateNotEmpty(routeSwitch);
    validateToHaveLength(routeSwitch.children, 2);

    const exactPath = wrapper.find("Route").props().exact;
    const path = wrapper.find("Route").props().path;

    validateToBe(exactPath, true);
    validateToEqual(path, "/");

    wrapper.unmount();
  });

  it("should validate Footer component presence on full mount of App component", () => {
    const wrapper = mount(
      <MemoryRouter>
        <SiteThemeProvider>
          <App />
        </SiteThemeProvider>
      </MemoryRouter>
    );

    const footer = wrapper.find('[data-testid="app-footer"]').props();

    validateNotEmpty(footer);

    wrapper.unmount();
  });
});
