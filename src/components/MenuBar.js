import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Sounds from "../pages/Sounds";
import Flicks from "../pages/Flicks";

function MenuBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/sounds">Sounds</Link>
        </li>
        <li>
          <Link to="/flicks">Flicks</Link>
        </li>
        <li>
          <Link to="/experiences">Experiences</Link>
        </li>
      </ul>

      <hr />
    </div>
  );
}

export default MenuBar;
