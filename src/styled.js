import styled from "styled-components";
import Link from "./components/Link";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-colour: #f890e7;
`;

const StyledLink = styled(Link)`
  color: #2b9eb3;
  font: 20px Helvetica, sans-serif;
  margin: 0.5rem;

  // this part aint workin
  ${StyledBox}:hover & {
    fill: yellow;
  }
`;

const StyledH2 = styled.h2`
  color: #eca72c;
  text-decoration: underline;
  margin: 0;
`;

const StyledParagraph = styled.p`
  margin: 0 rem;
  font-size: 20px;
  text-transform: uppercase;
  color: #2b9eb3;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 18px;
  max-width: 500px;
`;

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
  position: absolute;
  top: 0;
  z-index: 100;
`;

const StyledMenuItem = styled.li`
  height: 80px;
  list-style: none;
  margin: 1rem;
`;

export {
  StyledLink,
  StyledBox,
  StyledList,
  StyledParagraph,
  StyledH2,
  StyledMenu,
  StyledMenuItem,
};
