import React from "react";
import { StyledH1, StyledImage, StyledParagraph } from "./styled";

function AboutMe() {
  StyledImage.defaultProps = { src: "/images/img_phil.jpg" };
  return (
    <>
      <StyledH1> ABOUT ME </StyledH1>
      <p>Hi I'm Phil :)</p>
      <p>3rd Year BComm + BCompSci @ Monash University</p>
      <StyledImage src="/images/img_phil.jpg"></StyledImage>
      <StyledParagraph>
        Aus Rowing Championships 2021 - Lake Barrington Tasmania
      </StyledParagraph>
    </>
  );
}

export default AboutMe;
