import styled from "styled-components";
import { footerColor, brandColor, bgColor } from "../../utils/themeColors";
import { respondTo } from "../../layout/respondTo";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background: ${footerColor};
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledH2 = styled.h2`
  font-size: 6vw;
  font-family: "Rubik", sans-serif;
  margin: 1em 0;
  text-transform: uppercase;

  span {
    color: ${brandColor};
    border: 4px solid ${brandColor};
    box-shadow: 0 0 10px ${!bgColor};
    padding: 5px;
    text-transform: none;
  }

  ${respondTo.sm`
    font-size: 5.5vw;
    margin: 0.8em 0;

    span {
        border: 6px solid ${brandColor};
    }
  `}

  ${respondTo.md`
    font-size: 5vw;
    margin: 0.6em 0;

    span {
        border: 8px solid ${brandColor};
    }
  `}
  
  ${respondTo.lg`
    font-size: 4.5vw;
    margin: 0.5em 0;

    span {
        border: 10px solid ${brandColor};
    }
  `}
`;

export const StyledFooterPhrase = styled.p`
  font-family: "Karla", sans-serif;
  color: ${bgColor};
  margin-bottom: 25px;
`;

export const StyledFooterDeveloperTag = styled.p`
  font-family: "Rubik", sans-serif;
  color: ${bgColor};

  a {
    color: ${brandColor};
    text-decoration: none;
    cursor: pointer;
  }
`;
