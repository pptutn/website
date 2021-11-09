import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { StyledH1, StyledParagraph } from "./styled";
import "./styling/Photos.css";

function Photos() {
  const imageData = [
    {
      id: 1,
      imgSrc: "/images/1.JPG",
    },
    {
      id: 2,
      imgSrc: "/images/2.JPG",
    },
    {
      id: 3,
      imgSrc: "/images/3.JPG",
    },
    {
      id: 4,
      imgSrc: "/images/4.JPG",
    },
    {
      id: 5,
      imgSrc: "/images/5.JPG",
    },
    {
      id: 6,
      imgSrc: "/images/6.JPG",
    },
    {
      id: 7,
      imgSrc: "/images/7.JPG",
    },
    {
      id: 8,
      imgSrc: "/images/8.JPG",
    },
    {
      id: 9,
      imgSrc: "/images/9.JPG",
    },
    {
      id: 10,
      imgSrc: "/images/10.JPG",
    },
    {
      id: 11,
      imgSrc: "/images/11.JPG",
    },
    {
      id: 12,
      imgSrc: "/images/12.JPG",
    },
    {
      id: 13,
      imgSrc: "/images/13.JPG",
    },
    {
      id: 14,
      imgSrc: "/images/14.JPG",
    },
    {
      id: 15,
      imgSrc: "/images/15.JPG",
    },
    {
      id: 16,
      imgSrc: "/images/16.JPG",
    },
    {
      id: 17,
      imgSrc: "/images/17.JPG",
    },
    {
      id: 18,
      imgSrc: "/images/18.JPG",
    },
    {
      id: 19,
      imgSrc: "/images/19.JPG",
    },
    {
      id: 21,
      imgSrc: "/images/21.JPG",
    },
    {
      id: 22,
      imgSrc: "/images/22.JPG",
    },
    {
      id: 23,
      imgSrc: "/images/23.JPG",
    },
    {
      id: 24,
      imgSrc: "/images/24.JPG",
    },
    {
      id: 25,
      imgSrc: "/images/25.JPG",
    },
    {
      id: 26,
      imgSrc: "/images/26.JPG",
    },
    {
      id: 27,
      imgSrc: "/images/27.JPG",
    },
    {
      id: 28,
      imgSrc: "/images/28.JPG",
    },
    {
      id: 29,
      imgSrc: "/images/29.JPG",
    },
    {
      id: 30,
      imgSrc: "/images/30.JPG",
    },
    {
      id: 31,
      imgSrc: "/images/31.JPG",
    },
  ];
  return (
    <>
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
    </>
  );
}

export default Photos;
