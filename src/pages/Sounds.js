// mixes
import React from "react";
import {
  StyledCaption,
  StyledH1,
  StyledH2,
  StyledParagraph,
  StyledVideoItem,
  StyledWrapper,
} from "./styled";

function Sounds() {
  return (
    <>
      <StyledH1>My Sounds</StyledH1>
      <StyledH2>
        At the beginning of the pandemic in Melbourne, amidst all the lockdowns,
        I elected to learn new skill. These are a few of my mixes.
      </StyledH2>
      <br />
      <StyledVideoItem>
        <StyledWrapper>
          <StyledCaption>Monash Virtual O-Fest 2020</StyledCaption>
          <StyledParagraph>
            After only a few months of learning, I was given the opportunity to
            perform at Monash's Orientation Festival (O-Fest) which was held
            virtually due to the pandemic. To say I was shitting bricks is an
            understatement.
          </StyledParagraph>
        </StyledWrapper>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/_XrGQ0sw69s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </StyledVideoItem>
    </>
  );
}

export default Sounds;
