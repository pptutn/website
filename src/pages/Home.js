import React from "react";
import newlogo from "../image2vector.svg";
import { StyledH1 } from "./styled";

function Home() {
  return (
    <>
      <StyledH1>Welcome to my shitty website</StyledH1>
      <img src={newlogo} className="App-logo" alt="logo" />
    </>
  );
}

export default Home;
