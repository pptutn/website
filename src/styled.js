import styled from "styled-components";
import Link from "./components/Link";

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  color: #00e0ff;
  font: 20px Helvetica, sans-serif;
  margin: 0.5rem;

  // this part aint workin
  ${StyledBox}:hover & {
    fill: yellow;
  }
`;

const StyledH2 = styled.h2`
  text-decoration: underline;
  margin: 0;
`;

const StyledParagraph = styled.p`
  margin: 0 rem;
  font-size: 20px;
  text-transform: uppercase;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 18px;
`;

export { StyledLink, StyledBox, StyledList, StyledParagraph, StyledH2 };
