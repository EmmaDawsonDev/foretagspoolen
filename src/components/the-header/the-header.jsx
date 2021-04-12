import React from "react";

import "./the-header.scss";

const TheHeader = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default TheHeader;
