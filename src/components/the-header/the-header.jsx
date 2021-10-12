import React from "react";

import "./the-header.scss";
import ITHSLogo from '../../assets/ithslogga.jpg'

const TheHeader = ({ title }) => {
  return (
    <header>
      <img src={ITHSLogo} alt="" className="logo" />
      <div className="flexContainer">
        <h1>{title}</h1>
        <h2>ITHS Stockholm</h2>
      </div>
    </header>
  )
}

export default TheHeader;
