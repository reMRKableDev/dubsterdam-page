import styled from "styled-components";
import { bgColor, brandColor } from "../../utils/themeColors";
import { respondTo } from "../../layout/respondTo";
import { fadeInUpAnimation, shakeAnimation } from "../../utils/animations";

export const StyledHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const StyledFigure = styled.figure`
  animation: 1.2s ${shakeAnimation};
  animation-delay: 1.4s;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;

  img {
    width: 30vw;
    height: auto;
  }
`;

export const StyledH1 = styled.h1`
  animation: 1.5s ${fadeInUpAnimation};
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
