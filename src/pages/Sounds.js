// mixes
import React from "react";
import {
  StyledCaption,
  StyledH1,
  StyledH2,
  StyledParagraph,
  StyledVideoItem,
  StyledWrapper,
  TextOverImage,
} from "./styled";

function Sounds() {
  return (
    <>
      <StyledH1>My Sounds</StyledH1>
      <StyledH2>
        At the beginning of the pandemic in Melbourne, amidst all the lockdowns,
        I elected to learn new skill. These are a few of my mixes and a few of
        my playlists.
      </StyledH2>

      <a
        href="https://soundcloud.com/phil-tran-51889147/disco-sessions?si=3e6054fb088748e5aff43a214757c709"
        target="_blank"
      >
        {/* <TextOverImage>click me </TextOverImage> */}
        <img src="/images/img_phil4.jpg" resizeMode="contain"></img>
      </a>

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
      <StyledH1>My Playlists</StyledH1>
      <br />
      <StyledParagraph>Some modern Disco/Funk/House</StyledParagraph>
      <iframe
        src="https://open.spotify.com/embed/playlist/6W7HhJIaFJxSoKDoD7mDNZ?utm_source=generator&amp;theme=0"
        width="40%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <br />
      <br />
      <StyledParagraph>Some oldskool Disco/Funk</StyledParagraph>
      <iframe
        src="https://open.spotify.com/embed/playlist/5YdBdmZphkmTgXxmpTilo1?utm_source=generator&amp;theme=0"
        width="40%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <br />
      <br />
      <StyledParagraph>Eurodance</StyledParagraph>
      <iframe
        src="https://open.spotify.com/embed/playlist/0tN6eo6OSNHg6HmhnbWXYm?utm_source=generator&amp;theme=0"
        width="40%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <br />
      <br />
      <StyledParagraph>
        If you grew up in the 2000s, you'll like this playlist.
      </StyledParagraph>
      <iframe
        src="https://open.spotify.com/embed/playlist/7LxdPnL1pUm6FShQuCduVb?utm_source=generator&amp;theme=0"
        width="40%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <br />
    </>
  );
}

export default Sounds;
