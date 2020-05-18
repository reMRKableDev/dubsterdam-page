import styled from "styled-components";
import {
  bgColor,
  textColor,
} from "../../../utils/themeColors";

export const StyledCarouselDiv = styled.div`
  background-color: ${textColor};
  padding: 50px;

  p {
    color: ${bgColor};
  }
`;
