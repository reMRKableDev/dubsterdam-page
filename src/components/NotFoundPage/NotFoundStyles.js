import styled from "styled-components";
import {
  bgColor,
  brandColor,
  buttonBgColor,
  buttonTextColor,
} from "../../utils/themeColors";
import { respondTo } from "../../layout/respondTo";

export const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

  p,
  a {
    font-family: "Karla", sans-serif;
    text-decoration: none;
  }

  a {
    color: ${buttonTextColor};
    background-color: ${buttonBgColor};
    text-decoration: underline;
    padding: 10px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 8vw;
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
  margin: 0.8em 0;

  span {
    border: 6px solid ${brandColor};
  }
  `}

  ${respondTo.md`
  margin: 0.6em 0;

  span {
    border: 8px solid ${brandColor};
  }
  `}
  
  ${respondTo.lg`
  margin: 0.5em 0;

  span {
    border: 10px solid ${brandColor};
  }
	`}
`;
