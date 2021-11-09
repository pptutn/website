import React from "react";
import newlogo from "../image2vector.svg";
import { StyledParagraph } from "./styled";
import { StyledH1 } from "./styled";

function Home() {
  return (
    <>
      <StyledH1>This is a website</StyledH1>
      <a href="https://youtu.be/uvzJ-3yCto0" target="_blank">
        <img src={newlogo} className="App-logo" alt="logo" />
      </a>

      <StyledParagraph>Click one of the links above to explore</StyledParagraph>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
