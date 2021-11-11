import React from "react";
import {
  StyledH1,
  StyledImage,
  StyledParagraph,
  StyledVideoItem,
  StyledWrapper,
} from "./styled";

import image1 from "../images/img_phil.JPG";
import image2 from "../images/img_phil2.JPG";

function AboutMe() {
  // StyledImage.defaultProps = { src: "../images/img_phil.JPG" };
  return (
    <>
      <StyledH1> ABOUT ME </StyledH1>
      <p>Hi I'm Phil :)</p>
      <StyledParagraph maxWidth={"37rem"}>
        Jack of all trades, a master of none, but oftentimes better than a
        master of one.
      </StyledParagraph>
      <StyledParagraph maxWidth={"37rem"}>
        3rd Year
        <span style={{ color: "#ff0000" }}> BComm (Finance) </span>+
        <span style={{ color: "#ff0000" }}> BCompSci (Advanced) </span>@ Monash
        University
      </StyledParagraph>
      <StyledParagraph maxWidth={"37rem"}>
        I like doing things. Have a look around my website for things I do.
      </StyledParagraph>
      <StyledVideoItem>
        <div>
          <StyledImage src={image1}></StyledImage>
          <StyledParagraph>
            Aus Rowing Championships 2021 (Lake Barrington, Tasmania)
          </StyledParagraph>
        </div>
        <div>
          <StyledImage src={image2}></StyledImage>
          <StyledParagraph>
            That's me in my natural habitat, assembling a rigger.
          </StyledParagraph>
        </div>
      </StyledVideoItem>
    </>
  );
}

export default AboutMe;
