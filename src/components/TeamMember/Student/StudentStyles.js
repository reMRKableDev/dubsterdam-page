import styled from "styled-components";
import { respondTo } from "../../../layout/respondTo";
import { bgColor, textColor, brandColor } from "../../../utils/themeColors";

export const StyledCarouselDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StyledCarouselProjectTitle = styled.p`
  text-transform: uppercase;
  text-decoration: underline;
`;

export const StyledCarouselInnerDiv = styled.div`
  background-color: ${textColor};
  padding: 30px;

  a,
  p {
    color: ${bgColor};
    font-size: 0.8em;
  }

  a {
    text-decoration: none;
    border: 1px solid ${brandColor};
    color: ${brandColor};
    text-transform: uppercase;
    padding: 5px;

    &:hover {
      background-color: ${brandColor};
      color: ${bgColor};
    }
  }

  ${respondTo.sm`
    padding: 40px 0;
  `}
`;
