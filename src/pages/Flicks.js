// image gallery and links to the films i've edited
import React from "react";
import { StyledH1 } from "../styled";
import { StyledCaption, StyledVideoItem } from "./styled";

function Flicks() {
  return (
    <>
      <StyledH1>My Flicks</StyledH1>
      <p>
        A collection of some of the pictures I've taken and the videos I've
        edited
      </p>
      <StyledVideoItem>
        <StyledCaption>Prefects Cup Video</StyledCaption>
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
        <StyledCaption>Mercantile Camp Promo</StyledCaption>
      </StyledVideoItem>

      <StyledVideoItem>
        <StyledCaption>Mercantile Clubbies Promo</StyledCaption>
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
        <StyledCaption>MHS Rowing Promo</StyledCaption>
      </StyledVideoItem>

      <StyledVideoItem>
        <StyledCaption>Mercantile Season Wrap-Up (unfinished)</StyledCaption>
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
    </>
  );
}

export default Flicks;
