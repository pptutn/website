import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { StyledMenu, StyledMenuItem, linkStyle } from "../styled";

function MenuBar() {
  return (
    <StyledMenu>
      <StyledMenuItem>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/experiences" style={linkStyle}>
          Experience
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/flicks" style={linkStyle}>
          Flicks
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/photos" style={linkStyle}>
          Photos
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/sounds" style={linkStyle}>
          Sounds
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/projects" style={linkStyle}>
          Projects
        </Link>
      </StyledMenuItem>
    </StyledMenu>
  );
}

export default MenuBar;
