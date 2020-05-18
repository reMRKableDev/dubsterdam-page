import styled from "styled-components";
import {
  buttonBgColor,
  buttonTextColor,
  bgColor,
} from "../../utils/themeColors";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 3;
  width: 100%;
`;

export const StyledThemeButton = styled.button`
  background: ${buttonBgColor};
  border: 1px solid ${bgColor};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  color: ${buttonTextColor};
  cursor: pointer;
  font-size: 0.8em;
  padding: 0.5em 1em;
  outline: none;
`;

export const StyledThemeButtonContainer = styled.div`
  padding: 10px;
`;
