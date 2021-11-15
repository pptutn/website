// image gallery and links to the films i've edited
import React from "react";

import {
  StyledCaption,
  StyledVideoItem,
  StyledParagraph,
  StyledWrapper,
  StyledH1,
  StyledH2,
} from "./styled";

function Flicks() {
  return (
    <div>
      <StyledH1>My Flicks</StyledH1>
      <StyledParagraph>
        I'm a self-taught editor/vidographer with a few years of experience in
        Adobe Premiere Pro and Adobe After Effects. Everything I've learnt has
        been through YouTube. Here are some of the video's I've edited (and
        filmed) over the past few years.
      </StyledParagraph>
      <br />
      <br />
      <br />
      <StyledVideoItem>
        <StyledWrapper>
          <StyledCaption>Prefects Cup Video</StyledCaption>
          <StyledParagraph>
            A video created for the annual Prefects Cup against Adelaide High
            School, this cut was played in front of both the MHS and the AHS
            cohort during the Adelaide-Melbourne Exchange in 2018. Perhaps one
            of my favourite projects, this was a grueling edit as I was tasked
            with producing this cut in a single weekend on my own.
          </StyledParagraph>
        </StyledWrapper>

        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/ZlBxoemKDT4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </StyledVideoItem>

      <StyledVideoItem>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/lO66XTSP8MM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <StyledWrapper>
          <StyledCaption>Mercantile Camp Promo</StyledCaption>
          <StyledParagraph>
            This video was used in the promotion of Mercantile's School Holiday
            Rowing Camp in 2021. Having full creative reign, my intention was to
            put on display some of the most fun and exciting parts of rowing at
            Mercs. Most of the media used in this cut was shot by myself during
            the 2020-2021 season.
          </StyledParagraph>
        </StyledWrapper>
      </StyledVideoItem>

      <StyledVideoItem>
        <StyledWrapper>
          <StyledCaption>Mercantile Clubbies Promo</StyledCaption>
          <StyledParagraph>
            In 2021, Mercantile's had won the Champion Club Premiership. This
            fun little edit was a trip down memory lane to celebrate their
            achievements and show off the amazing Mercantile Club Program.
          </StyledParagraph>
        </StyledWrapper>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/m-Pjk-GP5mE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </StyledVideoItem>

      <StyledVideoItem>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/swFkVbrTyRM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <StyledWrapper>
          <StyledCaption>MHS Rowing Promo</StyledCaption>
          <StyledParagraph>
            Filmed and edited entirely by myself. This was my first big project,
            I knew absolutely nothing and it shows. Regardless, this is
            something I was incredibly proud of and marked the beginning of my
            interest in rowing.
          </StyledParagraph>
        </StyledWrapper>
      </StyledVideoItem>

      <StyledVideoItem>
        <StyledWrapper>
          <StyledCaption>Mercantile Season Wrap-Up (unfinished)</StyledCaption>
          <StyledParagraph>
            My most recent project, unfinished, and likely to remain that way.
            Had some pretty cool footage and didn't want it to go to waste.
            Scrubbing through the footage and reminiscing about the season that
            had flown by was incredibly nostalgic.
          </StyledParagraph>
        </StyledWrapper>

        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/VoeaZMwobO0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </StyledVideoItem>
    </div>
  );
}

export default Flicks;
