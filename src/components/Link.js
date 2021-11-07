import React from "react";

const Link = ({ name, className, link }) => (
  <a className={className} href={link} target="_blank" rel="noreferrer">
    {name}
  </a>
);

export default Link;
