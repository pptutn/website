import React from "react";
import { StyledList, StyledParagraph, StyledH2 } from "../styled";
import { StyledH1 } from "../pages/styled";

function Section(props) {
  const list = props.details.map((i) => (
    <>
      <li style={{ marginBottom: "-1rem" }} key={i}>
        {i}
      </li>
      <br />
    </>
  ));
  return (
    <>
      <StyledH1>{props.heading}</StyledH1>
      <StyledParagraph>{props.description}</StyledParagraph>
      <StyledList>{list}</StyledList>
      <br />
    </>
  );
}

export default Section;
