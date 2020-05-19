import styled from "styled-components";
import { respondTo } from "../../layout/respondTo";
import { bgColor, brandColor, textAccentColor } from "../../utils/themeColors";
import {
  gitHubIcon,
  linkedInIcon,
  mailIcon,
  databaseIcon,
  cssIcon,
  htmlIcon,
  reactIcon,
  nodeIcon,
  javascriptIcon,
} from "../../utils/icons";

export const StyledArticle = styled.article`
box-shadow: 0 0 10px #555;
border: 2px solid ${!bgColor};
margin: 10px 0 80px 0;
font-family: "Karla", sans-serif;
width: 80%;

${respondTo.sm`
  width: 70%;
`}

${respondTo.md`
  width: 60%;
`}

${respondTo.lg`
  width: 50%;
`}
`;

export const StyledArticleHeader = styled.header`
  position: relative;
  height: 48px;
`;

export const StyledProfileImage = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  border-radius: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid ${bgColor};
  box-shadow: 0 0 5px #555;
`;

export const StyledStudentInfoContainer = styled.div`
  padding: 10px 0 0 0;

  p {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
`;

export const StyledStudentInfo = styled.div`
margin: 10px 0;
padding: 5px;

h3 {
  margin: 0 0 10px 0;
  font-size: 1em;
  line-height: 2em;

  span {
    font-size: 1.1em;
    border: 2px solid ${brandColor};
    color: ${brandColor};
    padding: 5px;
  }
}

h4 {
  text-transform: uppercase;
  text-decoration: underline;
  margin: 15px 0 5px 0;
  font-size: 1em
}

p {
  font-size: 0.8em
  text-transform: none;
  color: ${textAccentColor};
}

hr {
  width: 60%;
}

${respondTo.sm`
  h3 {
    font-size: 3vw;
    line-height: 1.8em;

    span {
      font-size: 3.8vw;
    }
  }

  h4 {
    font-size: 2.3vw
  }

  p {
    font-size: 2vw;
  }
`}

${respondTo.md`
  h3 {
    font-size: 3vw;
  }

  h4 {
    font-size: 2vw
  }

  p {
    font-size: 1.8vw;
  }
`}

${respondTo.lg`
  h3 {
    font-size: 2.5vw;

    span {
      font-size: 3.5vw;
    }
  }

  h4 {
    font-size: 1.8vw
  }

  p {
    font-size: 1.5vw;
  }
`}
`;

export const StyledIconsDivContainer = styled.div`
  background-color: ${brandColor};
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${respondTo.sm`
  flex-direction: row;
`}
`;

export const StyledIcons = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 0;
    text-transform: uppercase;
    text-decoration: underline;
  }
`;

export const StyledGitHubIcon = styled(gitHubIcon)`
  color: ${bgColor};
  width: 1.7em;
  cursor: pointer;
  border-bottom: 1px solid ${bgColor};
  margin-bottom: 5px;

  ${respondTo.sm`
    width: 1.75em;
  `}

  ${respondTo.md`
    width: 2em;
  `}

  ${respondTo.lg`
    width: 2.25em;
  `}
`;

export const StyledLinkedInIcon = styled(linkedInIcon)`
  color: ${bgColor};
  width: 1.7em;
  cursor: pointer;
  border-bottom: 1px solid ${bgColor};


  ${respondTo.sm`
    width: 1.75em;
  `}

  ${respondTo.md`
    width: 2em;
  `}

  ${respondTo.lg`
    width: 2.25em;
  `}
`;

export const StyledMailIcon = styled(mailIcon)`
  color: ${bgColor};
  width: 1.5em;
  cursor: pointer;
  margin: 0 5px;

  ${respondTo.sm`
    width: 1.75em;
  `}

  ${respondTo.md`
    width: 2em;
  `}

  ${respondTo.lg`
    width: 2.25em;
  `}
`;

export const StyledDatabaseIcon = styled(databaseIcon)`
  color: ${!bgColor};
  width: 1.5em;

  ${respondTo.sm`
    width: 1.75em;
  `}

  ${respondTo.md`
    width: 2em;
  `}

  ${respondTo.lg`
    width: 2.25em;
  `}
`;

export const StyledCssIcon = styled(cssIcon)`
  color: ${!bgColor};
  width: 1.5em;

  ${respondTo.sm`
    width: 1.75em;
  `}

  ${respondTo.md`
    width: 2em;
  `}

  ${respondTo.lg`
    width: 2.25em;
  `}
`;

export const StyledHtmlIcon = styled(htmlIcon)`
  color: ${!bgColor};
  width: 1.5em;

  ${respondTo.sm`
    width: 1.75em;
  `}

  ${respondTo.md`
    width: 2em;
  `}

  ${respondTo.lg`
    width: 2.25em;
  `}
`;

export const StyledReactIcon = styled(reactIcon)`
  color: ${!bgColor};
  width: 1.5em;

  ${respondTo.sm`
    width: 1.75em;
  `}

  ${respondTo.md`
    width: 2em;
  `}

  ${respondTo.lg`
    width: 2.25em;
  `}
`;

export const StyledNodeIcon = styled(nodeIcon)`
  color: ${!bgColor};
  width: 1.5em;

  ${respondTo.sm`
    width: 1.75em;
  `}

  ${respondTo.md`
    width: 2em;
  `}

  ${respondTo.lg`
    width: 2.25em;
  `}
`;

export const StyledJsIcon = styled(javascriptIcon)`
  color: ${!bgColor};
  width: 1.5em;

  ${respondTo.sm`
    width: 1.75em;
  `}

  ${respondTo.md`
    width: 2em;
  `}

  ${respondTo.lg`
    width: 2.25em;
  `}
`;
