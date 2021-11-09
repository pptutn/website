import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { StyledH1, StyledParagraph } from "./styled";
import "./styling/Photos.css";

function Photos() {
  const imageData = [
    {
      id: 1,
      imgSrc: "/images/1.jpg",
    },
    {
      id: 2,
      imgSrc: "/images/2.jpg",
    },
    {
      id: 3,
      imgSrc: "/images/3.jpg",
    },
    {
      id: 4,
      imgSrc: "/images/4.jpg",
    },
    {
      id: 5,
      imgSrc: "/images/5.jpg",
    },
    {
      id: 6,
      imgSrc: "/images/6.jpg",
    },
    {
      id: 7,
      imgSrc: "/images/7.jpg",
    },
    {
      id: 8,
      imgSrc: "/images/8.jpg",
    },
    {
      id: 9,
      imgSrc: "/images/9.jpg",
    },
    {
      id: 10,
      imgSrc: "/images/10.jpg",
    },
    {
      id: 11,
      imgSrc: "/images/11.jpg",
    },
    {
      id: 12,
      imgSrc: "/images/12.jpg",
    },
    {
      id: 13,
      imgSrc: "/images/13.jpg",
    },
    {
      id: 14,
      imgSrc: "/images/14.jpg",
    },
    {
      id: 15,
      imgSrc: "/images/15.jpg",
    },
    {
      id: 16,
      imgSrc: "/images/16.jpg",
    },
    {
      id: 17,
      imgSrc: "/images/17.jpg",
    },
    {
      id: 18,
      imgSrc: "/images/18.jpg",
    },
    {
      id: 19,
      imgSrc: "/images/19.jpg",
    },
    {
      id: 21,
      imgSrc: "/images/21.jpg",
    },
    {
      id: 22,
      imgSrc: "/images/22.jpg",
    },
    {
      id: 23,
      imgSrc: "/images/23.jpg",
    },
    {
      id: 24,
      imgSrc: "/images/24.jpg",
    },
    {
      id: 25,
      imgSrc: "/images/25.jpg",
    },
    {
      id: 26,
      imgSrc: "/images/26.jpg",
    },
    {
      id: 27,
      imgSrc: "/images/27.jpg",
    },
    {
      id: 28,
      imgSrc: "/images/28.jpg",
    },
    {
      id: 29,
      imgSrc: "/images/29.jpg",
    },
    {
      id: 30,
      imgSrc: "/images/30.jpg",
    },
    {
      id: 31,
      imgSrc: "/images/31.jpg",
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
