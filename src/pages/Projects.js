import React from "react";
import { StyledH1, StyledParagraph } from "./styled";
import { meme } from "./index";

function Projects() {
  return (
    <>
      <StyledH1>These are some of my projects</StyledH1>
      <StyledParagraph>Page in Progress</StyledParagraph>
      <img src={meme}></img>
      <br />
    </>
  );
}

export default Projects;
