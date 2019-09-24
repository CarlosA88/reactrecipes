import React, { Component } from "react";
import "./Header.scss";
import image from "./react-logo.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={image} alt=""/>
      </div>
    );
  }
}

export default Header;
