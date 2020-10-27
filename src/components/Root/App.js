import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { withTheme } from "styled-components";
import { useTheme } from "../../contexts/ThemeContext/ThemeContext";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import NotFound from "../NotFoundPage/NotFound";

function App({ theme }) {
  const toggleTheme = useTheme();

  const handleThemeToggle = () => {
    setTimeout(() => {
      toggleTheme.toggle();
    }, 100);
  };

  return (
    <div className="App" data-testid="app-root">
      <Navbar theme={theme} handleThemeToggle={handleThemeToggle} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withTheme(App);
