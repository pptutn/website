import React from "react";
import { StyledLink, StyledBox } from "../styled";

function Socials() {
  return (
    <StyledBox>
      <StyledLink
        name={"LinkedIn"}
        link={"https://www.linkedin.com/in/thephilliptran/"}
      />
      <br />
      <StyledLink
        name={"Spotify"}
        link={"https://open.spotify.com/user/ptsm_?si=ed954a7b7b4c4170"}
      />
      <br />
      <StyledLink
        name={"Sound Cloud"}
        link={"https://soundcloud.com/phil-tran-51889147/tracks"}
      />
      <br />
      <StyledLink name={"YouTube"} link={"https://youtu.be/ZlBxoemKDT4"} />
    </StyledBox>
  );
}

export default Socials;
