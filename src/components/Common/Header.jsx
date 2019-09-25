import React, { Component } from "react";
import "./Header.scss";
import image from "./react-logo.png";

const Header = () => (
  <div className="header">
    <img src={image} alt="" />
  </div>
);

export default Header;
