import styled from "styled-components";
import Link from "./components/Link";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-colour: #f890e7;
`;

const StyledLink = styled(Link)`
  color: #2b9eb3;
  font: 1.5rem Helvetica, sans-serif;
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
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #f890e7;
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : "underline"};
`;

const StyledList = styled.ul`
  margin-bottom: 0rem;
  padding: 0;
  list-style: none;
  font-size: 1.2rem;
  max-width: 50rem;
`;

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  max-width: 93rem;
  position: absolute;
  top: 0;
  margin-top: 1rem;
  z-index: 100;
`;

const StyledMenuItem = styled.li`
  height: 5rem;
  list-style: none;
  margin: 1rem;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#F890E7",
};

export {
  StyledLink,
  StyledBox,
  StyledList,
  StyledParagraph,
  StyledH2,
  StyledMenu,
  StyledMenuItem,
  linkStyle,
};
