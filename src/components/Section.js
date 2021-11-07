import React from "react";
import { StyledList, StyledParagraph, StyledH2 } from "../styled";

function Section(props) {
  const list = props.details.map((i) => <li key={i}>{i}</li>);
  return (
    <>
      <StyledH2>{props.heading}</StyledH2>
      <StyledParagraph>{props.description}</StyledParagraph>
      <StyledList>{list}</StyledList>
      <br />
    </>
  );
}

export default Section;
