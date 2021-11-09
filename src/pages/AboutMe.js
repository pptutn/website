import React from "react";
import {
  StyledH1,
  StyledImage,
  StyledParagraph,
  StyledVideoItem,
  StyledWrapper,
} from "./styled";

function AboutMe() {
  StyledImage.defaultProps = { src: "/images/img_phil.jpg" };
  return (
    <>
      <StyledH1> ABOUT ME </StyledH1>
      <p>Hi I'm Phil :)</p>
      <StyledParagraph maxWidth={"600px"}>
        Jack of all trades, a master of none, but oftentimes better than a
        master of one.
      </StyledParagraph>
      <StyledParagraph maxWidth={"470px"}>
        3rd Year BComm (Finance) + BCompSci (Advanced) @ Monash University
      </StyledParagraph>
      <StyledParagraph maxWidth={"600px"}>
        I like doing things. Have a look around my website for things I do.
      </StyledParagraph>
      <StyledVideoItem>
        <div>
          <StyledImage src="/images/img_phil.jpg"></StyledImage>
          <StyledParagraph>
            Aus Rowing Championships 2021 (Lake Barrington, Tasmania)
          </StyledParagraph>
        </div>
        <div>
          <StyledImage src="/images/img_phil2.jpg"></StyledImage>
          <StyledParagraph>
            That's me in my natural habitat, assembling a rigger.
          </StyledParagraph>
        </div>
      </StyledVideoItem>
    </>
  );
}

export default AboutMe;
