import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { StyledH1, StyledParagraph } from "./styled";
import "./styling/Photos.css";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img_phil,
  img_phil2,
  img_phil3,
  img_phil4,
  meme,
} from "./index";

function Photos() {
  const imageData = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
    {
      id: 24,
      imgSrc: img24,
    },
    {
      id: 25,
      imgSrc: img25,
    },
    {
      id: 26,
      imgSrc: img26,
    },
    {
      id: 27,
      imgSrc: img27,
    },
    {
      id: 28,
      imgSrc: img28,
    },
    {
      id: 29,
      imgSrc: img29,
    },
    {
      id: 30,
      imgSrc: img30,
    },
    {
      id: 31,
      imgSrc: img31,
    },
  ];
  return (
    <div>
      <StyledH1>My Photos</StyledH1>
      <StyledParagraph>
        I fell in love with with film photography from the first photo I took.
        Here are a couple of my favourites.
      </StyledParagraph>

      <ImageList sx={{ width: 1919 }} variant="woven" cols={3} gap={2}>
        {imageData.map((item) => (
          <ImageListItem key={item.imgSrc}>
            <img
              src={`${item.imgSrc}?w=161&fit=crop&auto=format`}
              srcSet={`${item.imgSrc}?w=161&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
              className="zoom"
            />
          </ImageListItem>
        ))}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </ImageList>
    </div>
  );
}

export default Photos;
