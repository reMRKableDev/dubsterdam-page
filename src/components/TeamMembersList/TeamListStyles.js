import styled from "styled-components";
import { respondTo } from "../../layout/respondTo";
import { bgColor, brandColor, buttonBgColor } from "../../utils/themeColors";

export const StyledH2 = styled.h2`
  color: ${bgColor};
  font-size: 2em;
  font-family: "Rubik", sans-serif;
  margin: 10px 0;
  padding: 20px;
  text-transform: uppercase;
  background-color: ${buttonBgColor};

  ${respondTo.sm`
    font-size: 4.8vw
  `}

  ${respondTo.md`
    font-size: 5.6vw;
  `}

  ${respondTo.lg`
    font-size: 6vw;
  `}
`;

export const StyledSubPhrase = styled.p`
  color: ${brandColor};
  font-family: "Karla", sans-serif;
  margin-bottom: 70px;
  text-transform: uppercase;
`;

export const StyledTeamDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
