import React from "react";
import Emoji from "../Emoji/Emoji";
import {
  StyledFooter,
  StyledH2,
  StyledFooterPhrase,
  StyledFooterDeveloperTag,
} from "./FooterStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledH2>
        <span>Thank You</span>
      </StyledH2>
      <StyledFooterPhrase>for checking us out!</StyledFooterPhrase>
      <StyledFooterDeveloperTag>
        Made with <Emoji symbol="❤️" label="love" /> by{" "}
        <a href="https://remrkabledev.com/">reMRKable Dev</a>
      </StyledFooterDeveloperTag>
    </StyledFooter>
  );
};

export default Footer;
