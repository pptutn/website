import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { StyledMenu, StyledMenuItem } from "../styled";

function MenuBar() {
  return (
    <StyledMenu>
      <StyledMenuItem>
        <Link to="/">Home</Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/about">About</Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/flicks">Flicks</Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/photos">Photos</Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/sounds">Sounds</Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/experiences">Experiences</Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/projects">Projects</Link>
      </StyledMenuItem>
    </StyledMenu>
  );
}

export default MenuBar;
