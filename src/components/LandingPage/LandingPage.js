import React from "react";

import Header from "../Header/Header";
import TeamList from "../TeamMembersList/TeamList";
import TeamMentorsList from "../TeamMentorsList/TeamMentorsList";
import Footer from "../Footer/Footer";

const LandingPage = ({ theme, handleThemeToggle }) => {
  return (
    <div>
      <Header />
      <TeamList />
      <TeamMentorsList />
      <Footer />
    </div>
  );
};

export default LandingPage;
